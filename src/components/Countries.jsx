import CountryCard from './CountryCard'
import { useContext } from 'react';
import { context } from '../App';
import Loader from './Loader';

const Countries = () => {
  const {isDark,loading,filteredData}=useContext(context);

  return (
    <div className={`w-full px-9 py-4  flex justify-center flex-wrap gap-8 pb-20 lg:gap-x-[5.7%] lg:gap-y-14 lg:px-12.5 lg:justify-center m:gap-x-[5.7%] m:gap-y-12
      2xl:gap-12 ${isDark?"bg-[var(--very-dark-blue-bg)]":"bg-[var(--very-light-gray-bg)]"} ${loading?"justify-center items-center ":""}`}>
        {loading?<Loader />:
          (
            filteredData.map((curr,index)=>{
              return <CountryCard key={index} country={curr}/>
            })
          )
        }
    </div>
  )
}

export default Countries
