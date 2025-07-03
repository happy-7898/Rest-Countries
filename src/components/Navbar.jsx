import React, { useContext } from 'react'
import { IoMoonOutline } from "react-icons/io5";
import { context } from '../App';

const Navbar = () => {

  const {isDark,setIsDark}=useContext(context);

  function darkModeHandler(){
    setIsDark(prev=>!prev);
  }

  return (
    <div className={`w-[100%]  flex justify-between items-center py-6 px-3 text-[16px] shadow-sm lg:px-13 lg:py-5 md:px-10 md:py-5 ${isDark?"bg-[var(--dark-blue-elements)] text-white":""}`}>
        <p className='font-bold lg:text-xl md:text-lg'>Where in the world?</p>
        <div className='flex gap-1 justify-center items-center lg:text-[20px] md:text-[17px]' onClick={darkModeHandler}>
            <IoMoonOutline className="h-[24px]"/>
            <p>Dark Mode</p>
        </div>
      
    </div>
  )
}

export default Navbar
