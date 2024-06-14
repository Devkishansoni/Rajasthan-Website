import React,{useState,useEffect} from "react";

export default function HistoryCarousel() {
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
      {/* <div
        style={{ backgroundImage: `url(${backImage[index].img})` }}
        className="bg-cover w-1/2 h-[60svh]"
      >
        <div className=" ">
          <div className="flex items-center justify-around ">
            <div className="hover:bg-yellow-400 mt-[10rem] w-9 h-9 p-4 rounded-full flex flex-row justify-center items-center bg-white">
              <i
                className="fa-solid fa-less-than font-bold text-[#060607] text-[18px]"
                onClick={Decrement}
              ></i>
            </div>
            <div className="hover:bg-yellow-400 mt-[10rem] w-9 h-9 p-4 rounded-full flex flex-row justify-center items-center bg-white">
              <i
                className="fa-solid fa-greater-than font-bold text-[#09090a] text-[18px]"
                onClick={Increment}
              ></i>
            </div>
          </div>
        </div>
      </div> */}
      <div
        style={{ backgroundImage: `url(${backImage[index].img})` }}
        className="bg-cover bg-center w-screen md:w-2/3 lg:w-1/2 h-[70svh] flex justify-center items-center relative"
      >
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
          <div
            className="hover:bg-yellow-400 w-9 h-9 p-4 rounded-full flex justify-center items-center bg-white cursor-pointer"
            onClick={Decrement}
          >
            <i className="fa-solid fa-less-than font-bold text-[#060607] text-[18px]"></i>
          </div>
          <div
            className="hover:bg-yellow-400 w-9 h-9 p-4 rounded-full flex justify-center items-center bg-white cursor-pointer"
            onClick={Increment}
          >
            <i className="fa-solid fa-greater-than font-bold text-[#09090a] text-[18px]"></i>
          </div>
        </div>
      </div>

    </>
  );
}
