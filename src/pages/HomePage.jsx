import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import CountriesCard from '../components/CountriesCard'
import { context } from '../App'
import Loader from '../components/Loader'


const HomePage = () => {
    const {data,isDark}=useContext(context);

  return (
    <div>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <CountriesCard></CountriesCard>
      
    </div>
  )
}

export default HomePage
