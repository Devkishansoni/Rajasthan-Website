import React from "react";
import HomeMain from "../Home Page Components/HomeMain";
import Welcom from "../Welcom Components/Welcom";
import HistoryRJ from "../History Of RJ Com/HistoryRJ";
import { Route, Routes } from "react-router-dom";
import HistoryOfRj from "../History Of RJ Com/HistoryOfRj";
import HistoryCarousel from "../History Of RJ Com/HistoryCarousel";
import Contact from "../Contact Com/Contact";

export default function Main() {
  return (
    <>
      <HomeMain />
      <Welcom />
      <tr className="bg-white flex">
        <HistoryOfRj />
        <HistoryCarousel />
      </tr>
      <Contact/>
      
    </>
  );
}
