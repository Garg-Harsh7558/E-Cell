import React, { useState } from 'react';
import Navbar from '../../../Components/Navbar';
import FooterSection from '../../../Components/FooterSection';
import Stock from "../../../icon/Stock.png";
import BrandwarImage from "../../../icon/Brandwar.png";
import Ideastorm from "../../../icon/Ideastorm.png";
import HiringImage from "../../../icon/Hiring.png";
import animationData from "../../../lotties/Competitions.json";
import Lottie from 'react-lottie';
import IdeaCard from './Ideacard.jsx'; // Import the IdeaCard component
import Brandwar from './Brandwar.jsx'; // Import the Brandwar component
import Virstock from './virstock.jsx'; // Import the Virstock component
import Hiring from './Hiring.jsx'; // Import the Hiring component

function Competitions() {
    const [isIdeaCardVisible, setIsIdeaCardVisible] = useState(false);
    const [isBrandwarVisible, setIsBrandwarVisible] = useState(false);
    const [isVirstockVisible, setIsVirstockVisible] = useState(false);
    const [isHiringVisible, setIsHiringVisible] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const openIdeaCard = () => {
        setIsIdeaCardVisible(true);
    };

    const closeIdeaCard = () => {
        setIsIdeaCardVisible(false);
    };

    const openBrandwar = () => {
        setIsBrandwarVisible(true);
    };

    const closeBrandwar = () => {
        setIsBrandwarVisible(false);
    };

    const openVirstock = () => {
        setIsVirstockVisible(true);
    };

    const closeVirstock = () => {
        setIsVirstockVisible(false);
    };

    const openHiring = () => {
        setIsHiringVisible(true);
    };

    const closeHiring = () => {
        setIsHiringVisible(false);
    };

    return (
        <div className="wrap bg-[rgba(5,18,25,1)] relative w-full h-full overflow-x-clip ">
            <div className=" w-full h-full" ><Navbar /></div>
            {/* absolute top-0 z-10 */}
            <div className="competitions md:pt-[5vh] mx-8 md:mx-0 md:py-8">
                <div className="compintro mb-6">
                    <div className="text-4xl md:text-5xl text-white font-blinker font-bold text-center mx-2 mb-4">
                        <span className='text-[#F9754B]'>COMPETITIONS</span> HELD BY <span className='text-[#F9754B]'>E-CELL</span>
                    </div>
                </div>
                <div className="descp flex flex-wrap px-2 mx-auto items-center text-justify justify-center md:space-x-3 lg:space-x-6 ">
                    <div className="summary order-2 text-white md:w-2/5 lg:w-6/10 font-blinker lg:text-xl">
                    Events at E-Cell are meticulously crafted to provide a comprehensive and enriching experience for the entrepreneurial community. These events include interactive workshops, insightful seminars, competitive pitch contests, and dynamic networking sessions. Each event offers valuable learning opportunities, featuring industry experts, successful entrepreneurs, and thought leaders who share their knowledge and experiences. Attendees gain practical skills, strategic insights, and inspiration to advance their ventures. The workshops provide hands-on learning experiences, while seminars delve into current trends and challenges in the entrepreneurial world.
                        <br></br><br></br>
                        Additionally, E-Cell events facilitate meaningful connections among participants. Networking sessions and pitch contests provide platforms for attendees to present their ideas, receive feedback, and engage in constructive discussions, fostering a collaborative environment where ideas can flourish.
                    </div>
                    <div className=" w-auto order-1 md:order-3 hidden md:block">
                        <Lottie options={defaultOptions} height={400} width={400} />
                    </div>
                </div>
                <div className="intro z-20 mt-8 sm:mt-12">
                    <div className="text-4xl md:text-5xl text-[#F9754B] font-blinker font-bold text-center mb-8">INITIATIVES</div>
                    <div className="flex flex-wrap mx-auto space-y-4 mm:space-y-0 align-center justify-center mm:justify-around mb-8 lg:justify-around lg:w-4/6 xl:w-3/5 ">
                        <a href='#' className="ideastorm w-80 cursor-pointer" onClick={openIdeaCard}>
                            <img src={Ideastorm} alt="Ideastorm" className='transform transition-transform duration-300 ease-in-out hover:scale-105 mm:mb-8 lg:w-100%' />
                        </a>
                        <a href='#' className="brandwar w-80 cursor-pointer" onClick={openBrandwar}>
                            <img src={BrandwarImage} alt="Brandwar" className='transform transition-transform duration-300 ease-in-out hover:scale-105 lg:w-100%' />
                        </a>
                        <a href='#' className="recruit w-80 cursor-pointer" onClick={openVirstock}>
                            <img src={Stock} alt="Recruit" className='transform transition-transform duration-300 ease-in-out hover:scale-105 lg:w-100%' />
                        </a>
                        <a href='#' className="vs w-80 cursor-pointer" onClick={openHiring}>
                            <img src={HiringImage} alt="VS" className='transform transition-transform duration-300 ease-in-out hover:scale-105 lg:w-100%' />
                        </a>
                    </div>
                </div>
            </div>
            <FooterSection />
            <IdeaCard isVisible={isIdeaCardVisible} onClose={closeIdeaCard} />
            <Brandwar isVisible={isBrandwarVisible} onClose={closeBrandwar} />
            <Virstock isVisible={isVirstockVisible} onClose={closeVirstock} />
            <Hiring isVisible={isHiringVisible} onClose={closeHiring} />
        </div>
    );
}

export default Competitions;
