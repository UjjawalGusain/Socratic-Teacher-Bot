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
    <div id="footer" className="bg-[#030A1C] h-96 px-8 py-10 flex justify-between">
      <div className="text-white flex flex-col gap-3 items-start">
        <div className="flex items-center space-x-3 mb-4">
          <img
            src="2ff100a6-7dba-11ef-b8f0-0242ac11000e-removebg-preview.png"
            alt="socratic-icon"
            className="w-10 h-10 object-contain"
          />
          <p className="text-2xl">Mr. Socrates</p>
        </div>
        <div className="ml-3 flex gap-5 justify-evenly">
          <FaFacebook className="size-7 cursor-pointer"/>
          <IoLogoInstagram className="size-7 cursor-pointer" />
          <FaGoogle className="size-7 cursor-pointer" />
          <MdEmail className="size-7 cursor-pointer" />
        </div>
      </div>

      <div className="flex flex-grow justify-evenly">
      <FooterCard section={footerData.learning}/>
      <FooterCard section={footerData.community}/>
      <FooterCard section={footerData.support}/>
      </div>
    </div>
  );
}

export default Footer;
