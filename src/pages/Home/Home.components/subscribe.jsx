import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../lotties/subscribe.json";

function Subscribe() {
  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="mx-auto container pb-10 md:pb-16 lg:pb-24 md:pt-10  flex flex-col md:flex-row items-center justify-around xl:pr-28 xl:w-[80%] w-full ">
      <div className="left flex flex-col h-auto md:h-72 lg:h-80 justify-around py-10 text-center md:text-left">
        <div className="heading font-blinker text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold">
          Subscribe to E-Cell IIIT Bhagalpur’s <span className="text-[#F9754B]">Weekly Blogs.</span>
        </div>
        <div className="ip mt-6 md:mt-16 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start w-full md:w-auto lg:w-3/4">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your e-mail"
            className="px-6 font-blinker ss:max-w-sm md:max-w-auto rounded-lg md:rounded-l-lg md:rounded-r-none h-12 md:h-14 w-full md:w-2/3 lg:w-2/3 border-2 border-black"
          />
          <button
            type="submit"
            className="h-12 ss:max-w-64 md:max-w-auto md:h-14 bg-black w-full md:w-1/3 lg:w-1/3 text-white rounded-lg md:rounded-r-lg md:rounded-l-none border-2 border-black mt-4 md:mt-0"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="right hidden md:block mt-10 md:mt-0 ml-4 md:ml-0">
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
    </div>
  );
}

export default Subscribe;
