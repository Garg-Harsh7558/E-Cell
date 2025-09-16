import React from 'react';
import i1 from "../../../icon/aman .png"
import i2 from "../../../icon/ayush.png"
import i3 from "../../../icon/i3.png"
import i4 from "../../../icon/i4.png"
import i5 from "../../../icon/suyash.png"
import Navbar from '../../../Components/Navbar';
import linkenin from '../../../icon/LinkedIn.png'
import FooterSection from '../../../Components/FooterSection';
import CopyEmailButton from './CopyEmail';

const Meet = () => {

  return (
      <div className='relative w-full h-full'>
      <div className='absolute top-0 w-full  '><Navbar ></Navbar></div>
      
    <div className="bg-black text-white pt-[10vh]">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-white">MEET OUR<span className='text-[#f9754b]'> TEAM</span></h1>
        <p className="text-lg mt-2">Get To Know The Team Members Of E-Cell.</p>
        <p className="text-lg">2024-2025</p>
      </div>
      <div className="text-center py-10 ">
        <h2 className="text-3xl text-[#f9754b]"><span className='text-white'>E-CELL</span> SECRETORY</h2>
        <div className="mt-5 ">
          <div className="w-70 h-100  grid place-content-center ">
            <div className='w-[292px] h-[424px] bg-transparent cursor-pointer group rounded-3xl perspective-1000'>
              <div className='relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500'>
                <div className='w-full h-full absolute rounded-3xl overflow-hidden'>
                  <img src={i1} className='w-full h-full' alt="Aman Raj"/>
                </div>
                <div className='absolute rotate-y-180 w-full h-full bg-[#0F1823] bg-opacity-95 rounded-3xl overflow-hidden p-10 text-neutral-300 space-y-5 backface-hidden'>
                  <div>
                    <p className='font-bold  text-center'>"Entrepreneurship relies on innovation to transform resources into new capabilities and opportunities, driving the creation of wealth and fostering economic growth."</p>
                  </div>
                  <div className='flex flex-col '>
                    <p className='text-2xl font-bold text-center'>
                      Aman Raj
                    </p>
                  </div>
                  <div className='flex flex-col '>
                    <p className='text-center'>
                      Entrepreneurship Cell Secretory
                    </p>
                  </div>
                  <div className='flex justify-center px-5 mx-5'>
                    <span className='px-2'><a href="https://www.linkedin.com/in/aman-raj-804858208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={linkenin} alt="" /></a></span>
                    <span><CopyEmailButton email="aman.2101214ec@iiitbh.ac.in" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-10">
        <h2 className="text-3xl text-orange-500 mb-20"><span className='text-white'>E-CELL</span> LEADS</h2>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <div className="flex flex-col items-center lg:ml-44 mb-20">
            <div className="w-70 h-100  grid place-content-center">
            <div className='w-[292px] h-[424px] bg-transparent cursor-pointer group rounded-3xl perspective-1000'>
              <div className='relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500'>
                <div className='w-full h-full absolute rounded-3xl overflow-hidden'>
                  <img src={i2} className='w-full h-full' alt="Ayush K. Singh"/>
                </div>
                <div className='absolute rotate-y-180 w-full h-full bg-[#0F1823] bg-opacity-95 rounded-3xl overflow-hidden p-10 text-neutral-300 space-y-5 backface-hidden'>
                  <div>
                    <p className='font-bold  text-center'>"Transforming innovative ideas into reality through seamless technical integration and operational efficiency, driving entrepreneurial vision forward."</p>
                  </div>
                  <div className='flex flex-col '>
                    <p className='text-2xl font-bold text-center'>
                    Ayush K. Singh
                    </p>
                  </div>
                  <div className='flex flex-col '>
                    <p className='text-center'>
                      Technical Operations Lead
                    </p>
                  </div>
                  <div className='flex justify-center px-5 mx-5'>
                    <span className='px-2'><a href="https://www.linkedin.com/in/ayush-kumar-singh-a95170256"><img src={linkenin} alt="" /></a></span>
                    <span><CopyEmailButton email="ayush.2201055cs@iiitbh.ac.in" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="flex flex-col items-center lg:mr-44">
             <div className="w-70 h-100  grid place-content-center">
            <div className='w-[292px] h-[424px] bg-transparent cursor-pointer group rounded-3xl perspective-1000'>
              <div className='relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500'>
                <div className='w-full h-full absolute rounded-3xl overflow-hidden'>
                  <img src={i3} className='w-full h-full' alt="Anish Ranjan"/>
                </div>
                <div className='absolute rotate-y-180 w-full h-full bg-[#0F1823] bg-opacity-95 rounded-3xl overflow-hidden p-10 text-neutral-300 space-y-5 backface-hidden'>
                  <div>
                    <p className='font-bold  text-center'>" Strategic relationships are not just connections; they are the foundation of innovation and growth. By fostering collaboration and trust, we transform potential into success."</p>
                  </div>
                  <div className='flex flex-col '>
                    <p className='text-2xl font-bold text-center'>
                      Anish Ranjan
                    </p>
                  </div>
                  <div className='flex flex-col '>
                    <p className='text-center'>
                      Strategic Relations Lead
                    </p>
                  </div>
                  <div className='flex justify-center px-5 mx-5'>
                    <span className='px-2'><a href="https://www.linkedin.com/in/anish-ranjan-04bb7324b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={linkenin} alt="" /></a></span>
                    <span><CopyEmailButton email="anish.2201138ec@iiitbh.ac.in" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="flex flex-col items-center lg:ml-44">
             <div className="w-70 h-100  grid place-content-center">
            <div className='w-[292px] h-[424px] bg-transparent cursor-pointer group rounded-3xl perspective-1000'>
              <div className='relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500'>
                <div className='w-full h-full absolute rounded-3xl overflow-hidden'>
                  <img src={i4} className='w-full h-full' alt="Sakshi Meena"/>
                </div>
                <div className='absolute rotate-y-180 w-full h-full bg-[#0F1823] bg-opacity-95 rounded-3xl overflow-hidden p-10 text-neutral-300 space-y-5 backface-hidden'>
                  <div>
                    <p className='font-bold  text-center'>"Innovation is the art of seeing what everyone sees, but envisioning what no one has dared to imagine. It is the beacon that separates leaders from followers, igniting paths to new horizons."</p>
                  </div>
                  <div className='flex flex-col '>
                    <p className='text-2xl font-bold text-center'>
                      Sakshi Meena
                    </p>
                  </div>
                  <div className='flex flex-col '>
                    <p className='text-center'>
                      Outreach and Innovation Lead
                    </p>
                  </div>
                  <div className='flex justify-center px-5 mx-5'>
                    <span className='px-2'><a href="https://www.linkedin.com/in/miss-sakshi-207a0b255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={linkenin} alt="" /></a></span>
                    <span><CopyEmailButton email="sakshi.2201251me@iiitbh.ac.in" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="flex flex-col items-center lg:mr-44">
             <div className="w-70 h-100  grid place-content-center">
            <div className='w-[292px] h-[424px] bg-transparent cursor-pointer group rounded-3xl perspective-1000'>
              <div className='relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500'>
                <div className='w-full h-full absolute rounded-3xl overflow-hidden'>
                  <img src={i5} className='w-full h-full' alt="Suyash Ranjan"/>
                </div>
                <div className='absolute rotate-y-180 w-full h-full bg-[#0F1823] bg-opacity-95 rounded-3xl overflow-hidden p-10 text-neutral-300 space-y-5 backface-hidden'>
                  <div>
                    <p className='font-bold  text-center'>"Embrace the power of innovation to transform challenges into opportunities and dreams into reality.Your entrepreneurial spirit can create a brighter,more prosperous future."</p>
                  </div>
                  <div className='flex flex-col '>
                    <p className='text-2xl font-bold text-center'>
                      Suyash Ranjan
                    </p>
                  </div>
                  <div className='flex flex-col '>
                    <p className='text-center'>
                      Marketing and PR Lead
                    </p>
                  </div>
                  <div className='flex justify-center px-5 mx-5'>
                    <span className='px-2'><a href="https://www.linkedin.com/in/suyash-ranjan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={linkenin} alt="" /></a></span>
                    <span><CopyEmailButton email="suyash.2201227ec@iiitbh.ac.in" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div className='pt-20 bg-black'>
    </div>
    <FooterSection/>
</div>

  );
};

export default Meet;
