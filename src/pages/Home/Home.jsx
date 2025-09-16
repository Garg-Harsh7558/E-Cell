
import React,{useRef} from 'react';
import Navbar from '../../Components/Navbar';
import i1 from '../../icon/image.png';
import Vision from './Home.components/vision'
import HeroSection from './Home.components/HeroSection'
import About from './Home.components/About';
import FooterSection from '../../Components/FooterSection';
import bgimage from '../../icon/bgimage2.png'
import WhatIsEcell from './Home.components/WhatIsEcell'
import ThoughtOnEcell from './Home.components/ThoughtOnEcell';
import Collab from './Home.components/Collab';
import OurGallery from './Home.components/OurGallery'
import Subscribe from './Home.components/subscribe';

const Home =()=>
{
const targetRef = useRef()
  const mystyle = {
    backgroundImage: `url(${i1})`,
    height: "100vh",
    backgroundSize: "cover",
  };
  const scrollpage = {
    backgroundImage: `url(${bgimage})`,
    backgroundAttachment: "fixed",
  }
  return (
    <>
    
   <div className='  ' style={mystyle}>
   <Navbar className=" backdrop-blur-xl sticky z-50"/>
   <HeroSection targetRef = {targetRef}/>
   </div>
   <div className='' style={scrollpage}>
    <WhatIsEcell ref= {targetRef}/>
   <Vision/>
   <OurGallery/>
   <Collab/>
   <ThoughtOnEcell/>
   <About/>
  
   <Subscribe/>
   </div>
   <FooterSection/>
    </>
  )
}
export default Home;