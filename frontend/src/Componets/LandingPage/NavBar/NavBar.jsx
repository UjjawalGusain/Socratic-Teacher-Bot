import React, { useState, useEffect } from "react";
import ButtonGroup from "../Button/ButtonGroup";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

function NavBar() {
  const [showNav, setShowNav] = useState(false); // Initially hidden for smaller screens
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 786); // Check if the screen is large

  const handleShow = () => setShowNav(!showNav); // Toggle navbar visibility

  // Effect to update the isLargeScreen state based on window size
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 786);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="md:static relative left-2 top-2 md:opacity-100 opacity-95">
      {/* Back/Forward arrow button - only shows when screen size is smaller than large */}
      <div className="absolute top-4 left-3 md:hidden z-20">
        {showNav ? (
          <IoArrowBackCircleOutline
            className="text-white text-3xl cursor-pointer transition-transform duration-500 ease-in-out" // Smooth transition for icon
            onClick={handleShow}
            style={{ opacity: showNav ? 1 : 0, transition: "opacity 0.5s ease-in-out" }} // Icon fade-in effect
          />
        ) : (
          <IoArrowForwardCircleOutline
            className="text-white text-3xl cursor-pointer transition-transform duration-500 ease-in-out" // Smooth transition for icon
            onClick={handleShow}
            style={{ opacity: !showNav ? 1 : 0, transition: "opacity 0.5s ease-in-out" }} // Icon fade-in effect
          />
        )}
      </div>

      {/* Navbar */}
      <div
        id="navbar"
        className={`bg-[#051024] flex-grow flex md:flex-row flex-col md:h-12 h-auto md:px-10 px-5 items-center jus md:justify-between shadow-md border border-[#D9D9D9] border-opacity-25 md:w-full md:static py-10 md:flex rounded-md md:rounded-none transition-transform duration-500 ease-in-out ${
          showNav || isLargeScreen
            ? "absolute top-0 left-0  transform translate-x-0" // Smooth opening
            : "absolute top-0 -left-full transform -translate-x-full" // Smooth closing
        }`}
      >
        <div className="flex md:flex-row flex-col items-center gap-2 md:my-0 my-5">
          <div
            className="w-fit h-fit rounded-full p-1"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <img src="socrate-img.png" alt="socratic-icon" className="size-8" />
          </div>
          <p className="text-md text-[#D9D9D9] space-x-5">Mr. Socrates</p>
        </div>

        <ButtonGroup />
      </div>
    </div>
  );
}

export default NavBar;
