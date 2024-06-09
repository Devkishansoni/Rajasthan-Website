import React from "react";
export default function Navbar() {
  return (
    <>
      <div className="w-screen h-[110px] bg-[#07070b] py-3 px-3 flex flex-col justify-start">
        <div className="flex flow-row justify-between">
          <div className="flex items-center">
            <img
              src="https://i.pinimg.com/736x/1a/40/e8/1a40e84bbc42c51370d0f33044d90a7e.jpg"
              alt="Government of Rajasthan"
              className="h-16"
            />
            <div>
              <h1 className="text-white text-[16px] font-bold">
                Government of Rajasthan
              </h1>
              <h2 className="text-orange-400 font-semibold text-[13px]">
                Online Booking Management System
              </h2>
            </div>
          </div>
          <ul className="text-white flex gap-7 list-none font-sans font-semibold pt-6">
            <li className="hover:text-yellow-500 cursor-pointer">About Us</li>
            <li className="hover:text-yellow-500 cursor-pointer">Contact Us</li>
            <li className="hover:text-yellow-500 cursor-pointer">
              Ticket History
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">E-Help</li>
            <li className="hover:text-yellow-500 cursor-pointer">FAQ</li>
            <li className="hover:text-yellow-500 cursor-pointer">Mobile App</li>
            <li className="hover:text-yellow-500 cursor-pointer">
              Sign In<i className="fa-solid fa-arrow-right pl-1"></i>
            </li>
          </ul>
        </div>
        <div className="text-xl font-bold text-red-600 flex justify-end pb-2">
          <marquee>
            Please Click on "Ticket History" button to view your booked tickets
            through this portal!
          </marquee>
        </div>
      </div>
    </>
  );
}
