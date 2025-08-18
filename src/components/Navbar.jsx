import React from 'react'
import { FaReact } from "react-icons/fa";

function Navbar({ onGoHome }) {
  return (
    <>
    <div className='flex sm:space-x-8 w-scrren space-x-9 text-white opacity-80 '>
      
        <div className='cursor-pointer' onClick={onGoHome}>HOME</div>
        <div className='cursor-pointer '>ABOUT</div>
        <div className='cursor-pointer'>SERVICES</div>
        <div className='cursor-pointer'>DOCS</div>
        <div className='w-fit hidden lg:flex ml-94 bottom-4 relative bg-black/20 text-white rounded-xl border border-white/10 shadow-lg p-2 px-4 gap-1.5 items-center justify-center'>
        <FaReact size={30} className="text-blue-400" />
  <h1 className='text-[13px]'>Built with <br /> React</h1>
  </div>
    </div>
    </>
  )
}

export default Navbar
