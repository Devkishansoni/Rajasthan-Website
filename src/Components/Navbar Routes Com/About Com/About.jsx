import React from "react";
import AboutNav from "./AboutNav";
import AboutTemp from "./AboutTemp";
import AboutDes from "./AboutDes";
import Contact from "../../Contact Com/Contact";

export default function About() {
  return (
    <>
      <AboutNav />
      <AboutTemp />
      <AboutDes />
      <div className="mt-9">
        <Contact/>
      </div>
    </>
  );
}
