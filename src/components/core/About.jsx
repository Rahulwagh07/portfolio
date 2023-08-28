import React from 'react'
import profileImg from "../../assets/Images/profileImg.png"
export const About = () => {
  return (
    <div className='lg:w-7/12 flex sm:w-11/12 mx-auto md:w-10/12 sm:h-full mt-16'>
         <div className='flex flex-col sm:w-full'>
          
            <h2  id='#about' className='text-4xl title-color font-bold flex mx-auto mb-1 tracking-wide'>About Me</h2>
            <p className='font-normal items-center text-color justify-center flex mx-auto'>My introduction</p>
         
        <div className='flex gap-12 sm:flex-col sm:w-full sm:items-center mt-16'>
            {/* left */}
            <div className='lg:w-[50%]  md:w-1/2'>
            <img
              src={profileImg}
              alt=""
              className="shadow-white shadow-[-20px_-20px_0_0] w-full"
              loading="lazy"
            />
            </div>
            {/* right */}
            <div className='lg:w-[50%] sm:w-full   md:w-1/2'>
            <p className='text-color '>Hey there! 👋 I'm Rahul, a 20-year-old CSE undergrad. Currently i 
             am working on the technologies that is based on javascript such as react, node.js etc. I see myself as a digital craftsman, creating meaningful and innovative experiences for users. I  staying up-to-date with the latest technologies. Let's collaborate and bring your web projects to life! 🚀</p>

            </div>
        </div>
         </div>
    </div>
  )
}
 
