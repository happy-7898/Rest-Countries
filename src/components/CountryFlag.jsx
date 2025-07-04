const CountryFlag = ({ flagUrl }) => (
  <div className="flex justify-center mb-6 md:w-full lg:max-w-162">
    <img
      src={flagUrl}
      className="w-full h-62  max-w-112 md:max-w-150 md:h-80 lg:h-102 lg:object-fill"
      alt="Country flag"
    />
  </div>
);

export default CountryFlag;