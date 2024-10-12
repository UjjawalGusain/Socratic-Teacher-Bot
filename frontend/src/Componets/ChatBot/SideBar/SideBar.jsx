import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function SideBar() {
  // State to manage whether the sidebar is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar's state
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`h-full bg-[#051024] rounded-xl py-5 px-2 flex flex-col justify-between transition-width duration-300 ${isOpen ? "w-64 items-end" : "w-16 items-center"} bg-[url('pattern2.png')] bg-opacity-5`} // Make pattern very light
    >
      {/* Button to toggle sidebar */}
      <button onClick={toggleSidebar}>
        <div className="border-2 border-[#F8F8FF] rounded-2xl p-1">
          <GiHamburgerMenu className="size-5 text-[#F8F8FF]" />
        </div>
      </button>

      {/* Sidebar content that will be visible when open */}
      {isOpen && (
        <div className="flex text-[#F8F8FF] w-full">
          <ul className="text-xl flex flex-col gap-4 px-4 w-full">
            <li className="w-full flex justify-center items-end">
              <button className="w-full border bg-[#030A1C] border-[#282934] h-16 rounded-md text-right p-4 font-light text-opacity-80 text-[#F8F8FF]">
                New Chat
              </button>
            </li>

            <li className="w-full flex justify-center items-end">
              <button className="w-full border bg-[#030A1C] border-[#282934] h-16 rounded-md text-right p-4 font-light text-opacity-80 text-[#F8F8FF]">
                Recent Chat
              </button>
            </li>

            <li className="w-full flex justify-center items-end">
              <button className="w-full border bg-[#030A1C] border-[#282934] h-16 rounded-md text-right p-4 font-light text-opacity-80 text-[#F8F8FF]">
                Coding Assistant
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Avatar button (stays visible regardless of sidebar state) */}
      <button>
        <div className="border-2 border-[#F8F8FF] rounded-2xl size-10 p-1">
          <img src="avatar.png" alt="avatar-img" />
        </div>
      </button>
    </div>
  );
}

export default SideBar;
