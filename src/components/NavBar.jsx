import { useContext } from "react";
import { IoMoonOutline,IoMoon } from "react-icons/io5";
import { context } from "../App";

const Navbar = () => {
  const { isDark,setIsDark }=useContext(context);

  function darkModeHandler() {
    setIsDark(prev=>!prev);
  }

  return (
    <div className={`w-full flex justify-between items-center py-6 px-3 text-xs shadow-sm lg:px-14 lg:py-5  md:px-10 md:py-5 ${isDark?"bg-[var(--dark-blue-elements)] text-white":""}`}>
      <p className='font-bold lg:text-xl md:text-lg'>Where in the world?</p>
      <div className='flex gap-1 justify-center items-center lg:text-base md:text-base' onClick={darkModeHandler}>
        {isDark?<IoMoon /> :<IoMoonOutline />}
        <p>{isDark?"Light Mode":"Dark Mode"}</p>
      </div>
    </div>
  );
};

export default Navbar;
