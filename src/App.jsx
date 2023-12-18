import "./App.css";
import Navbar from "./components/common/Navbar";
import { About } from "./components/core/About";
import   {Skill} from "./components/core/Skill";
import {HeroSection} from "./components/core/HeroSection";
import Footer from "./components/common/Footer";
import ProjectSlider from "./components/core/ProjectSlider";
import Contact from "./components/core/Contact";
 
  
function App() {
  return (
     <div className="section_bg">
        <Navbar/>
        <div className="flex flex-col lg:mx-auto w-screen  text-color ">
        <HeroSection/>
        <About/>
        <Skill/>
        <ProjectSlider/>
        <Contact/>
        <Footer/>
      </div>
     </div>
  );
}

export default App;
