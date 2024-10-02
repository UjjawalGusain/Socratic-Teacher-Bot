const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, unique: true },
  messages: [
    {
      role: { type: String, enum: ["student", "assistant"], required: true },
      content: { type: String, required: true },
      chatNumber: {type: String, required: true}
    }
  ]
});
 
const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
