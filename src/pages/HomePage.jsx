import Navbar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Countries from "../components/Countries";
import { useContext } from "react";
import { context } from "../App";

const HomePage = () => {
  const { isDark }=useContext(context);

  return (
    <div className={`h-screen w-full ${isDark?"bg-[var(--very-dark-blue-bg)]":"bg-[var(--very-light-gray-bg)]"}`}>
      <Navbar />
      <SearchBar />
      <Countries />
    </div>
  );
};

export default HomePage;
