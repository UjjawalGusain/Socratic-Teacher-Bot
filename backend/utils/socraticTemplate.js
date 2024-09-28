const { SystemMessagePromptTemplate } = require("@langchain/core/prompts");
const {
  HumanMessage,
  AIMessage,
  SystemMessage,
} = require("@langchain/core/messages");
const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const {
  FewShotChatMessagePromptTemplate,
  ChatPromptTemplate,
} = require("@langchain/core/prompts");
const { getSessionHistory } = require("../controllers/sessionController");
const { diagnosticPrompts } = require("../prompts/promptsExamples");

// Use the Google Gemini model
const gemini = new ChatGoogleGenerativeAI({
  model: "gemini-pro",
  apiKey: process.env.GOOGLE_GEMINI_API_KEY,
});

// Define a template for generating few-shot examples
const examplePrompt = ChatPromptTemplate.fromMessages([
  ["human", "{input}"],
  ["ai", "{output}"],
]);

// Create a FewShot template using diagnostic prompts as examples
const fewShotPrompt = new FewShotChatMessagePromptTemplate({
  examplePrompt,
  examples: diagnosticPrompts.map((prompt) => ({
    input: prompt.input,
    output: prompt.output,
  })),
  inputVariables: ["studentInput", "conversationHistory"], // Keep input variables relevant
});

// Corrected ChatPromptTemplate for the Socratic assistant
const message = `You are a Socratic teaching assistant helping a student understand sorting algorithms.
   You should never directly tell the student the answer. Instead, ask probing questions to guide them.
   Here are some examples of previous interactions to guide your response:
   ${diagnosticPrompts.map((prompt) => `Human: ${prompt.input}\nAI: ${prompt.output}`).join("\n")}
   The current conversation history is as follows: {conversationHistory}
   The student's input is: {studentInput}
   Your next Socratic question should be:`;


// Create a ChatPromptTemplate using the fromMessages method
const socraticTemplate = ChatPromptTemplate.fromMessages([
  ["system", message], // Use "system" for the role of the message
]);

const withMessageHistory = async (studentInput, sessionId) => {
  // Get the session history
  const session = await getSessionHistory(sessionId);

  // Add the student's message to session history
  session.messages.push({ role: "student", content: studentInput });
  await session.save();

   // Format the conversation history
  const conversationHistory = session.messages
    .map((message) => `${message.role}: ${message.content}`)
    .join("\n");

  // Log the values to ensure they're correct
  // console.log("Student Input:", studentInput);
  // console.log("Conversation History:", conversationHistory);

  // Generate the Socratic prompt
  const socraticPromptStr = await socraticTemplate.format({
    studentInput,
    conversationHistory,
  });

  // Ensure Socratic prompt is not empty
  if (!socraticPromptStr) {
    throw new Error("Socratic prompt string is empty!");
  }

  // Get the assistant's response
  const response = await gemini.invoke([
    new HumanMessage({ content: socraticPromptStr }),
  ]);

  // Ensure response content is not empty
  if (!response.content) {
    throw new Error("Response content is empty!");
  }

  // Add assistant's response to the session
  session.messages.push({ role: "assistant", content: response.content });
  await session.save();

  // Return assistant's response
  return response.content;
};

module.exports = { withMessageHistory };
