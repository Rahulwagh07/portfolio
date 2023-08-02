import React from 'react'
import TypingAnimation from './TypingAnimation'
import CTAButton from './Button'
import Instructor from "../../assets/Images/Instructor.png"
import {AiOutlineSend} from "react-icons/ai"
export const HeroSection = () => {
  return (
    <div className='lg:w-7/12 flex sm:w-11/12 sm:flex-col mx-auto md:w-10/12 sm:mt-12 gap-8 lg:mt-28 md:mt-16'>
  <div className='flex flex-col sm:w-full lg:w-3/5 gap-4 lg:h-96'>
    <p className='text-4xl font-bold flex mb-1 tracking-wide title-color'>Hi, I'm Rahul</p>
    <div className='flex text-3xl bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold font-[800]'>
      <p className='mr-3'>I am</p>
      <span className='lg:w-3/4'>
        <TypingAnimation />
      </span>
    </div>
    <p className='text-md text-color'>Building software to solve real-life problems</p>
    <div className='lg:w-1/2 mt-8 sm:mx-auto'>
      <CTAButton active={true} linkto={"#contact"} className="flex gap-x-3">
        Contact Me <AiOutlineSend />
      </CTAButton>
    </div>
  </div>
  {/* Right part */}
  <div className='lg:w-2/5 sm:w-10/12 sm:mx-auto'>
    <img
      src={Instructor}
      alt=""
      className="w-72 mx-auto rounded-full"
      loading="lazy"
    />
  </div>
</div>

  )
}
