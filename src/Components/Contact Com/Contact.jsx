import React from "react";

export default function Contact() {
  return (
    <>
      {/* <div className="border-2 border-orange-400 rounded-lg shadow-xl w-1/2 h-48 flex justify-center items-center p-2">
        <div className="border-2 border-orange-400 rounded-lg  w-full h-44">
          <div className="flex flex-col place-items-center mt-9">
            <div className="flex items-center">
              <div className="w-9 h-1 bg-orange-400 mr-1"></div>
              <h1 className="text-2xl text-orange-500 font-bold">
                Contact <span className="text-black">Us</span>
              </h1>
              <div className="w-9 h-1 bg-orange-400 ml-1"></div>
            </div>
            <h3 className="text-lg text-orange-500 font-extrabold pt-2">
              <span className="text-blue-950">Call Us:</span> 0141-2820384{" "}
              <span className="text-blue-950">| Mail Id:</span>
            </h3>
            <h3 className="text-lg text-orange-500 font-bold">
              helpdesk[dot]tourist[at]rajasthan[dot]gov[dot]in
            </h3>
          </div>
        </div>
      </div> */}
       <div className="w-full bg-[#faf8f8] p-4 flex flex-col justify-center items-center">
            <div className="border-2 border-orange-400 rounded-lg shadow-xl w-full lg:w-1/2 h-48 flex justify-center items-center p-2">
                <div className="border-2 border-orange-400 rounded-lg w-full h-44">
                    <div className="flex flex-col place-items-center mt-9">
                        <div className="flex items-center">
                            <div className="w-9 h-1 bg-orange-400 mr-1"></div>
                            <h1 className="text-2xl text-orange-500 font-bold">
                                Contact <span className="text-black">Us</span>
                            </h1>
                            <div className="w-9 h-1 bg-orange-400 ml-1"></div>
                        </div>
                        <h3 className="text-lg text-orange-500 font-extrabold pt-2 text-center">
                            <span className="text-blue-950">Call Us:</span> 0141-2820384{" "}
                            <span className="text-blue-950">| Mail Id:</span>
                        </h3>
                        <h3 className="text-lg md:text-[14px] text-orange-500 font-bold text-center">
                            helpdesk[dot]tourist[at]rajasthan[dot]gov[dot]in
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
