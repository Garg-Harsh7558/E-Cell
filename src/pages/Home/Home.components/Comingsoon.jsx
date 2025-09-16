import React from "react";
import background from "../../../icon/gallerybg.png";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/FooterSection";
function Comingsoon() {
  return (
    <div className="relative">
    
      <div className="absolute z-1 w-full">
    <Navbar/></div>
    <div className="flex items-center justify-center bg-cover bg-center w-[100vw] h-[100vh] font-bold"
    style={{ backgroundImage: `url(${background})` }}>
      <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-orange-600 font-blinker">COMING <span className='text-white'>SOON !!!</span></div>
    </div>
    <Footer/>
    </div>
  );
}

export default Comingsoon;
