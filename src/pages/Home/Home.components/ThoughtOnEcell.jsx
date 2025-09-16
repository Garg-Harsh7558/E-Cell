import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sandeepjain from '../../../icon/SANDEEP JAIN.png'
import gfglogo from '../../../icon/Gfglogo.png'
import veerwal from '../../../icon/veerwal.png'
import acad from '../../../icon/AcadBoostLogo.png'

function ThoughtOnEcell() {

   
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
 }
  return (
    <div className='w-3/4 m-auto'>
    <div className='leadHeading text-3xl font-bold font-blinker text-center py-10 md:text-6xl sm:text-6xl px-3 '>PEOPLE'S THOUGHT ON OUR <span className='text-[#F9754B]'> E-CELL</span></div>
      <div className="  bg-[#212121] px-10 py-8 rounded-3xl ">
      <Slider {...settings} >
        {data.map((d) => (
          <div key={d.name} className=" h-[450px] text-black rounded-xl bg-[#212121]">
            <span className=' h-20 sm:h-44 lg:h-56 bg-[#212121] flex justify-center items-center rounded-t-xl'>
              <img src={d.img} alt="" className="h-20 w-20 sm:h-44 sm:w-44 rounded-full  bg-[#212121]"/>
              <img src={d.logo} alt="" className="h-20 w-20 sm:h-44 sm:w-44 rounded-full  bg-[#212121]"/>
            </span>

            <div className="flex flex-col font-blinker items-center justify-center  p-0 bg-[#212121]">
              <p className="text-xl font-semibold font-blinker text-[#F9754B]">{d.name}</p>
              <span>
              <span className="text-xl font-semibold mx-2 font-blinker text-[#F9754B]">{d.status},</span> <span className="text-xl font-semibold text-[#F9754B]">{d.company}</span>
              </span>
              <p className="text-center sm:text-xl text-white font-blinker ">{d.content}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
  );

}

const data = [
  {
    name: `Sandeep Jain`,
    status: `Founder`,
    company: `GeeksForGeeks`,
    img: sandeepjain,
    logo: gfglogo,
    content : `It was a privilege to participate in Enyugma'22. The remarkable energy and dedication displayed by the aspiring entrepreneurs were highly impressive.It is encouraging to witness the E-Cell's efforts in providing a robust platform to cultivate an entrepreneurial mindset among students. I extend my best wishes to all involved for continued success and growth in the years to come.`
  },
  {
    name : `Kalpit Veerwal`,
    status : `Founder`,
    company : `AcadBoost`,
    img: veerwal,
    logo: acad,
    content : `E-cell at IIIT Bhagalpur is a vibrant community of Student entrepreneurs and mentors. They bring incredible enthusiasm and energy to everything they do, from the annual E-Summit to various cultural events. I also appreciate the warm hospitality from the students and the unique charm of the institution, which makes every visit special.`
  },
  
];

export default ThoughtOnEcell;