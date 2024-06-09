import React from "react";

export default function Welcom() {
  return (
    <>
      <div className="container mx-auto p-4">
        <header className="text-center">
          <h1 className="text-4xl font-bold">
            Welcome to <span className="text-orange-500">RAJASTHAN</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="bg-white border border-orange-500 p-4 text-center">
            <div className="text-6xl font-bold text-orange-500">43</div>
            <div className="text-xl">Total Sites</div>
          </div>
          <div className="bg-white border border-orange-500 p-4 text-center">
            <div className="text-6xl font-bold text-orange-500">13</div>
            <div className="text-xl">Monuments</div>
          </div>
          <div className="bg-white border border-orange-500 p-4 text-center">
            <div className="text-6xl font-bold text-orange-500">20</div>
            <div className="text-xl">Museums</div>
          </div>
          <div className="bg-white border border-orange-500 p-4 text-center">
            <div className="text-6xl font-bold text-orange-500">8</div>
            <div className="text-xl">Wild Life</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <img src="image1.jpg" alt="Hawa Mahal" className="w-full h-auto" />
          <img src="image2.jpg" alt="Jantar Mantar" className="w-full h-auto" />
          <img src="image3.jpg" alt="City Palace" className="w-full h-auto" />
          <img src="image4.jpg" alt="Amer Fort" className="w-full h-auto" />
        </div>
      </div>
    </>
  );
}
