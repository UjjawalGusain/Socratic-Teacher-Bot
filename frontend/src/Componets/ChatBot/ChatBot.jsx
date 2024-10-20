import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import SideBar from './SideBar/SideBar';
import InputBox from './InputBox/InputBox';
import Message from './Message/Message';
import { sessionEndpoints } from '../../../api/api'; // Import your API endpoints

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sessionId, setSessionId] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef(null);

  // Function to create a new session
  const createNewSession = async () => {
    try {
      const response = await axios.post(sessionEndpoints.CREATE_SESSION_API);
      setSessionId(response.data.sessionId); // Store the session ID in the state
      setMessages([]); // Reset messages for the new session
    } catch (error) {
      console.error("Error creating session:", error);
    }
  };

  useEffect(() => {
    createNewSession();
  }, []);

  const typeBotMessage = (message) => {
    let currentIndex = 0;
    const botMessage = { text: '', isUser: false };

    setIsTyping(true); 

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
        setIsTyping(false); 
        clearInterval(typeInterval);
      }
    }, 50); 
  };

  const handleSendMessage = async (message) => {
    if (message.trim() && sessionId) {
      const userMessage = { text: message, isUser: true };

      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput('');

      try {
        const response = await axios.post(sessionEndpoints.CHAT_API, {
          sessionId: sessionId,
          studentInput: message,
        });

        setMessages((prevMessages) => [...prevMessages, { text: '', isUser: false }]);

        typeBotMessage(response.data.message);

      } catch (error) {
        console.error("Error sending message:", error);
        const errorMessage = {
          text: 'Sorry, something went wrong. Please try again later.',
          isUser: false,
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    }
  };

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className='flex h-screen p-8 pb-12 w-screen bg-[#F8F8FF]'>
      {/* Pass the createNewSession function to SideBar */}
      <SideBar onNewChat={createNewSession} />
      <div className="w-full flex flex-col ml-4">
        <div className="flex-1 overflow-auto">
          <div className="flex flex-col">
            {messages.map((msg, index) => (
              <Message key={index} text={msg.text} isUser={msg.isUser} />
            ))}
            <div ref={endOfMessagesRef} />
          </div>
        </div>
        <InputBox onSubmit={handleSendMessage} />
        {isTyping && <div className="typing-indicator">Mr. Socrates is typing...</div>}
      </div>
    </div>
  );
}

export default ChatBot;
