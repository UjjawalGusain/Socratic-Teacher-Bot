const { PromptTemplate } = require("@langchain/core/prompts");
const { HumanMessage } = require("@langchain/core/messages");
const Session = require("../models/SessionSchema");
const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");

// Use the Google Gemini model
const gemini = new ChatGoogleGenerativeAI({
  model: "gemini-pro",
  apiKey: process.env.GOOGLE_GEMINI_API_KEY,
});

// Socratic question template
const socraticTemplate = `
You are a Socratic teaching assistant helping a student understand sorting algorithms.
You should never directly tell the student the answer. Instead, ask probing questions to guide them.

The current conversation history is as follows:
{conversationHistory}

The student's input is: {studentInput}
Your next Socratic question should be:
`;

// Template for prompts
const prompt = new PromptTemplate({
  inputVariables: ["studentInput", "conversationHistory"],
  template: socraticTemplate,
});

// Retrieve or create session history
const getSessionHistory = async (sessionId) => {
  let session = await Session.findOne({ sessionId });
  if (!session) {
    session = new Session({ sessionId, messages: [] });
    await session.save();
  }
  return session;
};

// Use message history when generating responses
const withMessageHistory = async (studentInput, sessionId) => {
  // console.log(`Student Input: ${studentInput}, session Id: ${sessionId}`);
  
  const session = await getSessionHistory(sessionId);
  // console.log("Session: ", session);
  
  // Add the student's message to session history
  session.messages.push({ role: "student", content: studentInput });
  await session.save();

  // Format the conversation history to include both student and assistant messages
  const conversationHistory = session.messages
    .map((message) => `${message.role}: ${message.content}`)
    .join("\n");

  // Generate the prompt with the entire conversation history
  const promptStr = await prompt.format({
    studentInput,
    conversationHistory,
  });

  // Log the generated prompt for debugging
  // console.log("Generated Prompt: ", promptStr);
  
  if (!promptStr) {
    throw new Error("Prompt string is empty!");
  }

  // Get the assistant's response from the Gemini model
  const response = await gemini.invoke([new HumanMessage({ content: promptStr })]);

  // Log the response for debugging
  // console.log("Response: ", response);
  
  // Check if response.content is empty
  if (!response.content) {
    throw new Error("Response content is empty!");
  }

  // Add the assistant's response to the session
  session.messages.push({ role: "assistant", content: response.content });
  await session.save();

  return response.content;
};

module.exports = { getSessionHistory, withMessageHistory };
