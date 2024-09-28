import React, { useState, useEffect, useRef } from 'react';
import '../CSS_Files/Chatbot.css'; 

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatBoxRef = useRef(null);

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: 'This is a bot response.' },
        ]);
      }, 1000);
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
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
