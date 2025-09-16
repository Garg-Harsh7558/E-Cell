import React from "react";
import Profile from "../../../icon/leadPicture.png";
import Linkedin from "../../../icon/LinkedInBlack.png";
import Email from "../../../icon/EmailBlack.png";
import Up from "../../../icon/CommaUp.png";
import Down from "../../../icon/CommaDown.png";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  return (
    <div className="lead  py-8 md:mx-14">
      <div className="leadHeading text-3xl ss:text-4xl md:text-5xl lg:text-6xl font-bold text-center py-6 px-3 font-blinker">
        FROM OUR{" "}
        <span className="eCell text-[#F9754B] ">
          E-CELL'S
        </span>{" "}
        LEAD
      </div>
      <div className="leadbottom  px-5 flex flex-wrap items-center justify-center space-x-0">
        <div className="pictures text-center">
          <div className="picture flex flex-col items-center">
            <img src={Profile} alt="#" className="sm:h-auto sm:w-60 w-52" />
            <span className="leadName text-xl font-blinker ">Aman Raj</span>
            <span className="leadName font-blinker">Entrepreneurship Cell Secretary</span>
            <div className="socials flex flex-row items-center my-3">
              <a href="https://www.linkedin.com/in/aman-raj-804858208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <img src={Linkedin} alt="" />
              </a>
              <a href="#">
                <img src={Email} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="right flex flex-col w-4/5 text md:py-0 lg:py-8 px-0 hs:px-14 items-center">
          <div className="upp w-full">
            <img src={Up} alt="" className="upComma sm:w-24 h-auto w-16" />
          </div>
          <div className="quote px-0 lg:px-28 text-justify font-blinker ss:text-lg md:text-xl">
            As the E-Cell secretary at IIIT Bhagalpur, I'm excited to announce
            our upcoming plans: workshops, mentorship programs, hackathons, and
            networking events to ignite your entrepreneurial spirit. We'll also
            offer incubation support and forge key collaborations to help turn
            your ideas into thriving startups.
          </div>
          <div className="downn w-full flex justify-end">
            <img src={Down} alt="" className="downComma sm:w-24 h-auto w-16" />
          </div>
          <div className="team mt-4">
          <button className="bg-black text-white rounded-full py-3 px-4 w-48 border-2 hover:bg-[#f9754b] transition duration-300 " onClick={()=>{
              navigate("/meet");
          }} >
              Meet Our Team
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
