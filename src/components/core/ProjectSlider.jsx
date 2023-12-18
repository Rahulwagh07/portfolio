import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectData } from "../../data/project";
import { AiOutlineArrowRight } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
 

import { Navigation} from "swiper/modules";

function ProjectSlider() {
  return (
    <div className='lg:w-7/12 flex sm:w-11/12 flex-col mx-auto mt-32 md:w-11/12'>
       
       <h2 id="#project" className='text-4xl font-bold  title-color flex mx-auto mb-1 tracking-wide mb-8'>Projects</h2>
      <div className="w-full  ">
      <Swiper
  navigation={true}
  loop={true}
  freeMode={true}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  modules={[Navigation]}
  className=""
>
  {projectData.map((project, index) => (
    <SwiperSlide key={index} className="flex lg:gap-16  sm:flex-col-reverse md:gap-8 items-center sm:gap-6">
      <div className=" lg:w-80 lg:h-96 sm:mx-auto md:w-1/2 rounded-sm ml-20">
        <div className="lg:h-96  rounded-xl flex items-center justify-center">
        <video
          className="rounded-md"
          muted
          loop
          autoPlay
          loading="lazy"
        >
          <source src={project.video} type="video/mp4"/>
        </video>
        </div>
      </div>
      <div className="w-[50%] sm:mx-auto sm:w-full  lg:mr-20 sm:mb-4  "> {/* Use space-y-4 to set the vertical gap */}
         <div className="flex flex-col w-full items-start">
         <h2 className="text-xl  font-bold title-color mb-2">{project.title}</h2>
        <div className="text-color  font-semibold">{project.info}</div>
        <a href={project.link} target="_blank" className="sm:mx-auto" rel="noopener noreferrer">
          <button className="rounded-md bg-[#60a5fa]   mt-8 px-6 py-5 md:mt-2  flex items-center gap-4 text-center font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] transition-all duration-200 hover:scale-95 hover:shadow-none disabled:bg-richblack-500 sm:text-[16px]">
            Check out <AiOutlineArrowRight className="ml-1" />
          </button>
        </a> 
         </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
      </div>
 
      
    </div>
       
  );
}

export default ProjectSlider;
