import React from 'react'

function Button({ isActive, theme = 'light', text, isRegister = false, onClick }) {
  const activeClass = isActive 
    ? 'bg-[#E3E3E3] text-black' 
    : 'text-white text-opacity-55 shadow-md'; 
    
  const themeClass = theme === 'light' 
    ? 'hover:bg-gray-200 hover:text-black' 
    : 'hover:bg-[#334B7B] focus:ring focus:ring-blue-500';  
  const registerClass = isRegister 
    ? 'bg-[#11244A] border-black' 
    : '';  

  return (
    <button 
      className={`px-3 py-1 rounded-md transition-all duration-300  ease-in-out ${activeClass} ${themeClass} ${registerClass}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
