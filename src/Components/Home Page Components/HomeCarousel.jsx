import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function HomeCarousel() {
  const backImage = [
    {
      img: "https://www.holidify.com/images/cmsuploads/compressed/h4_20170822181427.PNG",
    },
    {
      img: "https://static.wanderon.in/wp-content/uploads/2023/12/places-to-visit-in-summer-in-rajasthan.jpg",
    },
    {
      img: "https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Chittorgarh-Fort-Rajasthan.jpg",
    },
    {
      img: "https://www.justahotels.com/wp-content/uploads/2023/08/Jaisalmer-1024x683.jpg",
    },
  ];

  let [index, setIndex] = useState(0);

  const Increment = () => {
    setIndex((prevIndex) => (prevIndex + 1) % backImage.length);
  };

  const Decrement = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + backImage.length) % backImage.length
    );
  };

  useEffect(() => {
    const interval = setInterval(Increment, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      
        <Navbar />
        <div
          style={{ backgroundImage: `url(${backImage[index].img})` }}
          className="bg-cover w-full h-screen"
      >
        
          <div className=" ">
            <div className="flex gap-56 items-center justify-center">
              <div className="hover:bg-yellow-400 mt-[10rem] w-9 h-9 p-4 rounded-full flex flex-row justify-center items-center bg-white">
                <i
                  className="fa-solid fa-less-than font-bold text-[#060607] text-[18px]"
                  onClick={Decrement}
                ></i>
              </div>

              <div className="flex flex-col w-[540px] text-center pt-7  mt-[10rem]">
                <h1 className="text-white font-bold text-[50px] pb-4">
                  Explore Incredible Rajasthan
                </h1>
                <div>
                  <h1 className="text-[#f8f8f9] font-bold text-[20px] pb-4">
                    Goverment of Rajasthan
                  </h1>
                </div>
                <div className="flex justify-center">
                  <button className="text-[#e7e7ee] font-semibold w-24 h-9 rounded-md  bg-yellow-500">
                    Book Now
                  </button>
                </div>
              </div>
              <div className="hover:bg-yellow-400 mt-[10rem] w-9 h-9 p-4 rounded-full flex flex-row justify-center items-center bg-white">
                <i
                  className="fa-solid fa-greater-than font-bold text-[#09090a] text-[18px]"
                  onClick={Increment}
                ></i>
              </div>
            </div>
          </div>
        </div>
      {/* <div
      style={{ backgroundImage: `url(${backImage[index].img})` }}
      className="bg-cover w-full h-screen"
    >
      <div className="flex gap-16 md:gap-56 items-center justify-center h-full">
        <div className="hover:bg-yellow-400 w-12 h-12 p-3 rounded-full flex flex-row justify-center items-center bg-white cursor-pointer" onClick={Decrement}>
          <i className="fa-solid fa-less-than font-bold text-[#060607] text-2xl"></i>
        </div>
        <div className="flex flex-col w-4/5 md:w-[540px] justify-center pt-7 mt-[10rem]">
          <h1 className="text-white font-bold text-xl md:text-[50px] pb-4">
            Explore Incredible  Rajasthan
          </h1>
          <h2 className="text-[#f8f8f9] font-bold text-2xl pb-4">
            Government of Rajasthan
          </h2>
          <button className="text-[#e7e7ee] font-semibold w-24 h-9 rounded-md bg-yellow-500">
            Book Now
          </button>
        </div>
        <div className="hover:bg-yellow-400 w-12 h-12 p-3 rounded-full flex flex-row justify-center items-center bg-white cursor-pointer" onClick={Increment}>
          <i className="fa-solid fa-greater-than font-bold text-[#09090a] text-2xl"></i>
        </div>
      </div>
    </div> */}
 
    </>
  );
}
