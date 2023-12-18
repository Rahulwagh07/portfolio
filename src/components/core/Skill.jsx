import React, { useState } from "react";
import { MdOutlineExpandLess} from "react-icons/md";
import { BiCodeCurly } from "react-icons/bi";
import { SkillDropdown } from "./SkillDropdown";
 import {FaJava} from "react-icons/fa"
 import {TbBrandJavascript} from "react-icons/tb"
 import {FaHtml5, FaCss3, FaCode , FaReact} from "react-icons/fa"
 import {SiTailwindcss, SiExpress, SiJavascript} from "react-icons/si"
 import {DiMongodb} from "react-icons/di"
 import {PiCodeSimple} from "react-icons/pi"
export const Skill = () => {
 
const Languages = [
  { name: "Java", logo: <FaJava size={32} /> },
  { name: "Javascript", logo: <TbBrandJavascript size={32} /> },
  { name: "HTML", logo: <FaHtml5 size={32} /> },
  { name: "CSS", logo: <FaCss3 size={32} /> },
  { name: "C++", logo: <FaCode  size={32} /> },
];

const Frameworks = [
  { name: "React", logo: <FaReact size={32} /> },
  { name: "Node.js", logo: <SiJavascript size={32} /> },
  { name: "Tailwind CSS", logo: <SiTailwindcss size={32} /> },
  { name: "Express.js", logo: <SiExpress size={32} /> },
  { name: "MongoDB", logo: <DiMongodb size={32} /> },
];
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown2 = () => {
    setIsOpen2((prevState) => !prevState);
  };

  return (
    <div className="w-7/12 flex mx-auto md:w-10/12 h-auto sm:w-full mt-32 mb-10">
      <div className="flex flex-col">
        <h2  id="#skills" className='text-4xl font-bold title-color flex mx-auto mb-1 tracking-wide'>Skills</h2>
        <p className="font-normal items-center text-color justify-center flex mx-auto">My Skills</p>

        <div className="flex lg:flex-row sm:flex-col gap-12  mt-16">
          {/* left */}
          <div className="lg:w-[50%] hover:cursor-pointer" onClick={toggleDropdown}>
            <p className="flex justify-start font-medium text-xl text-color ml-8 mb-4 leading-8 items-baseline">Languages</p>
            <div className="flex items-center gap-2">
              <PiCodeSimple size={32} className="font-extrabold text-color-light " />
              <p className="">Languages that I have acquired over time</p>
              {isOpen ? (
                      <MdOutlineExpandLess
                        size={32}  className=" text-blue-50 transform transition-transform duration-500 ease-in-out"
                      />
                    ) : (
                      <MdOutlineExpandLess size={32} className="  text-blue-50 rotate-180 transform transition-transform duration-500 ease-in-out"
              />
              )}             </div>
                {isOpen && (
                <div className=" mt-8 right-0 w-full mb-5">
                    <ul>
                    {Languages.map(({ name, logo }, index) => (
                        <SkillDropdown key={index} name={name} logo={logo} />
                    ))}
                    </ul>
                </div>
                )}
          </div>

          {/* right */}
          <div className="lg:w-[50%] hover:cursor-pointer" onClick={toggleDropdown2}>
            <p className="flex justify-start font-medium text-xl ml-8 mb-4 leading-8 items-baseline">Libraries and Frameworks</p>
            <div className="flex items-center gap-1">
              <BiCodeCurly  size={32} className=" mr-1 text-color-light" />
              <p className="">Libraries and Frameworks that I have work on</p>
              {isOpen2 ? (
                      <MdOutlineExpandLess
                        size={32}  className=" text-blue-50 transform transition-transform duration-500 ease-in-out"
                      />
                    ) : (
                      <MdOutlineExpandLess size={32} className=" text-blue-50  rotate-180 transform transition-transform duration-500 ease-in-out"
              />
              )}           
                    </div>
                {isOpen2 && (
                <div className="mt-8 left-0 w-full mb-5 transition-all duration-500 ease-in-out">
                <ul>
                    {Frameworks.map(({ name, logo }, index) => (
                    <SkillDropdown key={index} name={name} logo={logo}  />
                    ))}
                </ul>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};