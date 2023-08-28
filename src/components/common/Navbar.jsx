import React from 'react'
import { NavbarLinks } from '../../data/navbar-links'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Theme from './Theme';
  
function Navbar() {
  return (
    <div className={`flex h-14 items-center justify-center  border-b border-sky-500 dark:border-b dark:border-b-richblack-25 transition-all duration-200`}> 
      <div className="flex lg:w-7/12 sm:w-full sm:mx-auto max-w-maxContent items-center justify-between">
         <div className='hidden lg:block'>
         <ScrollLink to="#home" className=' hover:text-blue-900 dark:hover:text-yellow-25  cursor-pointer
               transition-all duration-200 relative lg:block'>
            <p className='text-color font-medium '>Rahul</p>
              
        </ScrollLink>
         </div>
     {/* { Navigation links} */}
     <nav className='md:block sm:mx-auto '>
        <ul className='flex   lg:gap-x-8 title-color md:mx-auto sm:mx-auto md:gap-x-8 sm:gap-x-4'>
            {NavbarLinks.map((link, index) => (
                <li key={index} className='hover:text-richblack-900  dark:hover:text-yellow-25 cursor-pointer
               transition-all duration-200 relative group  lg:block'>
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
                  <div class="absolute bottom-0 w-full h-0.5 bg-[#60a5fa]  hidden group-hover:block
              transition-all duration-200" ></div>
                </li>
                
            ))}
          <Theme/>
        </ul>
     </nav>

      </div>
      </div>
  )
}
export default Navbar
