import React from 'react';
import CollabImage from '../../../icon/Collab.png'; 

const Collab = () => {
  return (
    <div className="collab-container text-center p-4">
      <div className='md:flex justify-center lg:text-6xl md:text-5xl font-bold py-[6%] small:text-3xl font-blinker'>
        <div >OUR <span className='text-[#F9754B]'>COLLABORATIONS </span></div>
      {/* <div className='text-[#F9754B]'>COLLABORATIONS</div> */}
      </div>
      <div className='flex items-center justify-center '>
      <img src={CollabImage} alt='Collab'  className=" w-full sm:w-2/3 md:w-3/4 lg:w-[90%] h-auto sm:pb-12 pb-2" />
      </div>
    </div>
  );
};

export default Collab;
