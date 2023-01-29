import React from "react";
import MagnifyGlass from "../assets/MagnifyGlass.png";
import MafnifyGlassBlack from "../assets/MagnifyGlassBlack.png"
import { motion } from "framer-motion";

import "../styles/searchIcon.css";
function SearchIcon() {
  return (
    <motion.button
      whileHover={{ scale: 0.97, backgroundColor:"#f1f1f1", color:"#1d2132" }}
      animate={{backgroundColor:"#1d2132"}}
      className="search-content flex justify-center items-center fixed bg-[#1D2132] bottom-[30px] right-[30px] p-[1rem] rounded-full"
    >
      <motion.img src={MagnifyGlass} alt="Magnify Glasss" />
    </motion.button>
  );
}

export default SearchIcon;
