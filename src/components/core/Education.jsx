import React from 'react'
import {MdOutlineCastForEducation} from "react-icons/md"
export const Education = () => {
  return (
    <div className='w-3/12 flex mx-auto text-white mt-20'>
         <div className='flex flex-col'>
          
            <h2 className='text-4xl font-bold flex mx-auto mb-1 tracking-wide'>Education</h2>
            <div className='items-center justify-center flex mt-10'>
            <MdOutlineCastForEducation/>
            <p className='font-normal items-center justify-center flex mx-auto'>
              My Education</p>
            </div>
            
         </div>
    </div>
  )
}
 
