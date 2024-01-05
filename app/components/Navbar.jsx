"use client";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";

import { useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="container mx-auto px-2 sm:px-4 md:px-16 py-6 navbar  text-black flex items-center justify-around gap-x-4">
      <div className="logo">
        <span className="font-extrabold text-2xl pl-2 md:text-3xl">pti.</span>
      </div>
      <div className="search-menu flex items-center justify-between md:justify-center  w-full md:w-[60%] ">
        <div className="w-full md:w-[50%] relative bg-white rounded-lg">
          <input
            type="text"
            placeholder="Search Audiobook"
            className="w-full px-4 py-3 rounded-lg  bg-white pl-14 outline-none border-none"
          />
          <span className="absolute rounded-lg top-0 left-0 bottom-0 flex items-center justify-center px-4">
            <CiSearch className="my-auto text-[#F99F1C] text-2xl font-bold" />
          </span>
        </div>
        <div className="menu  w-[200px] relative ">
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="m-1 btn bg-transparent border-none flex items-center justify-between md:px-8 bg-white  hover:bg-slate-100"
          >
            <span className="font-bold text-gray-900">Menu</span>
            <span className="text-[#F99F1C]">
              <IoIosArrowDown />
            </span>
          </button>
          <ul
            className={`py-2 dmsans shadow rounded-[20px]   z-[1] bg-white   absolute left-2 right-2 top-[65px] ${
              showMenu ? "scale-1" : "scale-[0] "
            }}`}
          >
            <li className="hover:text-[#F99F1C] font-medium text-gray-900">
              <a>Home</a>
            </li>
            <li className="hover:text-[#F99F1C] font-medium text-gray-900">
              <a>Details</a>
            </li>
            <li className="hover:text-[#F99F1C] font-medium text-gray-900">
              <a>Category</a>
            </li>
            <li className="hover:text-[#F99F1C] font-medium text-gray-900">
              <a>My Favorites</a>
            </li>
            <li className="hover:text-[#F99F1C] font-medium text-gray-900">
              <a>Log In / Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="userIcon hidden md:block">
        <button className="bg-orange-500 rounded-full p-4 hover:scale-105 duration-300">
          <LuUser2 className="text-white text-xl " />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
