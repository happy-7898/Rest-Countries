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
    <div onClick={navigationHandler} className={`w-full max-h-[372px] max-w-[280px] md:max-w-[276px] lg:max-w-[272px] flex flex-col gap-4  rounded-md pb-10 shadow-sm
      2xl:h-80 2xl:w-60 2xl:max-h-none 2xl:max-w-none
    ${isDark?"bg-[var(--dark-blue-elements)] text-white":"bg-white"}`}>
      <img src={country["flags"]["png"]} className='rounded-t-md h-[172px] w-[100%] object-fill'></img>
      <p className='ml-4 font-bold '>{name.slice(0,20)}</p>

      <div className='ml-4 text-sm font-semibold'>
        <p>Population : <span className='font-extralight'>{country["population"].toLocaleString()}</span></p>
        <p>Region : <span className='font-extralight'>{country["region"]}</span></p>
        <p>Captial : <span className='font-extralight'>{capital}</span></p>
      </div>
    </div>
  )
}

export default CountryCard
