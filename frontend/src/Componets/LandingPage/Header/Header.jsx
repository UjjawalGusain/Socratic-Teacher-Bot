import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

function Header() {
    const navigate = useNavigate();

  const handleChatbotButtonClick = () => {
    navigate("/chatbot");
  };
    const sentences = [
    "Curiosity is the essence of learning.",
    "Asking the right questions leads to deeper understanding.",
    "True wisdom lies in recognizing one's own ignorance.",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex];

    if (index < currentSentence.length) {
      const intervalId = setInterval(() => {
        setDisplayedText((prev) => prev + currentSentence[index]);
        setIndex((prev) => prev + 1);
      }, 100);

      return () => clearInterval(intervalId); 
    } else {
      const timeoutId = setTimeout(() => {
        setDisplayedText(""); 
        setIndex(0);
        setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length); 
      }, 1000); 

      return () => clearTimeout(timeoutId); 
    }
  }, [index, currentSentenceIndex]);


  return (
    <div id="header" className="bg-[#030A13] flex flex-col justify-center items-center pt-10 md:pt-16 py-10 md:py-14 lg:pb-24 shadow-md w-full">
      <div className="text-6xl md:text-7xl lg:text-8xl text-center font-bold text-[#D9D9D9] m-3">Welcome Socratics !</div>
      <div className="text-3xl text-center md:text-4xl text-[#D9D9D9] mb-20 md:my-5 m-3 h-12">{displayedText} <span className="animate-blink text-[#D9D9D9] md:m-0 ml-1">|</span> {/* Blinking cursor */}</div>
      <div className="text-xl text-[#D9D9D9] my-10 m-3 text-opacity-80 font-light text-center">
        The best way to answer a question, is to question the answers.
      </div>
      <div className="mt-3 flex gap-3">
        <Button
          isActive={true}
          text={"Try our Chatbot"}
          isRegister={true}
          onClick={handleChatbotButtonClick}
        ></Button>
        <Button text={"Explore Algorithms"} isRegister={true}></Button>
      </div>
    </div>
  );
}

export default Header;
