import React from "react";
import Selectopt from "./Selectopt";

export default function Welcom() {
  return (
    <>
      {/* <div className="w-full h-screen bg-[#faf8f8] p-4 flex flex-col justify-center">
        <div className="flex justify-around mt-4">
          <div>
            <div className="w-[230px]">
              <h1 className="font-extrabold text-[38px] text-black font-sans">
                Welcome to{" "}
                <span className="text-orange-600 font-extrabold">
                  RAJASTHAN
                </span>
              </h1>
            </div>
            <div className="flex flex-wrap gap-3 w-[570px]">
              <div className="border-[2px] border-[orange] rounded-md w-[170px] h-[150px] flex justify-center items-center shadow-2xl">
                <div className="border-[2px] rounded-md border-[orange] w-[160px] h-[140px] flex flex-col justify-center items-center">
                  <i class="fa-solid fa-sitemap text-3xl text-[orange] font-bold pb-1"></i>
                  <h1 className="text-blue text-2xl font-extrabold pb-1">43</h1>
                  <p className="text-gray-500 text-[15px] font-semibold">
                    Total Sites
                  </p>
                </div>
              </div>

              <div className="border-[2px] border-[orange] rounded-md w-[170px] h-[150px] flex justify-center items-center shadow-2xl">
                <div className="border-[2px] rounded-md border-[orange] w-[160px] h-[140px] flex flex-col justify-center items-center">
                  <i class="fa-solid fa-monument text-3xl text-[orange] font-bold pb-1"></i>
                  <h1 className="text-blue text-2xl font-extrabold pb-1">13</h1>
                  <p className="text-gray-500 text-[15px] font-semibold">
                    Monument
                  </p>
                </div>
              </div>

              <div className="border-[2px] border-[orange] rounded-md w-[170px] h-[150px] flex justify-center items-center shadow-2xl">
                <div className="border-[2px] rounded-md border-[orange] w-[160px] h-[140px] flex flex-col justify-center items-center">
                  <i class="fa-solid fa-building-columns text-3xl text-[orange] font-bold pb-1"></i>
                  <h1 className="text-blue text-2xl font-extrabold pb-1">20</h1>
                  <p className="text-gray-500 text-[15px] font-semibold">
                    Museums
                  </p>
                </div>
              </div>

              <div className="border-[2px] border-[orange] rounded-md w-[170px] h-[150px] flex justify-center items-center  shadow-2xl">
                <div className="border-[2px] rounded-md border-[orange] w-[160px] h-[140px] flex flex-col justify-center items-center">
                  <i class="fa-solid fa-building-columns text-3xl text-[orange] font-bold pb-1"></i>
                  <h1 className="text-blue text-2xl font-extrabold pb-1">8</h1>
                  <p className="text-gray-500 text-[15px] font-semibold">
                    Wild Life
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col justify-center items-end">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5qcCCvvL0MblshGMRipf_IgAVvB1KLYSKw&s"
                alt=""
                className="w-[200px] h-28 pb-2 pr-2"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTISXln5W-bwPhKaIhZOATylTqs2TFBQ4tzqA&s"
                alt=""
                className="w-[160px] pr-2"
              />
            </div>
            <div className="flex flex-col justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhiI-Xt3B4gEqXY0NH5Thcp8ENlpIzMD8cEtqxzG63todLstEG1TdeL07gGxBZ7PIql9Q&usqp=CAU"
                alt=""
                className="w-[250px] h-36 pb-2"
              />
              <img
                src="https://qph.cf2.quoracdn.net/main-qimg-72ce1a399c45cf4c063b1ff562c5f8c4-lq"
                alt=""
                className="w-[190px]"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-11">
          <Selectopt />
        </div>
      </div> */}
       <div className="w-full h-screen bg-[#faf8f8] p-4 flex flex-col justify-center">
            <div className="flex flex-col lg:flex-row justify-around mt-4">
                <div>
                    <div className="w-[230px]">
                        <h1 className="font-extrabold text-[38px] text-black font-sans">
                            Welcome to{" "}
                            <span className="text-orange-600 font-extrabold">
                                RAJASTHAN
                            </span>
                        </h1>
                    </div>
                    <div className="flex flex-wrap gap-3 lg:w-[570px] mt-4 lg:mt-0">
                        <div className="border-[2px] border-[orange] rounded-md w-[170px] h-[150px] flex justify-center items-center shadow-2xl">
                            <div className="border-[2px] rounded-md border-[orange] w-[160px] h-[140px] flex flex-col justify-center items-center">
                                <i className="fa-solid fa-sitemap text-3xl text-[orange] font-bold pb-1"></i>
                                <h1 className="text-blue text-2xl font-extrabold pb-1">43</h1>
                                <p className="text-gray-500 text-[15px] font-semibold">
                                    Total Sites
                                </p>
                            </div>
                        </div>

                        <div className="border-[2px] border-[orange] rounded-md w-[170px] h-[150px] flex justify-center items-center shadow-2xl">
                            <div className="border-[2px] rounded-md border-[orange] w-[160px] h-[140px] flex flex-col justify-center items-center">
                                <i className="fa-solid fa-monument text-3xl text-[orange] font-bold pb-1"></i>
                                <h1 className="text-blue text-2xl font-extrabold pb-1">13</h1>
                                <p className="text-gray-500 text-[15px] font-semibold">
                                    Monument
                                </p>
                            </div>
                        </div>

                        <div className="border-[2px] border-[orange] rounded-md w-[170px] h-[150px] flex justify-center items-center shadow-2xl">
                            <div className="border-[2px] rounded-md border-[orange] w-[160px] h-[140px] flex flex-col justify-center items-center">
                                <i className="fa-solid fa-building-columns text-3xl text-[orange] font-bold pb-1"></i>
                                <h1 className="text-blue text-2xl font-extrabold pb-1">20</h1>
                                <p className="text-gray-500 text-[15px] font-semibold">
                                    Museums
                                </p>
                            </div>
                        </div>

                        <div className="border-[2px] border-[orange] rounded-md w-[170px] h-[150px] flex justify-center items-center  shadow-2xl">
                            <div className="border-[2px] rounded-md border-[orange] w-[160px] h-[140px] flex flex-col justify-center items-center">
                                <i className="fa-solid fa-building-columns text-3xl text-[orange] font-bold pb-1"></i>
                                <h1 className="text-blue text-2xl font-extrabold pb-1">8</h1>
                                <p className="text-gray-500 text-[15px] font-semibold">
                                    Wild Life
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-8 lg:mt-0">
                    <div className="flex flex-col justify-center items-end">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5qcCCvvL0MblshGMRipf_IgAVvB1KLYSKw&s"
                            alt=""
                            className="w-[200px] h-28 pb-2 pr-2"
                        />
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTISXln5W-bwPhKaIhZOATylTqs2TFBQ4tzqA&s"
                            alt=""
                            className="w-[160px] pr-2"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhiI-Xt3B4gEqXY0NH5Thcp8ENlpIzMD8cEtqxzG63todLstEG1TdeL07gGxBZ7PIql9Q&usqp=CAU"
                            alt=""
                            className="w-[250px] h-36 pb-2"
                        />
                        <img
                            src="https://qph.cf2.quoracdn.net/main-qimg-72ce1a399c45cf4c063b1ff562c5f8c4-lq"
                            alt=""
                            className="w-[190px]"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-11">
                <Selectopt />
            </div>
        </div>
    </>
  );
}
