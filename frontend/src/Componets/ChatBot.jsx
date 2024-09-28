import React, { useState, useEffect, useRef } from 'react';
import '../CSS_Files/Chatbot.css'; 
import axios from 'axios';  // Import Axios
import { sessionEndpoints } from '../../api/api';  // Import your API endpoints

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sessionId, setSessionId] = useState(null);  // State to store session ID
  const chatBoxRef = useRef(null);

  // Function to create a new session when the component mounts
  const createNewSession = async () => {
    try {
      const response = await axios.post(sessionEndpoints.CREATE_SESSION_API);
      setSessionId(response.data.sessionId);  // Store the session ID in the state
    } catch (error) {
      console.error("Error creating session:", error);
    }
  };

  useEffect(() => {
    // Create a new session when the component is mounted
    createNewSession();
  }, []);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = { sender: 'user', text: input };

      // Add user's message to the chat
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput('');

      try {
        // Make an API call to send the message to the backend
        const response = await axios.post(sessionEndpoints.CHAT_API, {
          sessionId: sessionId, // Send the session ID
          studentInput: input,  // Send the user input
        });

        const botMessage = {
          sender: 'bot',
          text: response.data.message, // Bot's response from the backend
        };

        // Update chat with bot's response
        setMessages((prevMessages) => [...prevMessages, botMessage]);

      } catch (error) {
        console.error("Error sending message:", error);
        const errorMessage = {
          sender: 'bot',
          text: 'Sorry, something went wrong. Please try again later.',
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    }
  };

  useEffect(() => {
    // Scroll to the bottom when a new message is added
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-box">
        <h2 className="chat-header">ChatBot</h2>
        <div
          ref={chatBoxRef}
          className="chat-messages"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender}`}
            >
              <div className={`message-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="chat-input"
          />
          <button
            onClick={handleSendMessage}
            className="chat-button"
            disabled={!input.trim() || !sessionId}  // Disable if input is empty or sessionId is missing
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
