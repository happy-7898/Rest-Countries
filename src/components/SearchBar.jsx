import React, { useEffect, useState } from 'react'


import arrow_white from '../assets/arrow_white.png'
import arrow_black from '../assets/arrow_black.png'
import { CiSearch } from "react-icons/ci";
import { useContext } from 'react';
import { context } from '../App';

const SearchBar = () => {
  const [inputValue,setInputValue]=useState("");
  const [filterValue,setFilterValue]=useState("");

  const {isDark,data,setFilteredData,filteredByRegion,loading}=useContext(context);

  function inputHandler(e){
    let value=e.target.value.toLowerCase().trim();
    setInputValue(value);
    // setInputValue(e.target.value.lowerCase.trim());
  }

  function filterHandler(e){
    setFilterValue(e.target.value);
  }

  useEffect(()=>{
    let tempData=data;

    if(filterValue){
      tempData=filteredByRegion[filterValue];
    }

    if(inputValue){
      tempData=tempData.filter(curr=>curr["name"]["common"].toLowerCase().includes(inputValue));
    }

    setFilteredData(tempData);


    
  },[inputValue,filterValue]);

  return (
    <div className={`flex flex-wrap w-[100%]  lg:px-13 md:px-6 md:justify-between md:items-center ${isDark?"bg-[var(--very-dark-blue-bg)]":"bg-[var(--very-light-gray-bg)]"}`} >
      <div className="w-[100%] px-4 py-4 relative https://restcountries.com/v3.1/all max-w-[500px] lg:px-0">
        <CiSearch className={`absolute left-6 top-6 lg:left-2 lg:top-7 ${isDark?"text-white":""}`}/>
        <input type='text' className={`shadow-[0_0_8px_0_rgba(0,0,0,0.2)] w-[100%] max-w-[600px] h-8  rounded px-7 lg:h-10 m:h-9 ${isDark?"bg-[var(--dark-blue-elements)] text-[var(--white)]":"bg-white"}`} placeholder='Search for a country' onChange={inputHandler} ></input>
      </div>

      <div className='px-4 lg:pt-4 lg:px-0 m:pt-4.5'>
        <div className="">
             <select
                className={`w-[184px] h-8 shadow-[0_0_8px_0_rgba(0,0,0,0.2)] rounded pl-4 pr-10 text-xs mb-5
                            bg-no-repeat bg-[length:0.8rem] bg-[right_0.75rem_center] appearance-none max-w-[300px] lg:h-10 m:h-9
                            ${isDark?"bg-[var(--dark-blue-elements)] text-white":""}`}
                style={{ backgroundImage: `url(${isDark?arrow_white:arrow_black})` }}
                onChange={filterHandler}>
                <option value="">Filter by Region</option>
                {
                  loading?"":
                  Object.keys(filteredByRegion).map((curr)=>(
                    <option>{curr}</option>
                  ))
                }
            </select>
            
        </div>
        
        
      </div>
    </div>
  )
}

export default SearchBar
