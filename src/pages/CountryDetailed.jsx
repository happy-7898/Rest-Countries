import React, { useContext,useEffect } from "react";
import Navbar from "../components/Navbar";
import CountryDetail from "../components/CountryDetail";
import { GoArrowLeft } from "react-icons/go";
import { context } from "../App";
import { useNavigate, useParams } from "react-router";


const CountryDetailed = () => {
    const {isDark}=useContext(context);
    let params=useParams();
    let countryName=params.countryName;
    const navigate=useNavigate();

  function navigationHandler(){
    navigate("/");
  }

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className={`py-7 px-6 relative lg:px-14 lg:py-12 md:px-11 ${isDark?"bg-[var(--very-dark-blue-bg)]":"bg-[var(--very-light-gray-bg)]"}`}>
        <GoArrowLeft className={`absolute text-xl left-10 top-8 lg:left-18 lg:top-13 md:left-14 ${isDark?"text-white":""}`} />
        <button onClick={navigationHandler} className={`w-23 h-7 pl-5.5 shadow-[0_0_8px_0_rgba(0,0,0,0.2)] ${isDark?"bg-[var(--dark-blue-elements)] text-white":""}`}>
          Back
        </button>
      </div>
      <CountryDetail countryName={countryName}></CountryDetail>
    </div>
  );
};

export default CountryDetailed;
