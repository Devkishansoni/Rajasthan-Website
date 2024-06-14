import React from "react";
import HistoryOfRj from "./HistoryOfRj";
import HistoryCarousel from "./HistoryCarousel";
import Contact from "../Contact Com/Contact";
import Footer from "../Footer Com/Footer";





export default function HistoryRJ() {
  return (
    <>
      <tr className="bg-white flex">
        <HistoryOfRj />
        <HistoryCarousel/>
        
      </tr>
      <tr className="w-full flex flex-col">
        <div className="flex justify-center mt-28">
          <Contact />
        </div>
        
        <Footer/>
        
      </tr>
    </>
  );
}
