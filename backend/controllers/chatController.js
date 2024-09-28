const { HumanMessage } = require("@langchain/core/messages");
const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { getSessionHistory, withMessageHistory } = require("../utils/template");

// Initialize Google Gemini with LangChain
const gemini = new ChatGoogleGenerativeAI({ model: "gemini-pro", apiKey: process.env.GOOGLE_GEMINI_API_KEY });

exports.chatWithAssistant = async (req, res) => {
  const { sessionId, studentInput } = req.body;

  try {
    // Retrieve session history and generate a new Socratic question
    const response = await withMessageHistory(studentInput, sessionId);

    // Return the generated Socratic question
    res.json({ message: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate response" });
  }
};
