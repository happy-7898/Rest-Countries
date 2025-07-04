const CountryInfoSection = ({ country, nativeName, currencies, languages }) => (
  <div className="flex flex-col gap-5 lg:w-full lg:mt-10 md:gap-6 md:w-full">
    <p className="text-xl font-extrabold lg:text-2xl">{country.name.common}</p>

    <div className="flex flex-col gap-8 pb-4 text-sm lg:flex-row md:justify-between md:flex-row md:gap-7 md:pb-1">
      <div className="lg:flex lg:flex-col lg:gap-1">
        <p className="text-base font-light"> Native Name:
          <span className="text-sm font-extralight"> {nativeName}</span>
        </p>
        <p className="text-base font-light">Population:
          <span className="text-sm font-extralight">{country.population.toLocaleString()}</span>
        </p>
        <p className="text-base font-light">Region:
          <span className="text-sm font-extralight"> {country.region}</span>
        </p>
        <p className="text-base font-light">Sub Region:
          <span className="text-sm font-extralight"> {country.subregion}</span>
        </p>
        <p className="text-base font-light">Capital:
          <span className="text-sm font-extralight"> {country.capital}</span>
        </p>
      </div>

      <div className="lg:flex lg:flex-col lg:gap-1">
        <p className="text-base font-light">Top Level Domain:
          <span className="text-sm font-extralight"> {country.tld}</span>
        </p>
        <p className="text-base font-light">Currencies:
          <span className="text-sm font-extralight"> {currencies}</span>
        </p>
        <p className="text-base font-light">Languages:
          <span className="text-sm font-extralight"> {languages}</span>
        </p>
      </div>
    </div>
  </div>
);

export default CountryInfoSection;