import React from "react";

function FooterCard({ section }) {
  return (
    <div className="text-[#D9D9D9]">
      <p className="font-bold text-lg mb-5 pt-2 text-white">{section.title}</p>
      <ul>
        {section.links.map((link, idx) => (
          <li 
            key={idx} 
            className="mb-2 cursor-pointer text-opacity-15 hover:text-opacity-100 transition duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterCard;
