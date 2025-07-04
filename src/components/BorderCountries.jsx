import { useNavigate } from "react-router";

const BorderCountries = ({ borders, shortNames, isDark }) => {
  const navigate = useNavigate();

  if (!borders || borders.length === 0) return null;

  return (
    <div className="flex flex-wrap flex-col gap-4 lg:flex-row lg:w-full lg:py-5 md:gap-2">
      <p className="font-bold">Border Countries:</p>
      <div className="flex flex-wrap gap-2 lg:w-2/3">
        {borders.map((curr, index) => (
          <p key={index}
            className={`text-xs flex justify-center items-center w-[30%] h-7 shadow-[0_0_8px_0_rgba(0,0,0,0.2)] rounded-sm md:max-w-41 cursor-pointer ${
              isDark ? "bg-[var(--dark-blue-elements)]" : ""
            }`} onClick={() => navigate(`/${shortNames.get(curr)}`)}>
            {shortNames.get(curr)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BorderCountries;
