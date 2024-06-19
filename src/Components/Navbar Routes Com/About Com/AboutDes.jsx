import React from "react";

export default function AboutDes() {
  return (
    <>
      <div className="w-full h-screen bg-[#faf8f8] p-4 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row justify-around mt-4">
          <div>
            <div className="">
              <div className="flex items-center">
                <h1 className="font-bold text-xl text-orange-400 font-sans">
                  About
                </h1>
                <div className="w-9 h-0.5 bg-orange-400 ml-1"></div>
              </div>
              <h1 className="font-extrabold text-[38px] text-red-500 font-sans">
                Welcome to{" "}
                <span className="text-purple-600 font-extrabold">
                  RAJASTHAN
                </span>
              </h1>

              <div className="w-[600px] text-[15px] text-black mt-9">
                <p className="">
                  The Department of Archaeology and Museums in Rajasthan, since
                  its inception in 1950, has been making concerted efforts to
                  discover, preserve, protect, exhibit and interpret the
                  cultural legacy embodied in various forms of art and
                  architecture. The Department has 342 protected monuments, 21
                  museums, 2 art gallery and 43 archaeological sites under its
                  control comprising of sacred and secular monuments, such as
                  exquisite temple, colossal mosques, massive forts, splendid
                  palaces, artistic cenotaphs, carved and painted havelies.
                </p>
                <p className="pt-4 text-blue-950 font-semibold">Activities:</p>
                <ul className="flex flex-col gap-4 list-disc text-black ml-4 mt-6">
                  <li>
                    Preservation, Restoration and Conservation of Monuments,
                    antiquities and Archaeological Sites.
                  </li>
                  <li>Excavation and Exploration.</li>
                  <li>Survey and Documentation.</li>
                  <li>Acquisition and Exposition.</li>
                  <li>Re - organization and Development of Museums.</li>
                  <li>Research and Publication.</li>
                  <li>Exhibitions, Seminars, Lecturers.</li>
                </ul>
              </div>
            </div>

            <div></div>
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
      </div>
    </>
  );
}
