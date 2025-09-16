import React from 'react'
import Navbar from '../../../Components/Navbar'
import Lottie from "react-lottie";
import workshopAnimation from '../../../lotties/Workshop.json'
import photo1 from '../../../icon/workshopphoto1.png'
import photo2 from '../../../icon/workshopphoto2.png'
import photo3 from '../../../icon/workshopphoto3.png'
import photo4 from '../../../icon/workshopphoto4.png'
import card1 from '../../../icon/workshopcard1.png'
import card2 from '../../../icon/workshopcard2.png'
import FooterSection from '../../../Components/FooterSection';

const Workshop = () => {

  const workshopjson = {
    loop: true,
    autoplay: true,
    animationData: workshopAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className='bg-[#051219] relative w-full h-full'>
      <div className="absolute top-0  z-50 w-full " ><Navbar /></div>
        <div className='small:hidden pt-[15vh]'>
          <div className='text-white px-[5vw] flex flex-col justify-center items-center mt-[3vh]'>
            <h1 className='text-[#EEEEEE] font-bold tracking-[4%] font-blinker text-[60px]'><span className='text-[#F9754B] '>WORKSHOPS </span> AT E-CELL</h1>
            <div className='flex justify-center items-center w-full mt-[12vh] '>
              <div className=' h-full w-full flex items-center justify-center'>
                <div className='w-[30vw]  '>
                  <Lottie options={workshopjson} className="" />
                </div>
              </div>
              <p className='font-blinker tracking-[2%] leading-[33px] space-x-[10px] w-full  h-full text-xl pb-20'>E-Cell workshops offer interactive sessions to enhance skills in entrepreneurship and business development. Covering key topics like business strategy, marketing, finance, and technology, these workshops provide hands-on learning from industry experts. Participants gain practical insights, tools, and techniques, along with networking opportunities and real-world case studies.
<br/><br/>
These workshops also facilitate valuable connections with industry professionals and peers, offering actionable takeaways to advance entrepreneurial ventures and achieve success.</p>
            </div>
          </div>
        </div>

        {/* Mobile screen below */}
        <div className='big:hidden pt-[15vh]'>
          <div className='text-white px-[5vw] flex flex-col justify-center items-center mt-[0vh]'>
            <h1 className='text-[#EEEEEE] font-bold tracking-[4%] font-blinker text-[40px]'><span className='text-[#F9754B]'>WORKSHOPS</span> AT E-CELL</h1>
            <div className='flex flex-col justify-center items-center w-full mt-[5vh] '>

              <p className='font-blinker tracking-[2%] leading-[30px] space-x-[10px] w-full  h-full '>Workshops at E-Cell are interactive sessions designed to enhance skills and knowledge in various aspects of entrepreneurship and business development. These workshops cover topics such
                as business strategy, marketing, finance, and technology, offering hands-on learning experiences and
                practical insights. Led by industry experts and seasoned entrepreneurs, the workshops provide
                participants with valuable tools and techniques to apply in their ventures. Attendees benefit from
                networking opportunities, real-world case studies, and actionable takeaways to advance their
                entrepreneurial journey
              </p>
              <div className=' h-full w-full flex  items-center justify-center'>
                <div className='w-[60vw]  '>
                  <Lottie options={workshopjson} className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile view end */}

      {/* // cards here */}
        <div className=' grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 place-items-center lg:mt-[15vh] md:mt-[10vh] mt-[5vh]   px-[8vw]  gap-x-[2vw] gap-y-[10vh]'>
          <div class="max-w-sm rounded-xl overflow-hidden shadow-lg bg-[#223C56] px-2 pt-2 transition-all duration-300 hover:z-10 hover:scale-[107%] hover:shadow-lg">
            <img class="w-full" src={card2} alt="card" />
            <div class="px-6 py-4 bg-[#223C56]">
              <p class="text-white text-base text-center">
                The Entrepreneurship Workshop: A to Zis a comprehensive program guiding participants
                through the entire entrepreneurial process. It covers idea generation, business planning, legal
                considerations, funding, product development, marketing, operations, pitching, and scaling.
                Attendees will gain practical skills and insights through interactive sessions, case studies, and expert
                guidance, equipping them to start and grow successful ventures.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded-xl overflow-hidden shadow-lg bg-[#223C56] px-2 pt-2 transition-all duration-300 hover:z-10 hover:scale-[107%] hover:shadow-lg">
            <img class="w-full" src={card1} alt="card" />
            <div class="px-6 py-4 bg-[#223C56]">
              <p class="text-white text-base text-center">
              The Entrepreneurship Awareness Program is designed to introduce individuals to the fundamental concepts and opportunities in entrepreneurship. This comprehensive program provides an overview of the entrepreneurial landscape, including the key traits of successful entrepreneurs, the step-by-step process of starting a business, and the various resources available for aspiring founders. Participants will learn about market analysis, business planning, etc.
              </p>
            </div>
          </div>
          {/* <div class="max-w-sm rounded-xl overflow-hidden shadow-lg bg-[#223C56] px-2 pt-2 transition-all duration-300 hover:z-10 hover:scale-[107%] hover:shadow-lg ">
            <img class="w-full" src={cardphoto2} alt="image" />
            <div class="px-6 py-4 bg-[#223C56]">
              <p class="text-white text-base text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dicta laudantium quae velit voluptates perferendis illo numquam accusantium cupiditate nihil?
              </p>
            </div>
          </div> */}
        </div>

        <div className='  small:hidden  text-center mt-[15vh]'>
          <h1 className=' text-[#F9754B] font-bold tracking-[4%] font-blinker text-[60px]'>SNEEK-PEEK <span className='text-[#EEEEEE]'> INSIDE OUR </span> WORKSHOPS </h1>
        </div>
        {/* mobile view start below */}
        <div className=' big:hidden  text-center mt-[15vh]'>
          <h1 className=' text-[#F9754B] font-bold tracking-[4%] font-blinker text-[30px]'>SNEEK-PEEK <span className='text-[#EEEEEE]'> INSIDE OUR </span> WORKSHOPS </h1>
        </div>

        <div className=' grid  md:grid-cols-2 sm:grid-cols-1 place-items-center lg:mt-[15vh] md:mt-[10vh] mt-[5vh]   px-[8vw]  gap-x-[2vw] gap-y-[10vh]'>

          <img src={photo1} className='transition-all duration-300 hover:z-10 hover:scale-[107%] hover:shadow-lg' alt='photo1'></img>
          <img src={photo2} className='transition-all duration-300 hover:z-10 hover:scale-[107%] hover:shadow-lg ' alt='photo2'></img>
          <img src={photo3} className='transition-all duration-300 hover:z-10 hover:scale-[107%] hover:shadow-lg' alt='photo3'></img>
          <img src={photo4} className='transition-all duration-300 hover:z-10 hover:scale-[107%] hover:shadow-lg' alt='photo4'></img>
          <div className='pt-20'></div>
        </div>

        <div className='mt-[15vh]'>
          <FooterSection />
        </div>
      </div>
    </>
  )
}

export default Workshop
