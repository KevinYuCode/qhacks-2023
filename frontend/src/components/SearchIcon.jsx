import React from "react";
import MagnifyGlass from "../assets/MagnifyGlass.png";
import "../styles/searchIcon.css"
function SearchIcon() {
  return (
    <button className="search-content flex justify-center items-center fixed bg-[#1D2132] bottom-[30px] right-[30px] p-[1rem] rounded-full">
      <img src={MagnifyGlass} alt="Magnify Glasss" />
    </button>
  );
}

export default SearchIcon;
