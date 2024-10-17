import React from "react";
import { useNavigate } from "react-router-dom";

function ChatbotAccess() {
  const navigate = useNavigate();

  const handleChatbotButtonClick = () => {
    navigate("/chatbot");
  };

  return (
    <div
      id="chatbot-access"
      className="bg-[#030A13] flex flex-col justify-center items-center py-10 shadow-md"
    >
      <div className="w-full max-w-4xl h-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
        {/* Socratic Assistant Button */}
        <button
          className="relative w-full md:w-96 h-64 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(100,100,100,1)] active:scale-100 active:shadow-md"
          onClick={handleChatbotButtonClick}
        >
          <div className="absolute inset-0 bg-white opacity-5 rounded-lg pointer-events-none"></div>
          {/* Background with opacity */}
          <img
            className="absolute inset-4 left-1/2 transform -translate-x-1/2 w-44 h-44 z-10"
            src="robot-assistant.png"
            alt="chatbot-img"
          />
          <p className="text-xl md:text-2xl text-[#D9D9D9] text-center mt-4 absolute inset-x-0 bottom-2 z-10">
            Socratic Assistant
          </p>
        </button>

        {/* Coding Assistant Button */}
        <button className="relative w-full md:w-96 h-64 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(100,100,100,1)] active:scale-100 active:shadow-md">
          <div className="absolute inset-0 bg-white opacity-5 rounded-lg pointer-events-none"></div>
          {/* Background with opacity */}
          <img
            className="absolute inset-4 left-1/2 transform -translate-x-1/2 w-44 h-44 z-10"
            src="bot.png"
            alt="bot-img"
          />
          <p className="text-xl md:text-2xl text-[#D9D9D9] text-center mt-4 absolute inset-x-0 bottom-2 z-10">
            Coding Assistant
          </p>
        </button>
      </div>
    </div>
  );
}

export default ChatbotAccess;
