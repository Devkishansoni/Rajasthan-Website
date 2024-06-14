import React from "react";
import Contact from "../Contact Com/Contact";

export default function Footer() {
  return (
    <>
      {/* <footer className="bg-gray-900 text-white text-center h-[50svh] p-4 mt-8 flex flex-col justify-center">
        <p className="text-xl text-white font-semibold">
          Total Visitors:{" "}
          <span className="text-yellow-400 text-[15px]">232683</span>
        </p>
        <p>Version: 1.0</p>
        <p className="mt-4">
          All rights reserved. Copyright © 2024 DOITC Government Of Rajasthan.
        </p>
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block"
        >
          <img
            src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
            alt="Get it on Google Play"
            className="h-12 mx-auto"
          />
        </a>
      </footer> */}
      <footer className="bg-gray-900 text-white text-center h-[50svh] p-4 mt-8 flex flex-col justify-center">
            <p className="text-xl text-white font-semibold">
                Total Visitors:{" "}
                <span className="text-yellow-400 text-[15px]">232683</span>
            </p>
            <p>Version: 1.0</p>
            <p className="mt-4">
                All rights reserved. Copyright © 2024 DOITC Government Of Rajasthan.
            </p>
            <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block"
            >
                <img
                    src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    className="h-12 mx-auto"
                />
            </a>
        </footer>
    </>
  );
}
