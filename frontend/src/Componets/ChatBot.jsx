import React, { useState, useEffect, useRef } from 'react';
import '../CSS_Files/Chatbot.css'; 
import axios from 'axios';
import { sessionEndpoints } from '../../api/api';  // Import your API endpoints

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sessionId, setSessionId] = useState(null);  // State to store session ID
  const [isTyping, setIsTyping] = useState(false);   // Track if bot is typing
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
    createNewSession();
  }, []);

  // Typing effect for bot's response
  const typeBotMessage = (message) => {
    let currentIndex = 0;
    const botMessage = { sender: 'bot', text: '' };

    setIsTyping(true);  // Start typing

    const typeInterval = setInterval(() => {
      if (currentIndex < message.length) {
        botMessage.text += message[currentIndex];
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          updatedMessages[updatedMessages.length - 1] = botMessage;
          return updatedMessages;
        });
        currentIndex++;
      } else {
        setIsTyping(false);  // Stop typing once message is fully typed
        clearInterval(typeInterval);
      }
    }, 50);  // Adjust this interval for typing speed
  };

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = { sender: 'user', text: input };

      // Add user's message to the chat
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput('');

      try {
        const response = await axios.post(sessionEndpoints.CHAT_API, {
          sessionId: sessionId,
          studentInput: input,
        });
        

        // Add a placeholder message for the bot while typing
        setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: '' }]);

        // Start typing the bot's message
        typeBotMessage(response.data.message);

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

  // Function to handle keypress (Enter key)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();  // Trigger send message when "Enter" is pressed
    }
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-container">
      
      <div className="chat-box">
      <img src="2ff100a6-7dba-11ef-b8f0-0242ac11000e-removebg-preview.png" alt="Chatbot Image" className="chat-image" />
        <h2 className="chat-header">Mr. Socrates.</h2>
        <div ref={chatBoxRef} className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              <div className={`message-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        {isTyping && <div className="typing-indicator">Mr Socrates is typing...</div>}
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}  // Add the keypress event listener
            placeholder="Type a message..."
            className="chat-input"
          />
          <button
            onClick={handleSendMessage}
            className="chat-button"
            disabled={!input.trim() || !sessionId || isTyping}  // Disable when bot is typing
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
