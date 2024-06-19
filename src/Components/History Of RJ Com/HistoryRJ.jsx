import React from "react";
import HistoryOfRj from "./HistoryOfRj";
import HistoryCarousel from "./HistoryCarousel";
import Contact from "../Contact Com/Contact";





export default function HistoryRJ() {
  return (
    <>
      <tr className="bg-white flex">
        <HistoryOfRj />
        <HistoryCarousel/>
        
      </tr>
      <tr className="w-full flex flex-col">
          <Contact />
      </tr>
    </>
  );
}
