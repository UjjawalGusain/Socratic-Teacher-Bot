import React from "react";
import { useNavigate } from "react-router-dom";

function ChatbotAccess() {
  const navigate = useNavigate();

  const handleChatbotButtonClick = () => {
    navigate("/chatbot");
  };
  return (
    <div id="chatbot-access" className="bg-[#030A13] flex flex-col justify-center items-center pb-20 shadow-md">
      <div className="w-1/2 h-1/2 flex items-center justify-between gap-5">
        {/* Socratic Assistant Button */}
        <button
          className="relative h-64 w-96 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(100,100,100,1)] active:scale-100 active:shadow-md"
          onClick={handleChatbotButtonClick}
        >
          <div className="absolute inset-0 bg-white opacity-5 rounded-lg pointer-events-none"></div>{" "}
          {/* Background with opacity */}
          <img
            className="absolute inset-4 left-24 size-48 z-10"
            src="robot-assistant.png"
            alt="chatbot-img"
          />
          <p className="text-2xl text-[#D9D9D9] text-center mt-4 absolute inset-x-0 bottom-2 z-10">
            Socratic Assistant
          </p>
        </button>

        {/* Coding Assistant Button */}
        <button className="relative h-64 w-96 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(100,100,100,1)] active:scale-100 active:shadow-md">
          <div className="absolute inset-0 bg-white opacity-5 rounded-lg pointer-events-none"></div>{" "}
          {/* Background with opacity */}
          <img
            className="absolute inset-4 left-24 size-48 z-10"
            src="bot.png"
            alt="bot-img"
          />
          <p className="text-2xl text-[#D9D9D9] text-center mt-4 absolute inset-x-0 bottom-2 z-10">
            Coding Assistant
          </p>
        </button>
      </div>
    </div>
  );
}

export default ChatbotAccess;
