import { createContext, useEffect, useState } from "react";
import { fetchData, fetchShortNames } from "./utils/fetchData";
import CountryDetailed from "./pages/CountryDetailsPage.jsx";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router";
import { filterByRegion } from "./utils/filterByRegion.js";
import { countryDetails } from "./utils/countryDetails.js";
import { mapShortNames } from "./utils/mapShortNames.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:countryName",
    element: <CountryDetailed />,
  },
]);

const context = createContext();

const App = () => {
  const [data,setData]=useState(null);
  const [isDark,setIsDark]=useState(true);
  const [filteredData,setFilteredData]=useState(null);
  const [filteredByRegion,setFilteredByRegion]=useState(null);
  const [loading,setLoading]=useState(true);
  const [countryData,setCountryData]=useState(null);
  const [shortNames,setShortNames]=useState(null);

  const contextValues={
    data,
    isDark,
    setIsDark,
    setFilteredData,
    loading,
    filteredData,
    filteredByRegion,
    countryData,
    shortNames,
  };

  useEffect(() => {
    Promise.all([fetchData(),fetchShortNames()])
      .then(([countries,shortCountryNames])=>{
        setData(countries);
        setFilteredData(countries);
        setFilteredByRegion(filterByRegion(countries));
        setCountryData(countryDetails(countries));
        setShortNames(mapShortNames(shortCountryNames));
        setLoading(false);
      })
      .catch((e)=>console.log(e));
  }, []);

  return (
    <context.Provider value={contextValues}>
      <RouterProvider router={router} />
    </context.Provider>
  );
};

export default App;
export { context };
