import React, { useContext, useEffect, useState } from "react";
import { context } from "../App";
import Loader from "./Loader";
import { useNavigate } from "react-router";

const CountryDetail = ({ countryName }) => {
  const { loading, isDark, countryData,shortNames } = useContext(context);
  let country;
  let nativeName;
  let currencies;
  let languages;
  const navigate=useNavigate();

  if (!loading) {
    country = countryData.get(countryName);
    nativeName = Object.keys(country["name"]["nativeName"]);
    nativeName = country["name"]["nativeName"][nativeName[0]]["official"];
    currencies =
      country["currencies"][Object.keys(country["currencies"])[0]]["name"];
    languages = Object.keys(country["languages"])
      .map((curr) => country["languages"][curr])
      .join(",");
    console.log(shortNames)
  }

  

  return (
    <div className={`min-h-[100vh] w-[100%] px-6 py-6 flex flex-col items-center lg:py-0 lg:px-[5%] lg:h-[80vh] md:px-11
      ${
        isDark
          ? "bg-[var(--very-dark-blue-bg)] text-white"
          : "bg-[var(--very-light-gray-bg)]"
      } ${loading ? "items-center lg:h-[600px]" : ""}`}
    >

    {loading ? (
        <Loader></Loader>
      ) : (
        <div className=" h-[100%] w-[100%] max-w-[450px] md:max-w-[600px] lg:max-w-[1300px] lg:flex lg:gap-18 lg:w-[100%] lg:h-[450px] md:gap-12  2xl:gap-30 2xl:max-w-[1400px] ">
          <div className=" flex justify-center mb-6 lg:w-[48%] md:w-[100%]">
            <img
              src={country["flags"]["svg"]}
              className="w-[100%] max-w-[450px] md:w-[100%] md:h-[100%] md:object-contain md:max-w-[600px] lg:w-full lg:h-full  lg:object-contain lg:max-w-[560px]"
            ></img>
          </div>

          <div className="flex flex-col gap-5 lg:w-[55%] lg:mt-10 md:gap-6 md:w-[100%]">
            <div>
              <p className="text-xl font-[900] lg:text-2xl">
                {country["name"]["common"]}
              </p>
            </div>
            <div className="flex flex-col gap-8 pb-4 text-sm lg:flex-row lg:justify-between md:flex-row md:gap-7 md:pb-1">
              <div className="lg:flex lg:flex-col lg:gap-1">
                <p>
                  Native Name:<span className="text-[16px] font-extralight"> {nativeName}</span>
                </p>
                <p>
                  Population:
                  <span className="text-[16px] font-extralight"> {country["population"].toLocaleString()}</span>
                </p>
                <p>
                  Region:<span className="text-[16px] font-extralight"> {country["region"]}</span>
                </p>
                <p>
                  Sub Region:<span className="text-[16px] font-extralight"> {country["subregion"]}</span>
                </p>
                <p>
                  Capital:<span className="text-[16px] font-extralight"> {country["capital"]}</span>
                </p>
              </div>

              <div className="lg:flex lg:flex-col lg:gap-1">
                <p>
                  Top Level Domain:<span className="text-[16px] font-extralight"> {country["tld"]}</span>
                </p>
                <p>
                  Currencies:<span className="text-[16px] font-extralight"> {currencies}</span>
                </p>
                <p>
                  Languages:<span className="text-[16px] font-extralight"> {languages}</span>
                </p>
              </div>
            </div>
            {/* {
            country["boundries"]?
          } */}

            {
              country["borders"].length>0?(
                <div className="flex flex-wrap flex-col gap-4 lg:flex-row lg:w-[100%] lg:py-5 md:gap-2">
                  <p className="font-[600] ">Border Countries: </p>

                  <div className="flex flex-wrap gap-2 lg:w-[70%]">
                    {
                      country["borders"].map((curr,index)=>{
                        return <p
                                  key={index} className={`text-xs flex justify-center items-center w-[30%] h-7 shadow-[0_0_8px_0_rgba(0,0,0,0.2)] rounded-sm md:max-w-[165px]
                                  ${isDark ? "bg-[var(--dark-blue-elements)]" : ""}`} onClick={()=>navigate(`/${shortNames.get(curr)}`)}
                                  >
                                  {shortNames.get(curr)}
                                </p>
                      })
                    }
                    
                  </div>
                </div>
              ):(null)
            }
            
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;
