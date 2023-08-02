import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Button = ({ children, active, linkto }) => {
  return (
    <ScrollLink 
    to={linkto}
    smooth={true}
    duration={1000}
    offset={-70}
    spy={true}
    exact="true"
    activeClass="active">
      <div
        className="text-center flex justify-center items-center gap-x-3  text-[16px] sm:text-[16px] px-10 py-5 rounded-md font-bold 
        bg-[#60a5fa] text-black
        hover:cursor-pointer hover:scale-95 transition-all duration-200"
      >
        {children}
      </div>
    </ScrollLink>
  );
};

export default Button;
