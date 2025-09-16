import React from 'react';
import HeaderGif from "../../../icon/HEADERGIF.gif";
import Hero_Section_Small from '../../../lotties/Hero_Section_Small.json';
import { useInView } from 'react-intersection-observer';

function HeroSection({targetRef}) {

  // const AnimatedGif = ({src , alt}) =>{
  //   return <img src={src} alt={alt} />;
  // }

  const AnimatedGif = ({ src, alt }) => {
    const { ref, inView } = useInView({ triggerOnce: true });
    return <img ref={ref} src={inView ? src : ''} alt={alt} className="transition-opacity duration-500 opacity-0" loading="lazy" style={{ opacity: inView ? 1 : 0 }} />;
  };
  
 
const handleScroll=()=>{
targetRef.current.scrollIntoView({behavior:'smooth'})
}
  return (
    
      <div className='scroll-smooth h-full mt-[5vh] transition-all duration-300 overflow-x-hidden'>
        <div className='xl:block'>
        <div className=" text-white  flex items-center">
      <div className="container mx-auto xl:mx-28 px-4 xl:px-0  lg:py-12 lg:max-w-screen-lg">
        <div className="text-center xl:text-left flex flex-col justify-evenly  h-[50vh]">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-blinker  ">
            CULTIVATING THE <span className="text-[#f9754b]">ENTREPRENEURIAL SPIRIT </span>
             WITHIN YOU!</h1>
          {/* <h2 className="text-4xl md:text-5xl font-bold mb-6">WITHIN YOU!</h2> */}
          <p className="mb-6 sm:xl text-lg md:text-xl xl:w-3/5 w-full font-blinker ">
            Welcome to the entrepreneurial hub of IIIT Bhagalpur, where we engage in the dynamic processes
            of ideation, iteration, and incubation to drive forward groundbreaking ideas and ventures.
          </p>
          {/* <a href='#whatIsEcell' className='mt-10  '> */}
          <button onClick={handleScroll} className="text-white px-6 py-3   lg:w-[18%] xxl:mx-auto xxxl:mx-0 small:mx-auto hover:bg-[#f9754b] transition duration-300 border rounded-3xl font-comfortaa">
            Know More
          </button>
          {/* <div className='big-hidden'><Lottie options={Hero_Section} className="" /></div> */}
          
          {/* </a> */}
        </div>
        </div>
      </div>
    </div>
          <div className='h-[33rem] w-[33rem]  mt-[-300px] hidden sm:hidden xl:block mx-[710px]'>
          <AnimatedGif src={HeaderGif} alt = "Animated Gif" />
          </div>
      </div>
    
  );
}

export default HeroSection;
