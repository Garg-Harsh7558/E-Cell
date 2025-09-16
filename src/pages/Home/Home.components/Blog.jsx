import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Business from '../../../icon/Business.png';
// import B2 from '../../../icon/b2.png';
import Navbar from '../../../Components/Navbar';
import FooterSection from '../../../Components/FooterSection';
import Subscribe from './subscribe';
import blog1 from '../../../icon/blog1.webp';
import blog_vector from '../../../icon/Blog vector.png';
import blog2 from '../../../icon/blog 2.webp';
//import bgimage from '../../../icon/bgimage2.png';


const Blog = () => {
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString(); 
  };
  // const scrollpage = {
  //   backgroundImage: `url(${bgimage})`,
  //   backgroundAttachment: "fixed",
    
  // }


 const [dateTime, setDateTime] = useState(getCurrentDateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getCurrentDateTime());
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };
  // const handleClick = () => {
  //   window.location.href = 'https://medium.com/@amanpeterson1/campus-to-company-how-to-start-a-startup-in-college-bda9488bb938';
  // };

  return (
    <div className='overflow-x-hidden h-full w-full relative ' >
    <div className=' bg-[#051219]  w-full  absolute top-0 z-10 lg:h-[4%] md:h-[4%] h-[100px]'><Navbar/></div>

    {/* <div className='bg-[#051219] relative w-full h-full'>
      <div className="absolute top-0  z-50 w-full h-full" ><Navbar /></div> */}
    
    <div className="min-h-screen flex flex-col items-center justify-center p-4 pt-[18vh]">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-blinker font-bold text-center mb-4">
        INSIDE <span className='text-orange-500'>ENTREPRENEURSHIP: </span>STORIES AND INTERVIEWS
      </h1>
      <div className="w-full max-w-4xl mx-auto py-8 font-bold font-blinker">
        <Slider {...settings}>
          <div>
            <h2 className="text-lg md:text-xl text-center  font-bold font-inter">
              "Chase the vision, not the money; the money will end up following you."
            </h2>
            <p className="text-center mt-2 font-bold font-inter">- Tony Hsieh</p>
          </div>
          <div>
            <h2 className="text-lg md:text-xl text-center font-bold font-inter">
              "The way to get started is to quit talking and begin doing."
            </h2>
            <p className="text-center mt-2 font-bold font-inter">- Walt Disney</p>
          </div>
          <div>
            <h2 className="text-lg md:text-xl text-center font-bold font-inter">
            "The secret to successful hiring is this: look for the people who want to change the world." 
            </h2>
            <p className="text-center mt-2 font-bold font-inter">- Marc Benioff</p>
          </div>
          <div>
            <h2 className="text-lg md:text-xl text-center font-bold font-inter">
            "Risk more than others think is safe. Dream more than others think is practical."
            </h2>
            <p className="text-center mt-2 font-bold font-inter"> - Howard Schultz</p>
          </div>
          <div>
            <h2 className="text-lg md:text-xl text-center font-bold font-inter">
            "Success is walking from failure to failure with no loss of enthusiasm."
            </h2>
            <p className="text-center mt-2 font-bold font-inter"> - Winston Churchill</p>
          </div>
          {/* ... (other slider items) */}
        </Slider>
      </div>

      <div className="w-full mt-8 px-[6vw]">
      <h2 className='font-blinker font-semibold lg:text-[2vw] md:text-[3vw] text-[30px]'>Recent Blog Posts.</h2>
        {/* <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
         
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-3 p-4">
            <img src={Business} className='w-full h-auto' alt="Business" />
            <span className="block mt-2 pt-5 pb-5">{dateTime}</span>
            <h2 className='text-xl font-bold'>Conversation with blah blah</h2>
            <p className="mt-2 pt-5">
              Lorem ipsum dolor sit amet consectetur.
              Venenatis in sed elit tempor eu eget in. 
              Imperdiet id dictumst scelerisque augue diam ultrices interdum maecenas.
              dictumst scelerisque augue diam ultrices interdum maecenas.
            </p>
          </div>

          
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="md:col-span-2 lg:col-span-3 p-4">
              <div className="flex flex-col sm:flex-row items-start">
                <img src={B2} alt="Description" className="w-full sm:w-1/3 mb-4 sm:mb-0 sm:mr-4" />
                <div className="flex-1">
                  Lorem ipsum dolor sit amet consectetur.
                  Venenatis in sed elit tempor eu eget in. 
                  Imperdiet id dictumst scelerisque augue diam ultrices interdum maecenas.
                  dictumst scelerisque augue diam ultrices interdum maecenas.
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <div className='z-10 relative mt-[3vw] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-x-[4vw] gap-y-[10vh] w-full'>
          
        <a href='https://medium.com/@amanpeterson1/campus-to-company-how-to-start-a-startup-in-college-bda9488bb938' target='_blank'  >
              <article className='flex flex-col gap-y-[3vh] '>
                <div></div>
                <img src={blog1} alt='blog1' className='lg:w-[30vw] md:w-[50vw] sm:w-[500px] mx-auto'></img>
                <div className='font-comfortaa font-bold'>Aman Raj -05, August 2024</div>
                <div className='flex w-full justify-between'>
                <h1 className='font-blinker font-semibold lg:text-[2vw] md:text-[2.5vw] text-[25px]'>Campus to Company: How to Start a Startup in College?</h1>
                <div className='lg:w-[1.5vw] lg:h-[1.5vw] md:w-[2vw] md:h-[2vw] w-[15px] h-[15px] my-auto  flex items-center justify-center'>
                <img src={blog_vector} alt='blog_vector' className='w-full h-full'></img>
                </div>
                </div>
                <p className='font-comfortaa font-semibold'>Starting a startup while in college is an exciting opportunity to turn your ideas into reality. The vibrant campus environment, access to resources, and a network of like-minded individuals can provide a fertile ground for entrepreneurship. However, it’s also a challenging endeavor that requires dedication and resilience.</p>
              </article>
            </a>
           
          <div className='small:hidden absolute -z-10   w-full flex justify-center h-full '>
          <div className='border border-[#D9D9D9]'></div>
          </div>

            
            <a href='https://medium.com/@ecelliiitbh/stock-market-101-a-beginners-guide-to-investing-1339895e4b28' target='_blank' >
              <div className='flex flex-col gap-y-[3vh] '>
                <div></div>
                <img src={blog2} alt='blog2' className='lg:w-[30vw] md:w-[50vw] sm:w-[500px] mx-auto'></img>
                <div className='font-comfortaa font-bold'>Aman Raj -06, August 2024</div>
                <div className='flex w-full justify-between'>
                <h1 className='font-blinker font-semibold lg:text-[2vw] md:text-[2.5vw] text-[25px]'>Stock Market 101: A Beginner’s Guide to Investing</h1>
                <div className='lg:w-[1.5vw] lg:h-[1.5vw] md:w-[2vw] md:h-[2vw] w-[15px] h-[15px] my-auto  flex items-center justify-center'>
                <img src={blog_vector} alt='blog_vector' className='w-full h-full'></img>
                </div>
                </div>
                <p className='font-comfortaa font-semibold'>The stock market can be an exciting avenue for growing your wealth, but it can also seem daunting to those who are just starting. Understanding the basics, knowing the requirements, and learning how to minimize risks are crucial steps to becoming a successful investor. The stock market is a platform where shares of publicly traded companies are bought and sold.</p>
              </div>
            </a>
         
        </div>



      </div>
    </div>
    <div><Subscribe/></div>
    <div className='mt-[15vh]'><FooterSection/></div>
    
    </div>
  );
};

export default Blog;