 import React, { useState } from 'react';
import { NavbarLinks } from '../../data/navbar-links';
import { Link as ScrollLink } from 'react-scroll';
import { IoReorderThree } from 'react-icons/io5';
import Theme from './Theme';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={`flex h-16 mt-4  sm:justify-end items-center justify-center section_bg box-shadow transition-all duration-200`}>
      <div className="flex lg:mx-auto">
    
        {/* Three-dot icon for small screens */}
        <div className="lg:hidden md:hidden cursor-pointer mr-4" onClick={toggleDropdown}>
          <IoReorderThree size={32} color="#333"
          />
        </div>

        {/* Dropdown for navigation links on small screens */}
        {showDropdown && (
          <div className="lg:hidden md:hidden absolute top-20 rounded-md right-2 section_bg w-6/12 py-2 box-shadow z-10">
            <ul className='flex flex-col items-center gap-1'>
              {NavbarLinks.map((link, index) => (
                <li key={index} className='   text-[#60a5fa] cursor-pointer transition-all duration-200 relative group'>
                  <ScrollLink
                    to={link.path}
                    smooth={true}
                    duration={1000}
                    offset={-70}
                    spy={true}
                    exact="true"
                    activeClass="active"
                    classID='mb-2'
                    onClick={() => setShowDropdown(false)}
                  >
                    {link.title}
                  </ScrollLink>
                  {link.title !== 'Home' && (
                    <div class="absolute bottom-0 w-full h-0.5 bg-[#60a5fa] hidden group-hover:block transition-all duration-200"></div>
                  )}
                </li>
              ))}
              <Theme />
            </ul>
          </div>
        )}

        {/* Navigation links for large screens */}
        <nav className='lg:flex sm:hidden'>
          <ul className='flex gap-20 font-normal title-color md:mx-auto  md:gap-x-8'>
            {NavbarLinks.map((link, index) => (
              <li key={index} className='hover:text-shadow hover:text-[#60a5fa] cursor-pointer transition-all duration-200 relative group lg:block'>
                <ScrollLink
                  to={link.path}
                  smooth={true}
                  duration={1000}
                  offset={-70}
                  spy={true}
                  exact="true"
                  activeClass="active"
                  classID='mb-2'
                >
                  {link.title}
                </ScrollLink>
                  {link.title !== 'Home' && (
                      <div class="absolute bottom-0 w-1/2 h-0.5 bg-[#60a5fa] hidden group-hover:block transition-all duration-200"></div>
                  )}
              </li>
            ))}
            <Theme />
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
