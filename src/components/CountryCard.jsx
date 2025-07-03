import React from 'react'
import { useContext } from 'react';
import { context } from '../App';
import { useNavigate } from 'react-router';

const CountryCard = ({country}) => {
  const {isDark}=useContext(context);
  const navigate=useNavigate();
  let capital=country["capital"].toLocaleString();
  capital=capital.length>15?`${capital.slice(0,15)}...`:capital;
  let name=country["name"]["common"].length>18?`${country["name"]["common"].slice(0,18)}...`:country["name"]["common"];


  function navigationHandler(){
    navigate(`/${country["name"]["common"]}`)
  }

  return (
    <div onClick={navigationHandler} className={`w-[100%] max-h-[372px] max-w-[280px] md:max-w-[276px] lg:max-w-[272px] flex flex-col gap-4  rounded-md pb-10 shadow-sm
    ${isDark?"bg-[var(--dark-blue-elements)] text-white":"bg-white"}`}>
      <img src={country["flags"]["png"]} className='rounded-t-md h-[172px] w-[100%] object-fill'></img>
      <p className='ml-4 font-[600] '>{name.slice(0,20)}</p>

      <div className='ml-4 text-[18px] font-[300]'>
        <p>Population : <span className='text-[16px] font-extralight'>{country["population"].toLocaleString()}</span></p>
        <p>Region : <span className='text-[16px] font-extralight'>{country["region"]}</span></p>
        <p>Captial : <span className='text-[16px] font-extralight'>{capital}</span></p>
      </div>
    </div>
  )
}

export default CountryCard
