// import React, { useState } from "react";

// export default function HomeCarousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     {
//       title: "Explore Incredible Rajasthan",
//       image: "/path/to/image1.jpg",
//       buttonText: "Book Now",
//     },
//     // Add more slides here
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };
//   return (
//     <>
//       <div className="w-full h-screen">
//       <div className=" w-full h-full bg-gray-900 text-white">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-transform duration-500 ease-in-out transform ${
//               index === currentSlide ? 'translate-x-0' : 'translate-x-full'
//             }`}
//           >
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
//               <h2 className="text-sm md:text-lg">{slide.title}</h2>
//               <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded">
//                 {slide.buttonText}
//               </button>
//             </div>
//           </div>
//         ))}
//         <button
//           onClick={prevSlide}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white"
//         >
//           &#10094;
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white"
//         >
//           &#10095;
//         </button>
//       </div>
//     </div>
//     </>
//   );
// }

import React, { useState } from "react";
import Navbar from "./Navbar";

export default function HomeCarousel() {
  const backImage = [
    {
      img: "https://img.freepik.com/free-photo/laptop-with-pen-pencil-paper-clips-sticky-notes-spiral-notepad-beige-background_23-2148042090.jpg?t=st=1717245859~exp=1717249459~hmac=75d4df223c229fbfe3ca9b411d096a301c2d8528f90c9c9d37b5a83eb7eff897&w=996",
      title: "Outsourcing",
      pg: "We Help Our Clients To Drive Excellence Through Our Integrated Business Outsourcing Solutions.",
    },
    {
      img: "https://img.freepik.com/free-photo/high-angle-wooden-figurine-with-academic-cap-laptop_23-2148756551.jpg?t=st=1717246277~exp=1717249877~hmac=6ab5c8bf26dd62f9166d0c7dd1d7f5349e29e642f49402c0065bbe757f8913ea&w=996",
      title: "Leadership",
      pg: "Providing Robust And Scalable Business Solutions By Combining Technical Expertise With Itmnc Strong Business Focused Leadership.",
    },
    {
      img: "https://5.imimg.com/data5/QE/FK/GLADMIN-37929460/software-development-service-500x500.png",
      title: "Digital Transformation",
      pg: "Rethinking Transformation To Build The Next Powerful Competitive Differentiation For The Digital Age.",
    },
    {
      img: "https://www.themandarin.com.au/wp-content/uploads/2024/03/AdobeStock_634807291-e1710458977404.jpeg?w=1024",
      title: "Application Development",
      pg: "Create Powerful Applications That Are Ready To Accelerate Productivity And Scalability To The Next Level.",
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

  return (
    <>
        {/* <Navbar/> */}
        <div
          style={{ backgroundImage: `url(${backImage[index].img})` }}
          className=" w-screen"
        >
          <div className="flex flow-row justify-around items-center">
            <i
              className="fa-solid fa-less-than font-bold text-[red]"
              onClick={Decrement}
            ></i>
            <div className="flex flex-col w-[600px] mr-55">
              <h1 className="text-white font-bold text-[40px] pb-7">
                {backImage[index].title}
              </h1>
              <p className="text-[#0a0b21] font-semibold">
                {backImage[index].pg}
              </p>
            </div>
            <i
              className="fa-solid fa-greater-than font-bold text-[#f83e3e]"
              onClick={Increment}
            ></i>
          </div>
        </div>
    </>
  );
}
