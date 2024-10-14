import React from "react";
import ButtonGroup from "../Button/ButtonGroup";


function NavBar() {
  return (
    <div id="navbar" className="bg-[#051024] flex h-20 px-10 items-center justify-between shadow-md border border-[#D9D9D9] border-opacity-25">

      <div className="flex items-center gap-2">
      <div
        className="w-fit h-fit rounded-full p-1"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      >
        <img
          src="socrate-img.png"
          alt="socratic-icon"
          className="size-8"
        />
      </div>
      <p className="text-lg text-[#D9D9D9] space-x-5">Mr. Socrates</p>
      </div>

      <ButtonGroup></ButtonGroup>
    </div>
  );
}

export default NavBar;
