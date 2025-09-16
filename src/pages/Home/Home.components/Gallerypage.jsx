import React from 'react'
import Navbar from '../../../Components/Navbar'
import OurGallery from './OurGallery'
import FooterSection from '../../../Components/FooterSection'

const Gallerypage = () => {
  return (
    <div className='w-full min-h-[100vh] bg-[#051219] relative overflow-x-hidden'>
      <div className=' absolute w-full z-10'><Navbar/></div>
      <div className='pt-[8vh]'>
        <OurGallery/>
      </div>
      <div>
        <FooterSection/>
      </div>
    </div>
  )
}

export default Gallerypage
