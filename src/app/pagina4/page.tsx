'use client'


import { useState, useEffect } from 'react';

export default function Page4() {


  return (
    <div className=" w-400 h-full select-none overflow-y-hidden overflow-x-auto">   
    <div className='absolute mt-155 w-full '>
      <button className='ml-30 
      w-70 h-10 bg-[#8d5700] text-white rounded-[6px] text-[20px] p-0 m-0 leading-none
      cursor-pointer transition-colors duration-300 hover:bg-orange-900 '
      >⏷CLICK⏷</button>
    </div>

    <div className='absolute mt-55 w-full '>
      <button className='ml-375 
      w-20 h-70 bg-[#00388d] border-red-500 text-white rounded-[6px] text-[20px] p-0 m-0 leading-none
      cursor-pointer transition-colors duration-300 hover:bg-blue-500 '
      >⏵<br></br><br></br>CLICK<br></br><br></br>⏵</button>
    </div>
    

      <img
        src="/sala-fnaf2.webp"
        alt="Sala de segurança"
        className=" z-[1] "
      />
    </div>
    
  );
}

