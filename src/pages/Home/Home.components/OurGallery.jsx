import React from 'react';
import OurGallery1 from "../../../icon/OurGallery1.png";
import OurGallery2 from "../../../icon/OurGallery2.png";
import OurGallery3 from "../../../icon/OurGallery3.png";
import OurGallery4 from "../../../icon/OurGallery4.png";
import OurGallery5 from "../../../icon/OurGallery5.png";
import OurGallery6 from "../../../icon/OurGallery6.png";
import GalleryBack from "../../../icon/gallerybg.png";
import './Gall.css'; // Import your CSS file

function OurGallery() {
    return (
        <div className='h-auto w-auto px-[10%] pb-[10%] bg-cover font-blinker bg-center'
            style={{ backgroundImage: `url(${GalleryBack})` }}>
            <div>
                <h1 className='flex justify-center lg:text-6xl md:text-5xl small:text-3xl font-bold my-8 py-10 small:py-6 small:my-1'>
                    <h1 className='text-[#e9e1e1]'>OUR &nbsp;</h1>
                    <h1 className='text-[#f9744b]'> GALLERY</h1>
                </h1>
            </div>
            <div className='text-center text-xl tracking-widest justify-center large:mx-56 large:mb-16 text-[#c5b9b9] small:text-sm'>
                "Glimpses of Unforgettable moments unfold when aspiring entrepreneurs, industry experts, and innovators come together to inspire and learn from one another."
            </div>
            {/* images starts here---------------------------------- */}

            <div className='pt-[10%] gap-[1.5%]'>

                {/* img 1 and 2 */}
                <div className='items-start justify-center flex gap-[1.5%]'>
                    <div className='image-wrapper'>
                        <img src={OurGallery1} alt="" />
                        <div className='shine'></div>
                    </div>
                    <div className='image-wrapper'>
                        <img src={OurGallery2} alt="" />
                        <div className='shine'></div>
                    </div>
                </div>

                {/* img 3 and 4 */}
                <div className='items-end justify-center flex -mt-[17.3%] gap-[1.5%]'>
                    <div className='flex items-start gap-[3%]'>
                        <div className='image-wrapper'>
                            <img src={OurGallery3} alt="" />
                            <div className='shine'></div>
                        </div>
                        <div className='-mr-[1%] image-wrapper'>
                            <img src={OurGallery4} alt="" />
                            <div className='shine'></div>
                        </div>
                    </div>

                    {/* img 5 and 6 */}
                    <div className='flex item-start -ml-[26.5%] gap-[2%]'>
                        <div className='image-wrapper'>
                            <img src={OurGallery5} alt="" />
                            <div className='shine'></div>
                        </div>
                        <div className='image-wrapper'>
                            <img src={OurGallery6} alt="" />
                            <div className='shine'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurGallery;
