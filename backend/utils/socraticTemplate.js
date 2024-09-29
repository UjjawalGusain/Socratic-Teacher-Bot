const { HumanMessage } = require("@langchain/core/messages");
const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { FewShotChatMessagePromptTemplate, ChatPromptTemplate } = require("@langchain/core/prompts");
const { getSessionHistory } = require('./sessionUtils'); // Ensure correct path
const { allPrompts } = require("../prompts/promptsExamples");

// Use the Google Gemini model with proper error handling for API key
if (!process.env.GOOGLE_GEMINI_API_KEY) {
  throw new Error("Missing Google Gemini API key. Please set it in your environment variables.");
}
const gemini = new ChatGoogleGenerativeAI({
  model: "gemini-pro",
  apiKey: process.env.GOOGLE_GEMINI_API_KEY,
});

// Define a template for generating few-shot examples
const examplePrompt = ChatPromptTemplate.fromMessages([
  ["human", "{input}"],
  ["ai", "{output}"],
]);

// Create a FewShot template using prompts as examples
const fewShotPrompt = new FewShotChatMessagePromptTemplate({
  examplePrompt,
  examples: allPrompts.map((prompt) => ({
    input: prompt.input,
    output: prompt.output,
  })),
  inputVariables: ["studentInput", "conversationHistory"], // Keep input variables relevant
});

console.log(fewShotPrompt);


// Corrected ChatPromptTemplate for Socratic guidance
const message = `You are a Socratic teaching assistant and your name is Mr. Socrates helping a student understand sorting algorithms.
   You should never directly tell the student the answer. Instead, based on their input, ask a probing question that helps them reflect deeper. Give them a hint to their answer in your question.
   The current conversation history is as follows: {conversationHistory}
   The student's input is: {studentInput}

   If the student asks a question that is not related to sorting or data structures and algorithm, reply with:
   "Sorry student. This is not some information I possess. I might be able to help you if you seek to understand sorting"
   
   Do not repeat any questions. Avoid asking the same question more than once, even if the topic persists.
   Do not transition from a question suddenly. Ensure smooth transitions between questions and topics.
   Slowly advance the concept. Each new question should be a gradual step towards deeper understanding, not a sudden leap.
   
   ### Answer Format:
   1. Ask one clear and focused Socratic question based on their input. 
   2. Always respond with a question designed to promote critical thinking.
   3. Take the user towards the right answer by asking right questions. Questions should not repeat.
   4. If user does not understand, give hints inside the question.
   
   Formulate the next question to guide the student in their learning process. 
   
   Your answer should follow this format:
    - Always reply to greeting by greetings, and then your name, and then a question but only for the first question.
    - Ask one Socratic question directly related to their input.

   Examples: ${fewShotPrompt}`;


// Create a ChatPromptTemplate using the fromMessages method
const socraticTemplate = ChatPromptTemplate.fromMessages([
  ["system", message], // Use "system" for the role of the message
  // fewShotPrompt,
]);

// Function to generate Socratic questions based on the student's input and session history
const withMessageHistory = async (studentInput, sessionId) => {
  try {
    // Get the session history
    const session = await getSessionHistory(sessionId);

    // Ensure session.messages exists, initialize if empty
    if (!session.messages) {
      session.messages = [];
    }

    // Add the student's message to session history
    session.messages.push({ role: "student", content: studentInput });
    await session.save();

    // Format the conversation history (adding line breaks for readability)
    const conversationHistory = session.messages
      .map((message) => `${message.role === 'student' ? 'Student' : 'Assistant'}: ${message.content}`)
      .join("\n\n");  // Double line break for readability

    // Generate the Socratic prompt
    const socraticPromptStr = await socraticTemplate.format({
      studentInput,
      conversationHistory,
    });

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

    // Add assistant's response to the session
    session.messages.push({ role: "assistant", content: response.content });
    await session.save();

    // Return assistant's response
    return response.content;

  } catch (error) {
    console.error("Error in withMessageHistory:", error);
    throw new Error("Failed to process the student's message. Please try again.");
  }
};

module.exports = { withMessageHistory };