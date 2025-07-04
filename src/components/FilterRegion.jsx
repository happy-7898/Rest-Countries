import { useContext, useState } from "react";
import { context } from "../App";
import { MdKeyboardArrowDown } from "react-icons/md";

const FilterRegion = ({ setSelectFilter }) => {
  const { isDark, filteredByRegion, loading } = useContext(context);
  const [display, setDisplay] = useState(false);
  const [filterValue,setFilterValue]=useState("Filter By Region");

  const regions = !loading? Object.keys(filteredByRegion):[];

  const handleSelect = (e) => {
    const selected = e.target.getAttribute("data-region");
    if (selected) {
      setSelectFilter(selected);
      setFilterValue(selected);
    } else {
      setSelectFilter("");
      setFilterValue("Filter By Region");
    }
    setDisplay(false);
  };

  function toggleDropdown() {
    setDisplay((prev) => !prev);
  };

  return (
    <div className={`relative w-46 h-8 lg:h-10 m:h-9 shadow-[0_0_8px_0_rgba(0,0,0,0.2)] rounded px-4 py-2 text-xs mb-5 cursor-pointer
      ${isDark ? "bg-[var(--dark-blue-elements)] text-white" : "bg-white text-black"}`}
    >
      <div className="flex justify-between items-center m:pt-1" onClick={toggleDropdown}>
        <span>{filterValue}</span>
        <MdKeyboardArrowDown size={18} />
      </div>

      {display && (
        <div className={`absolute w-full top-full left-0 mt-2 shadow-[0_0_8px_0_rgba(0,0,0,0.2)] rounded z-10 px-4 py-2 flex flex-col gap-1 text-sm
          ${isDark ? "bg-[var(--dark-blue-elements)] text-white" : "bg-white text-black"}`} onClick={handleSelect}
        >
          <div data-region="">All</div>
          {!loading &&
              regions.map((region, index) => (
                <div key={index} data-region={region}>
                  {region}
                </div>
              ))}
        </div>
      )}
    </div>
  );
};

export default FilterRegion;
