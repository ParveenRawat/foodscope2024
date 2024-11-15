import React from "react";
import DropDown from "../dropdown/DropDown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../../public/logo.png";
const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <header className="flex justify-between items-center p-1 bg-[#A3B9A2] border-b border-black ">
      <div className="text-2xl font-bold text-[#333333] grid grid-flow-col items-center">
        <div>
          <a href="/">
            <img src={logo} className="h-16 w-140" />
          </a>
        </div>
      </div>

      <nav className="flex gap-5">
        <a
          href="/explore"
          className="text-[#4D5D4B] font-bold px-3 py-2 hover:text-[#333333] transition duration-300"
        >
          Explore Recipes
        </a>
        <a
          href="flavor-pairing"
          className="text-[#4D5D4B] font-bold px-3 py-2 hover:text-[#333333] transition duration-300"
        >
          Flavor Pairing
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <a href="/pantry" className="text-[#333333] text-xl">
          🔍
        </a>
        {userInfo ? (
          <DropDown username={userInfo.name} />
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
