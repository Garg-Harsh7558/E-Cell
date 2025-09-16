import React from "react";
import Lottie from "react-lottie";
import seminarsAnimation from "../../../lotties/Seminars.json";
import seminar1 from "../../../icon/seminars1.png";
import seminar2 from "../../../icon/seminars 2.png";
import seminar3 from "../../../icon/seminars3.png";
import seminar4 from "../../../icon/seminars4.png";
import seminar5 from "../../../icon/seminars5.png";
import seminar6 from "../../../icon/seminars6.png";
import seminar7 from "../../../icon/seminars7.png";
import seminar8 from "../../../icon/seminars8.png";
import seminar9 from "../../../icon/seminars9.png";
import Navbar from "../../../Components/Navbar";
// import Footer from "../../../Components/FooterSection";
import FooterSection from "../../../Components/FooterSection";

const Seminars = () => {
  const seminars = {
    loop: true,
    autoplay: true,
    animationData: seminarsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="bg-[rgba(5,18,25,1)] w-full h-full overflow-x-clip">
      <Navbar />
      <div className="small:hidden">
        <div className="text-white px-[5vw] flex flex-col justify-center items-center mt-[5vh]">
          <h1 className="text-[#EEEEEE] font-bold tracking-[4%] font-blinker text-[60px]">
            <span className="text-[#F9754B]">SEMINARS</span> AT E-CELL
          </h1>
          <div className="flex justify-center items-center w-full mt-[12vh] ">
            <div className=" h-full w-full flex items-center justify-center">
              <div className="w-[30vw]  ">
                <Lottie options={seminars} className="" />
              </div>
            </div>
            <p className="font-blinker tracking-[2%] leading-[33px] space-x-[10px] w-full text-xl h-full ">
            E-Cell seminars offer in-depth exploration of key topics in entrepreneurship and innovation. With presentations from accomplished entrepreneurs, industry experts, and thought leaders, these events cover startup growth, funding strategies, market trends, and leadership skills. Attendees gain valuable insights, practical advice, and strategies to enhance their ventures, complemented by interactive discussions and real-world case studies.
        <br/>
        <br/>
These seminars also create valuable networking opportunities, allowing participants to connect with professionals and peers in the industry. By engaging in meaningful conversations and exploring industry best practices, attendees leave inspired and well-equipped to tackle entrepreneurial challenges and seize new opportunities.
            </p>
          </div>
        </div>
      </div>
      {/* Mobile screen below */}
      <div className="big:hidden">
        <div className="text-white px-[5vw] flex flex-col justify-center items-center mt-[0vh]">
          <h1 className="text-[#EEEEEE] font-bold tracking-[4%] font-blinker text-[40px]">
            <span className="text-[#F9754B]">SEMINARS</span> AT E-CELL
          </h1>
          <div className="flex flex-col justify-center items-center w-full mt-[5vh] ">
            <p className="font-blinker tracking-[2%] leading-[28px] space-x-[10px] w-full  h-full text-lg">
              Seminars at E-Cell are informative sessions that delve into
              critical topics related to entrepreneurship and business
              innovation. These events feature guest speakers, industry experts,
              and successful entrepreneurs who share their experiences,
              strategies, and insights. Seminars cover a wide range of subjects,
              including startup growth, funding, market trends, and leadership.
              Attendees gain valuable knowledge, practical advice, and
              inspiration, while also having the opportunity to engage in
              discussions and network with professionals in the field.
            </p>
            <div className=" h-full w-full flex  items-center justify-center">
              <div className="w-[60vw]  ">
                <Lottie options={seminars} className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile view end */}

      <div className=" flex small:hidden  justify-center mt-[15vh]">
        <h1 className="text-[#EEEEEE] font-bold tracking-[4%] font-blinker text-[60px]">
          PREVIOUS <span className="text-[#F9754B]">SPEAKERS</span>{" "}
        </h1>
      </div>
      {/* mobile view start below */}
      <div className="flex big:hidden  justify-center mt-[15vh]">
        <h1 className="text-[#EEEEEE] font-bold tracking-[4%] font-blinker text-[40px]">
          PREVIOUS <span className="text-[#F9754B]">SPEAKERS</span>{" "}
        </h1>
      </div>

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center lg:mt-[15vh] md:mt-[10vh] mt-[5vh]   px-[8vw]  gap-x-[2vw] gap-y-[10vh]">
        <img
          src={seminar1}
          className="transition-all duration-300 hover:z-10 hover:scale-[107%] hover:shadow-lg"
          alt="sample"
        />

        <img
          src={seminar2}
          className="transition-all duration-300 hover:z-10 hover:scale-[107%] hover:shadow-lg"
          alt="sample"
        ></img>
        <img
          src={seminar3}
          className="transition-all duration-300 hover:z-10 hover:scale-[107%] hover:shadow-lg"
          alt="sample"
        ></img>
        <img
          src={seminar4}
          className="transition-all duration-300 hover:z-10 hover:scale-[107%] hover:shadow-lg"
          alt="sample"
        ></img>
        <img
          src={seminar5}
          className="transition-all duration-300 hover:z-10 hover:scale-[107%] hover:shadow-lg"
          alt="sample"
        ></img>
        <img
          src={seminar6}
          className="transition-all duration-300 hover:z-10 hover:scale-[107%] hover:shadow-lg"
          alt="sample"
        ></img>
        <img
          src={seminar7}
          className="transition-all duration-300 hover:z-10 hover:scale-[107%] hover:shadow-lg"
          alt="sample"
        ></img>
        <img
          src={seminar8}
          className="transition-all duration-300 hover:z-10 hover:scale-[107%] hover:shadow-lg"
          alt="sample"
        ></img>
        <img
          src={seminar9}
          className="transition-all duration-300 hover:z-10 hover:scale-[107%] hover:shadow-lg"
          alt="sample"
        ></img>
      </div>
      <div className="mt-[25vh]">
        <FooterSection />
      </div>
    </div>
  );
};

export default Seminars;
