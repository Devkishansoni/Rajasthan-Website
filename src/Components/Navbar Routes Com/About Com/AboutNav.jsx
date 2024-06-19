import React from "react";
import { NavLink } from "react-router-dom";

export default function AboutNav() {
  return (
    <>
      <div className="w-full h-20 bg-[#07070b] flex flex-row justify-between py-3 px-3  items-center fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/736x/1a/40/e8/1a40e84bbc42c51370d0f33044d90a7e.jpg"
            alt="Government of Rajasthan"
            className="h-16"
          />
          <div className="ml-2">
            <h1 className="text-white text-lg font-bold">
              Government of Rajasthan
            </h1>
            <h2 className="text-orange-400 font-semibold text-sm">
              Online Booking Management System
            </h2>
          </div>
        </div>
        <NavLink to="/about-to-main">
          <div className="bg-[#eba729] text-white font-semibold text-[17px] w-52 h-12 rounded-md flex justify-center">
            <button className="hover:text-blue-500">
              BACK TO HOME <i className="fa-solid fa-arrow-right pl-1"></i>
            </button>
          </div>
        </NavLink>
      </div>
    </>
  );
}
