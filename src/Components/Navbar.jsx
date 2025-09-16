import React, { useState } from "react";
import logo from "../icon/logo.png";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [hide, setHide] = useState("hidden");
  const [unhide, setUnhide] = useState("");
  const navigate = useNavigate();
  const [initiative, setInitiative] = useState(false);
  const [about, setAbout] = useState(false);
  const [resources, setResources] = useState(false);
  // const [hide, setHide] = useState("hidden");

  function clickHandler() {
    // console.log("clickHandler called"); // Add a log statement to check if clickHandler is called
    setHide("");
    setUnhide("hidden");
  }
  function exitHandler() {
    setHide("hidden");
    setUnhide("");
  }
 
  // function closeHandler(){
  //   setInitiative(false);
  //   setAbout(false);
  // }
  function inititiveHandler(){
    setInitiative(!initiative);
    
    setAbout(false);
    setResources(false);
  }
  function aboutHandler(){
    setInitiative(false);
    setResources(false);
    setAbout(!about);
  }
  function resourcesHandler(){
    setResources(!resources);
   
    setAbout(false);
    setInitiative(false);
  }
  

  return (
    <nav className="sticky top-0 big:backdrop-blur-lg  overflow-x-clip">
      {/* making changes */}
<div className="relative">
     <div  className="big:hidden opacity-0 small:opacity-100 absolute z-10">
     <div className="small:relative big:hidden opacity-0 small:opacity-100">
        <div
          className={`text-white ${unhide} backdrop-blur-md h-[10vh]  small:opacity-100 opacity-0 flex  justify-between w-[100vw]  small:p-4 small:pr-5`}
        >
          <div className="flex" onClick={()=>{navigate("/ecell/");
          }} >
            <img src={logo} className="h-[7.3vh]" alt="sample" alt="logo"></img>
            <div className="flex flex-col text-epilogue font-extrabold cursor-pointer">
              <div>E-CELL</div>
              <div>IIIT BHAGALPUR</div>
            </div>
          </div>

          <button onClick={clickHandler}>
            <IoMenu className="h-8 w-8" />
          </button>
        </div>
      </div>
      <div
        className={`big:hidden ${hide}  small:relative     text-white z-50 small:w-[100vw] small:h-[100vh]  small:backdrop-blur-sm `}
      >
        <div className="small:absolute flex justify-between  w-[100vw] small:top-0 small:right-0 small:p-4 small:pr-10">
          <button  className="flex" onClick={()=>{navigate("/ecell/");
          }}>
            <img src={logo} className="h-[7.3vh]" alt="sample"></img>
            <div className="flex flex-col font-epilogue font-extrabold cursor-pointer">
              <div>E-CELL</div>
              <div>IIIT BHAGALPUR</div>
            </div>
          </button>
          <button className="hover:text-red-500" onClick={exitHandler}>
            <IoMdClose className="h-8 w-8" />
          </button>
        </div>
        <div className=" small:p-6   small:py-20 small:pl-[72%] text-white font-comforta flex flex-col justify-around small:h-[100%]">
          <a
            href="/ecell/"
            className="text-white text-lg flex  font-comfortaa   hover: duration-250 hover:delay-75  transition-all hover:scale-110 hover:text-orange-600  hover:underline hover:ease-in  "
          >
            HOME
          </a>
          <div className={`flex flex-col ${initiative?("h-[40%]"):("")} justify-evenly `}>
            <div className="cursor-pointer group text-white text-lg flex flex-start items-center gap-x-[0.2vw] font-comfortaa   hover: duration-250 hover:delay-75  transition-all hover:scale-110 hover:text-orange-600  hover:underline hover:ease-in  "
            onClick={inititiveHandler}
            >
              <div>INITAITIVE</div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-250 ease-in-out">
                <FaChevronDown />
              </div>
            </div>
            {initiative && <div className="flex flex-col bg-[#22323A] h-[70%]  ">
              <div className=" w-full flex items-center justify-center h-full text-center cursor-pointer font-comfortaa text-[15px] font-semibold    hover: duration-250 hover:delay-75  transition-all  hover:bg-orange-600   hover:ease-in   " 
              onClick={()=>{
                navigate("/seminars");
              }} >
                SEMINARS</div>
              <div className=" w-full flex items-center justify-center h-full text-center cursor-pointer font-comfortaa text-[15px] font-semibold    hover: duration-250 hover:delay-75  transition-all  hover:bg-orange-600   hover:ease-in   "
              onClick={()=>{
                navigate("/Competitions");
              }} >
              
                
                COMPETITIONS</div>
              <div className=" w-full flex items-center justify-center h-full text-center cursor-pointer font-comfortaa text-[15px] font-semibold    hover: duration-250 hover:delay-75  transition-all  hover:bg-orange-600   hover:ease-in   "
              onClick={()=>{
                navigate("/Workshops");
              }}
              >
                WORKSHOPS</div>
            </div>}
          </div>
          {/* <div className="text-white text-lg flex  font-comfortaa   hover: duration-250 hover:delay-75  transition-all hover:scale-110 hover:text-orange-600  hover:underline hover:ease-in  ">
            ACHIEVEMENT
          </div> */}
          {/* <div className="text-white text-lg flex  font-comfortaa   hover: duration-250 hover:delay-75  transition-all hover:scale-110 hover:text-orange-600  hover:underline hover:ease-in  ">
            <a href="/Comingsoon">RESOURCES</a>
          </div> */}

          <div className={`flex flex-col ${resources?("h-[30%]"):("")} justify-evenly `}>
            <div className="cursor-pointer group text-white text-lg flex flex-start items-center gap-x-[0.2vw] font-comfortaa   hover: duration-250 hover:delay-75  transition-all hover:scale-110 hover:text-orange-600  hover:underline hover:ease-in  "
            onClick={resourcesHandler}
            >
              <div>RESOURCES</div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-250 ease-in-out">
                <FaChevronDown />
              </div>
            </div>
            {resources && <div className="flex flex-col bg-[#22323A] h-[60%]  justify-evenly">
              <div className=" w-full flex items-center justify-center h-full text-center cursor-pointer font-comfortaa text-[15px] font-semibold    hover: duration-250 hover:delay-75  transition-all  hover:bg-orange-600   hover:ease-in   "
               onClick={()=>{
                navigate("/Blogs");
              }}
              > BLOGS </div>
              <div className=" w-full flex items-center justify-center h-full text-center cursor-pointer font-comfortaa text-[15px] font-semibold    hover: duration-250 hover:delay-75  transition-all  hover:bg-orange-600   hover:ease-in   "
               onClick={()=>{
                navigate("/Gallery");
              }}
              > GALLERY </div>
             
            </div>}
          </div>



          <div className={`flex flex-col ${about?("h-[30%]"):("")} justify-evenly `}>
            <div className="cursor-pointer group text-white text-lg flex flex-start items-center gap-x-[0.2vw] font-comfortaa   hover: duration-250 hover:delay-75  transition-all hover:scale-110 hover:text-orange-600  hover:underline hover:ease-in  "
            onClick={aboutHandler}
            >
              <div>ABOUT US</div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-250 ease-in-out">
                <FaChevronDown />
              </div>
            </div>
            {about && <div className="flex flex-col bg-[#22323A] h-[60%]  justify-evenly">
              <div className=" w-full flex items-center justify-center h-full text-center cursor-pointer font-comfortaa text-[15px] font-semibold    hover: duration-250 hover:delay-75  transition-all  hover:bg-orange-600   hover:ease-in   "
               onClick={()=>{
                navigate("/meet");
              }}
              > TEAM </div>
              <div className=" w-full flex items-center justify-center h-full text-center cursor-pointer font-comfortaa text-[15px] font-semibold    hover: duration-250 hover:delay-75  transition-all  hover:bg-orange-600   hover:ease-in   ">
                <a href="#footer">CONTACT US</a></div>
             
            </div>}
          </div>
          <div className="flex justify-between pr-12">
            <a href="https://www.instagram.com/ecell_iiitbh?igsh=amVobWRleXBkMDZ3" target='_blank'>
              <AiFillInstagram className="h-6 w-6" />
            </a>
            <a href="https://x.com/EIiitbh?t=Mk8BtvFWoBWOI9zAu7g69w&s=08" target='_blank'>
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/company/entrepreneurship-club-iiit-bhagalpur/" target='_blank'>
              <BsLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
     </div>
</div>
      {/* making changes end */}

      <div className=" backdrop-blur-lg w-[100%]  grid grid-cols-9	pl-[4%] pr-[9%] py-[0.68%] opacity-0 big:opacity-100 ">
        {/* div to set logo  */}

        <div className=" flex items-center  col-span-2 cursor-pointer">
          <a href="/ecell/">
            <img src={logo} alt="sample"/>
          </a>

          <a
            href="/"
            className="text-white text-lg leading-5 items-center font-epilogue font-extrabold cursor-pointer "
          >
            E-CELL<br></br>
            IIIT BHAGALPUR
          </a>
        </div>
        <div className="col-span-2"></div>
        {/* div for items */}
        <div className="flex  justify-between col-span-5 items-center font-comfortaa">
          <div className="cursor-pointer group text-white  text-[15px] font-semibold  flex flex-start items-center gap-x-[0.2vw] font-comfortaa   hover: duration-250 hover:delay-75  transition-all hover:scale-110 hover:text-orange-600  hover:underline hover:ease-in  ">
            <div className="cursor-pointer">
              <a href="/ecell/">HOME</a>
            </div>
            {/* <div className="opacity-0 group-hover:opacity-100 transition-all duration-250 ease-in-out">
            <FaChevronDown />
            </div>  */}
          </div>
          {/* <div className="cursor-pointer group text-white  text-[15px] font-semibold flex flex-start items-center gap-x-[0.2vw] font-comfortaa   hover: duration-250 hover:delay-75  transition-all hover:scale-110 hover:text-orange-600  hover:underline hover:ease-in  ">
            
            <div>INITAITIVE</div>
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-250 ease-in-out">
            <FaChevronDown />
            </div>
          </div> */}
          <div className="group  flex flex-col text-center items-center relative">
            <div className="cursor-pointer group text-white text-[15px] font-semibold text-lg flex flex-start items-center gap-x-[0.2vw] font-comfortaa   hover: duration-250 hover:delay-75  transition-all hover:scale-110 hover:text-orange-600  hover:underline hover:ease-in  ">
              <div className="text-[15px] font-semibold">INITAITIVE</div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-250 ease-in-out">
                <FaChevronDown />
              </div>
            </div>
            <div className="bg-[#22323A] opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-250 group-hover:ease-in-out text-white absolute top-[4vh] flex flex-col justify-evenly items-center h-[23vh]   w-[200%]">
              <div
                className="cursor-pointer font-comfortaa text-[15px] font-semibold    hover: duration-250 hover:delay-75  transition-all  hover:bg-orange-600   hover:ease-in w-full h-full flex items-center justify-center"
                onClick={() => navigate("/seminars")}
              >
                SEMINARS
              </div>
              <div
                className="cursor-pointer font-comfortaa text-[15px] font-semibold    hover: duration-250 hover:delay-75  transition-all  hover:bg-orange-600   hover:ease-in w-full h-full flex items-center justify-center"
                onClick={() => navigate("/Competitions")}
              >
                COMPETETIONS
              </div>
              <div
                className="cursor-pointer font-comfortaa text-[15px] font-semibold    hover: duration-250 hover:delay-75  transition-all  hover:bg-orange-600   hover:ease-in w-full h-full flex items-center justify-center"
                onClick={() => navigate("/Workshops")}
              >
                WORKSHOPS
              </div>
            </div>
          </div>

          {/* <div className="text-white text-lg flex flex-start font-comfortaa   hover: duration-250 hover:delay-75  transition-all hover:scale-110 hover:text-orange-600  hover:underline hover:ease-in  ">
            ACHIEVEMENT
          </div> */}
          
          <div className="group  flex flex-col text-center items-center relative">
            <div className="cursor-pointer group text-white text-[15px] font-semibold text-lg flex flex-start items-center gap-x-[0.2vw] font-comfortaa   hover: duration-250 hover:delay-75  transition-all hover:scale-110 hover:text-orange-600  hover:underline hover:ease-in  ">
              <div className="text-[15px] font-semibold">RESOURCES</div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-250 ease-in-out">
                <FaChevronDown />
              </div>
            </div>
            <div className="bg-[#22323A] opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-250 group-hover:ease-in-out text-white absolute top-[4vh] flex flex-col justify-evenly items-center h-[15vh]   w-[160%]">
              <div
                className="cursor-pointer font-comfortaa text-[15px] font-semibold    hover: duration-250 hover:delay-75  transition-all  hover:bg-orange-600   hover:ease-in w-full h-full flex items-center justify-center"
                onClick={() => navigate("/Blogs")}
              >
                BLOGS
              </div>
              <div
                className="cursor-pointer font-comfortaa text-[15px] font-semibold    hover: duration-250 hover:delay-75  transition-all  hover:bg-orange-600   hover:ease-in w-full h-full flex items-center justify-center"
                onClick={() => navigate("/Gallery")}
              >
                GALLERY
              </div>
            </div>
          </div>

          <div className="group  flex flex-col text-center items-center relative">
            <div className="cursor-pointer group text-white text-[15px] font-semibold text-lg flex flex-start items-center gap-x-[0.2vw] font-comfortaa   hover: duration-250 hover:delay-75  transition-all hover:scale-110 hover:text-orange-600  hover:underline hover:ease-in  ">
              <div className="text-[15px] font-semibold">ABOUT US</div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-250 ease-in-out">
                <FaChevronDown />
              </div>
            </div>
            <div className="bg-[#22323A] opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-250 group-hover:ease-in-out text-white absolute top-[4vh] flex flex-col justify-evenly items-center h-[15vh]   w-[160%]">
              <div
                className="cursor-pointer font-comfortaa text-[15px] font-semibold    hover: duration-250 hover:delay-75  transition-all  hover:bg-orange-600   hover:ease-in w-full h-full flex items-center justify-center"
                onClick={() => navigate("/meet")}
              >
                TEAM
              </div>
              <div className="cursor-pointer font-comfortaa text-[15px] font-semibold    hover: duration-250 hover:delay-75  transition-all  hover:bg-orange-600   hover:ease-in w-full h-full flex items-center justify-center" 
             >
                <a href="#footer">CONTACT US</a>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;
