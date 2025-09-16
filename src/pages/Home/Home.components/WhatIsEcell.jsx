import React,{forwardRef} from "react";
import Lottie from "react-lottie";
import animationData from "../../../lotties/WhatIsEcell.json";
import vector1 from '../../../../src/icon/Vector (1).png';
import vector2 from '../../../../src/icon/Vector (2).png';
import vector3 from '../../../../src/icon/vector 3.png';
import { useNavigate } from "react-router-dom";

const WhatIsEcell = forwardRef((props, ref) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const navigate= useNavigate();
  return (
    <div ref={ref} className="overflow-hidden scroll-smooth" id="whatIsEcell">
      <div className="small:hidden max-h-[1000px] h-[100vh] w-[100vw] pl-[10vw] pr-[5vw] gap-x-[5vw]     flex  justify-betweeen items-center">
        
        <div className="w-full">
          <div className="relative">
          <img src={vector1} alt="vector1" className="z-1 absolute w-[40vw] right-[3.7vw] top-[-6.5vh]" ></img>
          <img src={vector2} alt="vector2" className="z-2 absolute w-[34vw] right-[7vw]" ></img>
          <div className=" w-[32vw]">
          <Lottie options={defaultOptions} className=" absolute  z-3" />
          </div>
            </div>
        </div>
        <div className="flex flex-col  w-full h-[80%]  justify-evenly items-center ">
          <h1 className="font-bold text-[4.5vw] font-blinker">
            WHAT IS <span className="text-[#F9754B]">E-CELL</span>?
          </h1>
          <p className="text-[20px] font-blinker">
            E-Cell IIIT Bhagalpur, powered by passionate students, stands as a
            crucial connector, forging strong ties between E-Cell entrepreneurs
            and the bustling startup ecosystem. Functioning as a dynamic central
            hub, we provide a collaborative space where startups unite to
            exchange ideas, foster innovation, and embark on collective
            ventures. Join us in creating a thriving community where
            entrepreneurial spirit thrives, and possibilities are limitless!
          </p>
          <div onClick={()=>{
            navigate('/Blogs');
          }} className="w-full ">
            <button className="hover:bg-black hover:text-white text-[20px] font-comfortaa border-[2px] border-black rounded-full transition-all duration-300 ease-in-out px-[5%] py-[4px]">
              More About E-Cell?
            </button>
          </div>
        </div>
      </div>


        {/* MOBILE VIEW BELOW */}

      <div className="big:hidden lg:h-[120vh] md:-h[110vh] sm:h-[110vh] h-[780px]  ">
        <div className="flex flex-col items-center lg:gap-y-[4vh] gap-y-[2vh] ">
        <h1 className="font-blinker font-bold  text-[46px] sm:text-[45px] md:text-[5.72vw] lg:text-[5.72vw] leading-[94.7px] tracking-[4%]  ">WHAT IS <span className="text-[#F9754B]">E-CELL</span>?</h1>
        <p className="text-center px-[8vw] text-[19px] xs:text-[16px] md:text-[1.92vw] lg:text-[1.92vw] sm:text-[19px]   font-blinker">E-Cell IIIT Bhagalpur, powered by passionate students, stands as a crucial connector, forging strong ties between E-Cell entrepreneurs and the bustling startup ecosystem. Functioning as a dynamic central hub, we provide a collaborative space where startups unite to exchange ideas, foster innovation, and embark on collective ventures. Join us in creating a thriving community where entrepreneurial spirit thrives, and possibilities are limitless! </p>
        <div onClick={()=>{navigate('/Blogs')}}><button className="mt-[4vh] rounded-xl border-2 border-[#1E1E1E] hover:bg-black hover:text-white "> <div className="font-comfortaa font-semibold  xs:text-[16px] text-[16px] md:text-[1.92vw] lg:text-[1.72vw]  py-[0.4vw] rounded-xl px-[28.31px]">More About E-Cell?</div></button></div>
        </div>
        <div>
        <div className="relative mt-[8vh] ">
         
          <img src={vector3} alt="vector3" className=" z-2 absolute w-[50vw] right-[25vw] top-[-5vw]  md:w-[45vw] md:top-[-4vw] md:right-[26vw] lg:w-[41vw] lg:right-[28.4vw]" ></img>
          <div className=" w-[39vw] md:w-[38vw] lg:w-[34vw] mx-auto ">
          <Lottie options={defaultOptions} className=" absolute  z-3" />
          </div>
            </div>
        </div>
      </div>
    </div>
  );
}
)
export default WhatIsEcell;
