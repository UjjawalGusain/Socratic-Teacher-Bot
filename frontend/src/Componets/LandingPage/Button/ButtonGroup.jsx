import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function ButtonGroup() {
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate("/login");
  };

  const handleSignupButtonClick = () => {
    navigate("/signup");
  };

  const handleNavButtonClick = (text) => {
    setActiveButton(text);

    const section = text === "Home" ? "header" : text.toLowerCase();
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [activeButton, setActiveButton] = useState("Home"); // Initial active button

  return (
    <div className="gap-10 flex md:flex-row flex-col ">
      <div className="flex gap-6 md:flex-row flex-col ">
        <Button
          text={"Home"}
          isActive={activeButton === "Home"}
          onClick={() => handleNavButtonClick("Home")}
        />
        <Button
          text={"Features"}
          isActive={activeButton === "Features"}
          onClick={() => handleNavButtonClick("Features")}
        />
        <Button
          text={"More"}
          isActive={activeButton === "More"}
          onClick={() => handleNavButtonClick("More")}
        />
      </div>
      <div className="text-white flex gap-4 md:flex-row flex-col ">
        <Button
          text={"Sign In"}
          isActive={true}
          isRegister={true}
          onClick={handleLoginButtonClick}
        />
        <Button
          text={"Register"}
          isActive={activeButton === "Register"}
          isRegister={true}
          onClick={handleSignupButtonClick}
        />
      </div>
    </div>
  );
}

export default ButtonGroup;
