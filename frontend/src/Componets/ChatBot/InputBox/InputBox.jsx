import React, { useState } from 'react';
import { VscSend } from "react-icons/vsc";
import { MdOutlineEmojiEmotions } from "react-icons/md";

function InputBox({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(inputValue);
    }
    setInputValue(''); 
  };

  return (
    <form onSubmit={handleSubmit} className="w-full h-fit flex items-center border-black border-2 m-4 rounded-lg focus:ring focus:ring-blue-500 focus:shadow-md">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type a new message"
        className="flex flex-shrink w-full px-4 py-2 my-2 focus:ring-0 focus:ring-offset-0 focus: outline-none bg-[#F8F8FF]"
      />
      <button
        type="submit"
        className="mr-3 flex gap-4 justify-center"
      >
        {/* <MdOutlineEmojiEmotions className='size-6'/> */}
        <VscSend className='size-6'/>
      </button>
    </form>
  );
}

export default InputBox;
