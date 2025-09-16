import React from "react";
import logo from "../icon/logoFooter.png";
import Instagram from "../icon/Instagram.png";
import LinkedIn from "../icon/LinkedIn.png";
import TwitterX from "../icon/TwitterX.png";
import footerBg from "../icon/footerBg.png";
import corner from "../icon/footerCornerImg.png";
import cornerRight from "../icon/footerBottomRight.png";
import CopyEmailButton from '../../src/pages/Home/Home.components/CopyEmail';

function FooterSection() {
  return (
    <>
      <footer id="footer"
        className=" relative px-4 py-8 m-auto bg-black bg-cover bg-center"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <div className="upp flex shrink">
          <div className="upleft flex flex-wrap xl:w-[50%]">
            <div className=" logo pr-1.5 flex">
              <img
                src={logo}
                alt=""
                className="sm:h-36 h-20 pr-2.5"
              />
              <vr className="border-l-2 sm:h-36 h-20"></vr>
            </div>
            <div className="info w-[63%] ss:w-[72%] md:pl-3 sm:w-3/5 md:mt-2.5">
              <div className="collegeNam font-inter text-white font-extrabold md:text-xl">
                Indian Institute of Information Technology (IIIT) BHAGALPUR
              </div>
              <div className="hidden md:block">
                <br></br> <br></br>
                
              </div>
              <a href="www.iiitbh.ac.in" className="site font-blinker text-white mt-2">
                www.iiitbh.ac.in
              </a>
              <div className="hidden md:block">
                <br></br>
              </div>
              <div className="address text-white font-blinker">
                Indian Institute of Information Technology Bhagalpur (IIIT)
                BHAGALPUR Sabour, Bhagalpur Pin-813210
              </div>
            </div>
          </div>
          <div className="upright hidden xl:block footQuote w-1/3 text-2xl text-white text-center font-extrabold xl:w-[50%] j">
            <div className="flex flex-col">
              <div className="image absolute bottom-[50%] w-[30%] h-auto right-[6%] p-2">
                <img src={cornerRight} alt="" />
              </div>
              <div className="absolute z-100 contactText w-[40%] right-[1%] mt-40 text-center">
                <div className="inner">
                  <div className="text-5xl w-26 font-blinker">STILL HAVE ANY QUERIES?</div>
                  <div className="text-5xl font-blinker">
                    WE ARE HERE FOR
                    <span className="text-[#F9754B]"> YOU!!!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="downn pt-2">
          <div className="connect text-white font-extrabold py-2 text-center">
            CONNECT WITH US :
          </div>
          <div className="flex justify-center items-center">
            <a href="https://www.instagram.com/ecell_iiitbh?igsh=amVobWRleXBkMDZ3">
              <img src={Instagram} alt="" />
            </a>
            <a href="https://www.linkedin.com/company/entrepreneurship-club-iiit-bhagalpur/">
              <img src={LinkedIn} alt="" />
            </a>
            <a href="https://x.com/EIiitbh?t=Mk8BtvFWoBWOI9zAu7g69w&s=08">
              <img src={TwitterX} alt="" />
            </a>
              <span className="text-white"><CopyEmailButton  email="aman.2101214ec@iiitbh.ac.in" /></span>
          </div>
        </div>
        <div className=" hidden lg:block absolute bottom-0 left-0">
          <img src={corner} alt="Corner" className="w-64 h-auto z-10" />
        </div>
      </footer>
    </>
  );
}

export default FooterSection;
