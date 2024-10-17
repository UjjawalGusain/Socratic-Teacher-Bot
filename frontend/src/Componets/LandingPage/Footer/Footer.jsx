import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FooterCard from "./FooterCard/FooterCard";

const footerData = {
    learning: {
        title: 'Learning',
        links: [
            'Socratic Method',
            'Critical Thinking',
            'Data Structures',
            'Algorithms',
            'Problem-Solving Strategies',
            'Interactive Learning',
            'Gamified Challenges'
        ]
    },
    community: {
        title: 'Community',
        links: [
            'Discussion Forums',
            'Student Testimonials',
            'Collaboration Opportunities',
            'Workshops and Webinars',
            'Mentorship Programs',
            'Socratic Discussions',
            'Join Us on Discord'
        ]
    },
    support: {
        title: 'Support',
        links: [
            'Help Center',
            'FAQs',
            'Contact Us',
            'Feedback and Suggestions',
            'Resources for Educators',
            'Tutorials and Guides',
            'Privacy Policy'
        ]
    }
};

  

function Footer() {
  return (
    <div id="footer" className="bg-[#030A1C] h-fit px-8 py-10 flex flex-col gap-10 lg:flex-row justify-between">
      <div className="text-white flex flex-col gap-3 items-center lg:items-start">
        <div className="flex items-center space-x-3 mb-4">
          <img
            src="socrate-img.png"
            alt="socratic-icon"
            className="w-20 h-20 lg:w-10 lg:h-10 object-contain"
          />
          <p className="text-4xl lg:text-2xl">Mr. Socrates</p>
        </div>
        <div className="ml-3 flex gap-5 justify-evenly">
          <FaFacebook className="size-7 cursor-pointer"/>
          <IoLogoInstagram className="size-7 cursor-pointer" />
          <FaGoogle className="size-7 cursor-pointer" />
          <MdEmail className="size-7 cursor-pointer" />
        </div>
      </div>

      <div className="flex flex-grow flex-wrap gap-10 justify-evenly">
      <FooterCard section={footerData.learning}/>
      <FooterCard section={footerData.community}/>
      <FooterCard section={footerData.support}/>
      </div>
    </div>
  );
}

export default Footer;
