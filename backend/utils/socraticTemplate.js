const { HumanMessage } = require("@langchain/core/messages");
const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { ChatPromptTemplate } = require("@langchain/core/prompts");
const { getSessionHistory } = require('./sessionUtils'); // Ensure correct path
// const { examplePrompts, introPrompts } = require("../prompts/promptsExamples");

// Use the Google Gemini model with proper error handling for API key
if (!process.env.GOOGLE_GEMINI_API_KEY) {
  throw new Error("Missing Google Gemini API key. Please set it in your environment variables.");
}
const gemini = new ChatGoogleGenerativeAI({
  model: "models/gemini-1.5-flash-001-tuning",
  apiKey: process.env.GOOGLE_GEMINI_API_KEY,
});


// Socratic message template
const message = `
  You are Mr. Socrates, a Socratic teaching assistant focused on helping students understand data structures and algorithms.

  Instead of providing direct answers, your role is to encourage deeper reflection by asking probing questions based on the student's input. 
  ALWAYS respond by building on the student's input.

  Always greet the student if their latest message includes a common greeting, such as "hello" or "hi." For instance:
  "Hello, student! I am Mr. Socrates. What question or thought brings you to this pursuit of understanding today?"

  If the student asks ANYTHING UNRELATED TO DATA STRUCTURES AND ALGORITHMS, ALWAYS RESPOND WITH:
  "Sorry, student, this is not information I possess. I can help you with data structures and algorithms. Is there anything else you want to know about it?"

  Current conversation history: {conversationHistory}
  Student's input: {studentInput}


  Remember to:
  - Avoid repeating questions.
  - Ensure smooth transitions between topics.
  - Gradually guide the student towards deeper understanding with each question.

  **Answer Format:**
  1. Ask one clear Socratic question based on the student's input.
  2. Respond with a question designed to promote critical thinking.
  3. If the student struggles to understand, provide hints within your question.

`;

// Create a ChatPromptTemplate using the fromMessages method
const socraticTemplate = ChatPromptTemplate.fromMessages([
  ["system", message], 
]);

// Function to generate Socratic questions based on the student's input and session history
const withMessageHistory = async (studentInput, sessionId) => {
  // console.log("Start");
  
  try {
    // Get the session history
    const session = await getSessionHistory(sessionId);

    // Ensure session.messages exists, initialize if empty
    if (!session.messages) {
      session.messages = [];
    }

    // console.log(session);
    
    // Find the current max chat number in the session
    let maxChatNumber = session.messages.length
      ? Math.max(...session.messages.map((msg) => msg.chatNumber || 0))
      : 0;

    // Increment the chat number for the new message
    const newChatNumber = maxChatNumber + 1;
    
    // Add the student's message to session history with chat number
    session.messages.push({
      chatNumber: newChatNumber,
      role: "student",
      content: studentInput,
    });
    await session.save();

    // Format conversation history with chat number and role
    const conversationHistory = session.messages
    .map((message) => {
      return `Chat ${message.chatNumber} (Role: ${message.role}): ${message.content}`;
    })
    .join("\n\n");

    // Generate the Socratic prompt
    const socraticPromptStr = await socraticTemplate.format({
      studentInput,
      conversationHistory: conversationHistory, // Assistant needs full context
    });
    
    // console.log(socraticPromptStr);
    

    // Ensure Socratic prompt is not empty
    if (!socraticPromptStr) {
      throw new Error("Socratic prompt string is empty!");
    }

    // Get the assistant's response using the Gemini model
    const response = await gemini.invoke([
      new HumanMessage({ content: socraticPromptStr }),
    ]);

    // Ensure response content is not empty
    if (!response || !response.content) {
      throw new Error("Response content is empty!");
    }

    // Increment chat number for the assistant's response
    const assistantChatNumber = newChatNumber + 1;

    // Add assistant's response to the session with chat number
    session.messages.push({
      chatNumber: assistantChatNumber,
      role: "assistant",
      content: response.content,
    });
    await session.save();

    // Return assistant's response
    return response.content;

  } catch (error) {
    console.error("Error in withMessageHistory:", error);
    throw new Error("Failed to process the student's message. Please try again.");
  }
};


module.exports = { withMessageHistory };
