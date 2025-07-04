import { CiSearch } from "react-icons/ci";
import { useContext } from 'react';
import { context } from '../App';
import { useState,useEffect } from 'react';
import FilterRegion from './FilterRegion';

const SearchBar = () => {
  const [inputValue,setInputValue]=useState("");
  const [filterValue,setFilterValue]=useState("");
  const {isDark,data,setFilteredData,filteredByRegion,loading}=useContext(context);

  function inputHandler(e){
    let value=e.target.value.toLowerCase().trim();
    setInputValue(value);
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
    <div className={`flex flex-wrap w-full  lg:px-14 md:px-6 md:justify-between md:items-center ${isDark?"bg-[var(--very-dark-blue-bg)]":"bg-[var(--very-light-gray-bg)]"}`} >
      <div className="w-full px-4 py-4 relative max-w-[500px] lg:px-0">
        <CiSearch className={`absolute left-6 top-6 lg:left-2 lg:top-7 ${isDark?"text-white":""}`}/>
        <input type='text' className={`shadow-[0_0_8px_0_rgba(0,0,0,0.2)] w-full h-8  rounded px-7 lg:h-10 m:h-9 ${isDark?"bg-[var(--dark-blue-elements)] text-[var(--white)]":"bg-white"}`} placeholder='Search for a country' onChange={inputHandler} ></input>
      </div>

      <div className='px-4 lg:pt-4 lg:px-0 m:pt-4.5'>
        <FilterRegion setSelectFilter={setFilterValue}></FilterRegion>
      </div>
    </div>
  )
}

export default SearchBar
