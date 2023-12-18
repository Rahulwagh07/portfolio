import React from 'react';
import { FaGithub, FaLinkedin,  FaEnvelope } from 'react-icons/fa';
import { Link as ScrollLink } from "react-scroll";
import { FooterLinks } from '../../data/Footer-links';
import twitternewlogo from "../../assets/Images/Twitter-new-logo.jpeg"
  
function Footer() {
  return (
    <div className='w-full bg-[#0369a1] footer_bgDark mt-32 '>
       <div className='lg:mt-24'>
       <footer className="flex  mx-auto sm:flex-col sm:gap-2 w-7/12 justify-between mt-16 mb-12">
        {/* Left Section */} 
        <div className='flex flex-col mt-6 gap-y-2'>
          <p className='font-normal text-4xl tracking-wide text-color-light'>Rahul</p>
          <p className='font-normal tracking-wide text-4xl text-color-light'>Wagh</p>
          <p className="text-color font-normal">Full Stack Developer</p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col justify-between">
        <ul className='flex gap-x-8 sm:flex-col   text-richblack-25 font-semibold'>
            {FooterLinks.map((link, index) => (
                <li key={index}>
                <ScrollLink
                    to={link.path}
                    smooth={true}
                    duration={1000}
                    offset={-70}
                    spy={true}
                    exact="true"
                    activeClass="active"
                    className='hover:text-richblue-25 text-hoverdark cursor-pointer'
                  >
                    {link.title}
                  </ScrollLink>
                </li>
            ))}
        </ul>
          <div className="text-center mt-4 text-sm sm:hidden text-color-light">
            <span >&copy;  Rahul Wagh. All rights reserved.</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <a href="https://github.com/Rahulwagh07" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FaGithub size={32} className="text-color hover:text-gray-300 " />
          </a>
          <a href="https://linkedin.com/in/rahulwagh07" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FaLinkedin size={32} className="text-color hover:text-gray-300" />
          </a>
          <a href="https://twitter.com/RahulWagh_07" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src={twitternewlogo} alt='twitterNewLogo' className="text-color rounded-full h-9 w-9  hover:text-gray-300 " />
          </a>
          <a href="mailto:rahulwagh3774@gmail.com" className="mx-2">
            <FaEnvelope size={32} className="text-color hover:text-gray-300" />
          </a>
        </div>
      </footer>
       </div>
    </div>
  );
};

export default Footer;
