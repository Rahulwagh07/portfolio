import React from 'react'
import { ContactUsForm } from './ContactUsForm'
 function Contact()   {
  return (
    <div className='flex mx-auto h-auto mt-32'> 
      <div className='flex flex-col'>
      <h2 id="#contact" className='text-4xl font-bold flex mx-auto mb-1 tracking-wide title-color'>Contact Me</h2>
      <p className='font-normal items-center text-color justify-center flex mx-auto'>Feel free to contact me!</p>
      <ContactUsForm className="sm:mx-auto"/>
      </div>
    </div>
  )
}
export default Contact
