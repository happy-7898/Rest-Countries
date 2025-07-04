import React from "react";

const CountryFlag = ({ flagUrl }) => (
  <div className="flex justify-center mb-6 lg:w-full md:w-[100%] lg:max-w-[650px]">
    <img
      src={flagUrl}
      className="w-full h-[250px]  max-w-[450px] md:max-w-[600px] md:h-[350px] lg:h-[450px] lg:object-fill"
      alt="Country flag"
    />
  </div>
);

export default CountryFlag;