import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function SideBar({ onNewChat }) { // Receive the onNewChat function as a prop
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleProfileClick = () => {
    navigate('/');
  };

  return (
    <div
      className={`flex-grow h-full bg-[#051024] rounded-xl py-5 px-2 flex flex-col justify-between transition-width duration-300 ${
        isOpen ? "w-64 items-end" : "w-16 items-center"
      } bg-[url('pattern2.png')] bg-opacity-5`}
    >
      {/* Button to toggle sidebar */}
      <button onClick={toggleSidebar}>
        <div className="border-2 border-[#F8F8FF] rounded-2xl p-1">
          <GiHamburgerMenu className="size-5 text-[#F8F8FF]" />
        </div>
      </button>

      {/* Sidebar content that will be visible when open */}
      {!isOpen && (
        <button
        onClick={handleProfileClick}>
          <div className="border-2 border-[#F8F8FF] rounded-2xl size-10 p-1">
            <img src="avatar.png" alt="avatar-img" />
          </div>
        </button>
      )}

      {isOpen && (
        <div className="flex flex-col items-center gap-20">
          <div className="flex text-[#F8F8FF] w-full">
            <ul className="text-xl flex flex-col gap-4 px-4 w-full">
              <li className="w-full flex justify-center items-end">
                <button 
                  className="w-full border bg-[#030A1C] border-[#282934] h-16 rounded-md text-right p-4 font-light text-opacity-80 text-[#F8F8FF] text-nowrap"
                  onClick={onNewChat} // Trigger new session creation
                >
                  New Chat
                </button>
              </li>

              <li className="w-full flex justify-center items-end">
                <button className="w-full border bg-[#030A1C] border-[#282934] h-16 rounded-md text-right p-4 font-light text-opacity-80 text-[#F8F8FF] text-nowrap">
                  Previous Sessions
                </button>
              </li>

              <li className="w-full flex justify-center items-end">
                <button className="w-full border bg-[#030A1C] border-[#282934] h-16 rounded-md text-right p-4 font-light text-opacity-80 text-[#F8F8FF] text-nowrap">
                  Coding Assistant
                </button>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <button className="w-full"
              onClick={handleProfileClick}
            >
              <div className="bg-[#F8F8FF] rounded-lg w-full flex justify-start items-center">
                <img src="avatar.png" alt="avatar-img" className="w-8 h-8 m-2"/>
                <div className="text-left">
                  <p className="text-[#030A1C] text-xs">Welcome back,</p>
                  <p className="text-[#030A1C] text-md font-semibold">Ujjawal</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default SideBar;
