const { PromptTemplate } = require("@langchain/core/prompts");
const { HumanMessage } = require("@langchain/core/messages");
const { InMemoryChatMessageHistory, RunnableWithMessageHistory } = require("@langchain/core/runnables");
const Session = require("../models/Session");

// Socratic question template
const socraticTemplate = `
You are a Socratic teaching assistant helping a student understand sorting algorithms.
You should never directly tell the student the answer. Instead, ask probing questions to guide them.

The student's input is: {studentInput}
Your next Socratic question should be:
`;

const prompt = new PromptTemplate({
  inputVariables: ["studentInput"],
  template: socraticTemplate,
});

// Store for message history
const store = {};

const getSessionHistory = async (sessionId) => {
  let session = await Session.findOne({ sessionId });
  if (!session) {
    session = new Session({ sessionId, messages: [] });
    await session.save();
  }
  return session;
};

const withMessageHistory = async (studentInput, sessionId) => {
  const session = await getSessionHistory(sessionId);

  // Add the student's message to session history
  session.messages.push({ role: "student", content: studentInput });
  await session.save();

  // Format the student input using the template
  const promptStr = prompt.format({ studentInput });

  // Use the Google Gemini model
  const gemini = new ChatGoogleGenerativeAI({ model: "gemini-pro", apiKey: process.env.GOOGLE_GEMINI_API_KEY });

  const response = await gemini.invoke([new HumanMessage({ content: promptStr })]);

  // Add assistant's response to the session
  session.messages.push({ role: "assistant", content: response.content });
  await session.save();

  return response.content;
};

module.exports = { getSessionHistory, withMessageHistory };
