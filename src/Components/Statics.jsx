import React from "react";
import Startcard from "./Startcard";

export default function Statics() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <Startcard number="43" label="Total Sites" />
        <Startcard number="13" label="Monuments" />
        <Startcard number="20" label="Museums" />
        <Startcard number="8" label="Wild Life" />
      </div>
    </>
  );
}
