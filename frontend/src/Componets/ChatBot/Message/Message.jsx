import React from 'react';

function Message({ text, isUser }) {
  return (
    <div className={`w-full flex items-end ${isUser ? 'justify-end' : 'justify-start '} my-2`}>
      {/* User avatar */}
      {!isUser && (
        <img src="socrate-img.png" alt="Chatbot icon" className="h-8 w-8 mr-2 rounded-full" />
      )}
      <div
        className={`max-w-xs border-[#030A1C] rounded-md bg-white px-5 py-1 shadow-md ${isUser ? 'text-black border-r-4' : 'text-black border-l-4'}`}
      >
        {text}
      </div>
      {/* Chatbot avatar */}
      {isUser && (
        <img src="avatar.png" alt="User avatar" className="h-8 w-8 ml-2 rounded-full" />
      )}
    </div>
  );
}

export default Message;
