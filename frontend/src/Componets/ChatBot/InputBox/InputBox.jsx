import React, { useState } from 'react';

function InputBox({ placeholder, onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(inputValue);
    }
    setInputValue(''); // Clear the input after submission
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex items-center">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 m-5"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition duration-200"
      >
        Send
      </button>
    </form>
  );
}

export default InputBox;
