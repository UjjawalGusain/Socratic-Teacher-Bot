const { HumanMessage } = require("@langchain/core/messages");
const { withMessageHistory } = require("../utils/socraticTemplate");

const chatWithAssistant = async (req, res) => {
  // console.log(`Request: ${req}`);
  
  const { sessionId, studentInput } = req.body; 

  try {
    // Retrieve session history and generate a new Socratic question
    // console.log(`Student Input: ${studentInput}, session Id: ${sessionId}`);
    const response = await withMessageHistory(studentInput, sessionId);

    // Return the generated Socratic question
    res.json({ message: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate response" });
  }
};


module.exports = { chatWithAssistant };