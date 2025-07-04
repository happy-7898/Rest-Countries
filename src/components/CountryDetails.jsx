import { useContext } from "react";
import { context } from "../App";
import Loader from "./Loader";
import CountryFlag from "./CountryFlag";
import CountryInfoSection from "./CountryInfoSection";
import BorderCountries from "./BorderCountries";

const CountryDetail = ({ countryName }) => {
  const { loading, isDark, countryData, shortNames } = useContext(context);
  let country, nativeName, currencies = "", languages;

  if (!loading) {
    country = countryData.get(countryName);
    const nativeKey = Object.keys(country.name.nativeName)[0];
    nativeName = country.name.nativeName[nativeKey]?.official || "N/A";
    const currencyKeys = Object.keys(country.currencies || {});
    currencies = currencyKeys.length ? country.currencies[currencyKeys[0]].name : "N/A";
    languages = Object.values(country.languages || {}).join(", ");
  }

  return (
    <div
      className={`w-full px-6 py-6 flex flex-col items-center lg:py-0 lg:px-[5%]  md:px-11 ${
        isDark
          ? "bg-[var(--very-dark-blue-bg)] text-white"
          : "bg-[var(--very-light-gray-bg)]"
      }`}
    >
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full max-w-[450px] md:max-w-[600px] lg:max-w-[1600px] lg:flex lg:gap-18 lg:h-full md:gap-12 2xl:gap-30 ">
          <CountryFlag flagUrl={country.flags.png} />
          <div className="flex flex-col gap-5 md:gap-6 md:w-full max-w-[750px]">
            <CountryInfoSection
              country={country}
              nativeName={nativeName}
              currencies={currencies}
              languages={languages}
            />
            <BorderCountries
              borders={country.borders}
              shortNames={shortNames}
              isDark={isDark}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;
