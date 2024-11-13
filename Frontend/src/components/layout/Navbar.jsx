import React from "react";
import DropDown from "../dropdown/DropDown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <header className="flex justify-between items-center p-4 bg-[#A3B9A2] border-b border-gray-300">
      <div className="text-2xl font-bold text-[#333333]">Recipe App</div>

      <nav className="flex gap-5">
        <a
          href="#explore-recipes"
          className="text-[#4D5D4B] font-bold px-3 py-2 hover:text-[#333333] transition duration-300"
        >
          Explore Recipes
        </a>
        <a
          href="#flavor-pairing"
          className="text-[#4D5D4B] font-bold px-3 py-2 hover:text-[#333333] transition duration-300"
        >
          Flavor Pairing
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <a href="#search" className="text-[#333333] text-xl">
          🔍
        </a>
        {(userInfo)?(<DropDown username={userInfo}/>):<Link to="/login">Login</Link>}
        <a
          href="#my-pantry"
          className="flex items-center gap-2 px-3 py-2 bg-[#E27D60] text-white font-bold rounded hover:bg-[#C2583A] transition duration-300"
        >
          🛒 My Pantry
        </a>
      </div>
    </header>
  );
};

export default Navbar;
