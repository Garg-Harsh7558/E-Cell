import React from "react";
import Lottie from "react-lottie";

import Vision_Arrow from "../../../lotties/Vision_Arrow.json";
import Vision_ToExpand from "../../../lotties/Vision_ToExpand.json";
import Vision_ToInnovate from "../../../lotties/Vision_ToInnovate.json";
import Vision_ToLearn from "../../../lotties/Vision_ToLearn.json";

const Vision = () => {
  const Vision_Arrows = {
    loop: true,
    autoplay: true,
    animationData: Vision_Arrow,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const Vision_ToExpands = {
    loop: true,
    autoplay: true,
    animationData: Vision_ToExpand,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const Vision_ToInnovates = {
    loop: true,
    autoplay: true,
    animationData: Vision_ToInnovate,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const Vision_ToLearns = {
    loop: true,
    autoplay: true,
    animationData: Vision_ToLearn,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="  overflow-x-hidden ">
      {/* <Lottie options={Vision_Arrows} height={200} width={250} /> */}
      <div className="flex flex-col small:hidden min-h-[1000px] max-h-[1500px] h-[100vh] w-[100vw] mt-[-5vh] justify-evenly items-center pb-[10vh] px-[10vh]">
        <h1 className="font-bold text-[4.2vw] font-blinker">
          VISION OF <span className="text-[#F9754B]">E-CELL</span>
        </h1>
        <p className="max-w-[65vw]  text-[25px] tracking-[0.02rem] text-center justify-center font-blinker">
          We actively implement a spectrum of initiatives and events at IIITBH.
          These endeavors are meticulously designed to cultivate the
          entrepreneurial spirit, providing a dynamic platform for learning,
          hands-on building, and scaling ventures. Our mission is to weave a
          rich tapestry of innovation, knowledge, and collaboration, fostering a
          culture where startups not only thrive but also chart a course for
          remarkable <span>success!</span>
        </p>
        <div className="flex justify-between   px-[4vw] h-[40%]">
        <div className=" w-full h-full  flex items-center justify-center ">
            <div className="group group-hover:relative w-full bg-white flex flex-col rounded-3xl pt-[4vh] h-[78%]  items-center justify-center transition-all duration-300 hover:z-10 hover:scale-[107%]">
              <Lottie options={Vision_ToLearns} className="" />
              <p className=" text-white bg-black w-full rounded-b-3xl py-[1.5vh] font-comfortaa  text-center ">
              <div className="group-hover:hidden ">To Learn</div>
                <div className="opacity-0 group-hover:opacity-100 overflow-hidden group-hover:transition-all group-hover:duration-300  group-hover:h-[65%] h-[0vh] group-hover:bottom-[0%] group-hover:font-comfortaa group-hover:text-[0.9vw] group-hover:p-[2vh] group-hover:bg-black group-hover:w-full group-hover:rounded-b-2xl group-hover:absolute  ">
                <div>Learning about entrepreneurship empowers individuals to create to provide the skills and knowledge necessary to start and grow successful businesses, solve problems, and contribute positively to the economy and society.
                </div>
                </div>

              </p>
            </div>
          </div>
          {/* <div className="w-full h-full  flex items-center justify-center ">
            <div className=" bg-white flex flex-col rounded-3xl pt-[4vh] h-[78%]  items-center justify-center transition-all duration-300 hover:z-10 hover:scale-[107%]">
              <Lottie options={Vision_ToLearns} className="" />
              <p className=" text-white bg-black w-full rounded-b-3xl py-[1.5vh] font-comfortaa  flex justify-center ">
                <div>To Learn</div>
              </p>
            </div>
          </div> */}
          <div className="w-8/12 h-full flex items-start ">
            <div className="   rounded-3xl pt-[4vh]    rotate-[230deg]">
              <Lottie options={Vision_Arrows} className="" />
              
            </div>
          </div>

          <div className=" w-full h-full  flex items-center justify-center ">
            <div className="group group-hover:relative w-full bg-white flex flex-col rounded-3xl pt-[4vh] h-[78%]  items-center justify-center transition-all duration-300 hover:z-10 hover:scale-[107%]">
              <Lottie options={Vision_ToInnovates} className="" />
              <p className=" text-white bg-black w-full rounded-b-3xl py-[1.5vh] font-comfortaa  text-center ">
              <div className="group-hover:hidden ">To Innovate</div>
                <div className="opacity-0 group-hover:opacity-100 overflow-hidden group-hover:transition-all group-hover:duration-300  group-hover:h-[55%] h-[0vh] group-hover:bottom-[0%] group-hover:font-comfortaa group-hover:text-[0.9vw] group-hover:p-[2vh] group-hover:bg-black group-hover:w-full group-hover:rounded-b-2xl group-hover:absolute  ">
                <div>The motive of E-Cell is teach to innovate in entrepreneurship is to create unique solutions, differentiate from competitors, meet evolving customer needs, and drive business growth and sustainability.
                </div>
                </div>

              </p>
            </div>
          </div>



          {/* <div className=" w-full   flex items-center justify-center  ">
            <div className="group bg-white flex flex-col rounded-3xl pt-[4vh] group-hover:relative h-[78%] w-[120%] items-center justify-center transition-all duration-300 hover:z-10 hover:scale-[107%]">
              <Lottie options={Vision_ToInnovates} className="" />
              <p className=" text-white bg-black w-full rounded-b-3xl py-[1.5vh] font-comfortaa  flex justify-center ">
                <div className="group-hover:hidden">To Innovate</div>
                <div className="opacity-0 group-hover:opacity-100 group-hover:h-[40%] group-hover:top-[59%] group-hover:bg-black group-hover:w-full group-hover:rounded-b-2xl   group-hover:absolute">The motive of E-Cell is teach to innovate in entrepreneurship is to create unique solutions, differentiate from competitors, meet evolving customer needs, and drive business growth and sustainability.</div>
              </p>
            </div>
          </div> */}

          
          <div className="w-8/12 h-full  flex items-end ">
            <div className="   rounded-3xl pt-[4vh]    rotate-[50deg]">
              <Lottie options={Vision_Arrows} className="" />
              
            </div>
          </div>

          <div className=" w-full h-full  flex items-center justify-center ">
            <div className="group group-hover:relative w-full bg-white flex flex-col rounded-3xl pt-[4vh] h-[78%]  items-center justify-center transition-all duration-300 hover:z-10 hover:scale-[107%]">
              <Lottie options={Vision_ToExpands} className="" />
              <p className=" text-white bg-black w-full rounded-b-3xl py-[1.5vh] font-comfortaa  text-center ">
              <div className="group-hover:hidden ">To Expand</div>
                <div className="opacity-0 group-hover:opacity-100 overflow-hidden group-hover:transition-all group-hover:duration-300  group-hover:h-[70%] h-[0vh] group-hover:bottom-[0%] group-hover:font-comfortaa group-hover:text-[0.9vw] group-hover:p-[2vh] group-hover:bg-black group-hover:w-full group-hover:rounded-b-2xl group-hover:absolute  ">
                <div>Expanding and learning about entrepreneurship can lead to personal and financial growth. It equips individuals with skills develop business ideas, and manage successful ventures, contributing to economic development and personal fulfillment.
                </div>
                </div>

              </p>
            </div>
          </div>


         
        </div>


       

      </div>

      {/* mobile screen below */}

      <div className="big:hidden lg:pt-[10vh] md:-[10vh] sm:pt-[10vh]  pt-[8vh] ">
      <div className="flex flex-col  min-h-[1400px] max-h-[2500px] h-[100vh] w-[100vw] mt-[-5vh] justify-evenly items-center pb-[10vh] ">
      <h1 className="font-blinker font-bold  text-[43px] sm:text-[43px] md:text-[5.72vw] lg:text-[5.72vw] leading-[94.7px] tracking-[4%]  ">VISION OF <span className="text-[#F9754B]">E-CELL</span></h1>
        <p className="text-center px-[8vw] text-[19px] xs:text-[16px] md:text-[2.2vw] lg:text-[2.2vw] sm:text-[19px]   font-blinker">
          We actively implement a spectrum of initiatives and events at IIITBH.
          These endeavors are meticulously designed to cultivate the
          entrepreneurial spirit, providing a dynamic platform for learning,
          hands-on building, and scaling ventures. Our mission is to weave a
          rich tapestry of innovation, knowledge, and collaboration, fostering a
          culture where startups not only thrive but also chart a course for
          remarkable success!
        </p>
        {/* <div className="flex flex-col justify-between   px-[4vw] h-[40%]"> */}
          <div className="group group-hover:relative w-full h-full px-[10vh]  flex items-center justify-center ">
            <div className=" bg-white flex flex-col rounded-3xl pt-[4vh] w-[300px] h-[250px] items-center justify-center transition-all duration-300 hover:z-10 hover:scale-[107%]">
              <Lottie options={Vision_ToLearns} className="" />
              <p className=" text-white bg-black w-full rounded-b-3xl py-[1.5vh] font-comfortaa  text-center ">
              <div className="group-hover:hidden ">To Expand</div>
                <div className="opacity-0 group-hover:opacity-100 overflow-hidden group-hover:transition-all group-hover:duration-300  lg:group-hover:h-[52%] group-hover:h-[68%] sm:group-hover:h-[52%] md:group-hover:h-[52%]  group-hover:text-[11.5px] h-[0vh] group-hover:bottom-[0%] group-hover:font-comfortaa  group-hover:p-[2vh] group-hover:py-[1vh] group-hover:bg-black group-hover:w-full group-hover:rounded-b-2xl group-hover:absolute  ">
                <div>Expanding and learning about entrepreneurship can lead to personal and financial growth. It equips individuals with skills develop business ideas, and manage successful ventures, contributing to economic development and personal fulfillment.
                </div>
                </div>
              </p>
            </div>
          </div>
          

          {/* <div className=" w-full h-full  flex items-center justify-center ">
            <div className="group group-hover:relative w-full bg-white flex flex-col rounded-3xl pt-[4vh] h-[78%]  items-center justify-center transition-all duration-300 hover:z-10 hover:scale-[107%]">
              <Lottie options={Vision_ToExpands} className="" />
              <p className=" text-white bg-black w-full rounded-b-3xl py-[1.5vh] font-comfortaa  text-center ">
              <div className="group-hover:hidden ">To Expand</div>
                <div className="opacity-0 group-hover:opacity-100 overflow-hidden group-hover:transition-all group-hover:duration-300  group-hover:h-[65%] h-[0vh] group-hover:bottom-[0%] group-hover:font-comfortaa group-hover:text-[0.9vw] group-hover:p-[2vh] group-hover:bg-black group-hover:w-full group-hover:rounded-b-2xl group-hover:absolute  ">
                <div>Expanding and learning about entrepreneurship can lead to personal and financial growth. It equips individuals with skills develop business ideas, and manage successful ventures, contributing to economic development and personal fulfillment.
                </div>
                </div>

              </p>
            </div>
          </div> */}



          {/* <div className="w-full    px-[10vh] flex items-center justify-center  ">
            <div className=" bg-white flex flex-col rounded-3xl pt-[4vh] w-[300px] h-[250px]  items-center justify-center transition-all duration-300 hover:z-10 hover:scale-[107%]">
              <Lottie options={Vision_ToInnovates} className="" />
              <p className=" text-white bg-black w-full rounded-b-3xl py-[1.5vh] font-comfortaa flex justify-center ">
                <div>To Innovate</div>
              </p>
            </div>
          </div> */}
          <div className="group group-hover:relative w-full h-full px-[10vh]  flex items-center justify-center ">
            <div className=" bg-white flex flex-col rounded-3xl pt-[4vh] w-[300px] h-[250px] items-center justify-center transition-all duration-300 hover:z-10 hover:scale-[107%]">
              <Lottie options={Vision_ToInnovates} className="" />
              <p className=" text-white bg-black w-full rounded-b-3xl py-[1.5vh] font-comfortaa  text-center ">
              <div className="group-hover:hidden ">To Innovate</div>
                <div className="opacity-0 group-hover:opacity-100 overflow-hidden group-hover:h-[60%] sm:group-hover:h-[40%] md:group-hover:h-[40%] group-hover:transition-all group-hover:duration-300  lg:group-hover:h-[42%] group-hover:text-[11.5px] h-[0vh] group-hover:bottom-[0%] group-hover:font-comfortaa  group-hover:p-[2vh] group-hover:py-[1vh] group-hover:bg-black group-hover:w-full group-hover:rounded-b-2xl group-hover:absolute  ">
                <div>The motive of E-Cell is teach to innovate in entrepreneurship is to create unique solutions, differentiate from competitors, meet evolving customer needs, and drive business growth and sustainability.
                </div>
                </div>
              </p>
            </div>
          </div>

          
          {/* <div className="w-full h-full px-[10vh]  flex items-center justify-center ">
            <div className=" bg-white flex flex-col rounded-3xl pt-[4vh] w-[300px] h-[250px]  items-center justify-center transition-all duration-300 hover:z-10 hover:scale-[107%]">
              <Lottie options={Vision_ToExpands} className="" />
              <p className=" text-white bg-black w-full rounded-b-3xl py-[1.5vh] font-comfortaa  flex justify-center ">
                <div>To Expand</div>
              </p>
            </div>
          </div> */}
          <div className="group group-hover:relative w-full h-full px-[10vh]  flex items-center justify-center ">
            <div className=" bg-white flex flex-col rounded-3xl pt-[4vh] w-[300px] h-[250px] items-center justify-center transition-all duration-300 hover:z-10 hover:scale-[107%]">
              <Lottie options={Vision_ToExpands} className="" />
              <p className=" text-white bg-black w-full rounded-b-3xl py-[1.5vh] font-comfortaa  text-center ">
              <div className="group-hover:hidden ">To Expand</div>
                <div className="opacity-0 group-hover:opacity-100 overflow-hidden group-hover:transition-all group-hover:duration-300  lg:group-hover:h-[55%] md:group-hover:h-[55%] group-hover:h-[65%] sm:group-hover:h-[55%] group-hover:text-[11.5px] h-[0vh] group-hover:bottom-[0%] group-hover:font-comfortaa  group-hover:p-[2vh] group-hover:py-[1vh] group-hover:bg-black group-hover:w-full group-hover:rounded-b-2xl group-hover:absolute  ">
                <div>Expanding and learning about entrepreneurship can lead to personal and financial growth. It equips individuals with skills develop business ideas, and manage successful ventures, contributing to economic development and personal fulfillment.
                </div>
                </div>
              </p>
            </div>
          </div>


        {/* </div> */}


       

      </div>

      </div>
    </div>
  );
};

export default Vision;
