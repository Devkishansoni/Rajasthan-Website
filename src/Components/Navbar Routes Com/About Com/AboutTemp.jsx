import React from "react";

export default function AboutTemp() {
  return (
    <>
      <div
        className="w-full h-[60svh] bg-cover"
        style={{
          backgroundImage: `url('https://www.authenticindiatours.com/app/uploads/2022/03/Amber-Fort-Jaipur-Rajasthan-1400x550-c-default.jpg')`,
        }}
      >
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-30 p-4">
          <h1 className="text-6xl font-semibold text-white mb-4">About Us</h1>
          <h4 className="text-[18px] pt-5 font-semibold text-orange-400">
            Home <span className="text-white">/</span> Pages{" "}
            <span className="text-white">/ About</span>
          </h4>
        </div>
      </div>
    </>
  );
}
