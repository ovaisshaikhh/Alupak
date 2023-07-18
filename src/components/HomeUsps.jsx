import React from "react";
import time from "../assets/Timer.png";
import quality from "../assets/quality.png";
import sustain from "../assets/Sustain.png";
import "../styles/usp.css"

const HomeUsps = () => {
  return (
    <div className="bg-[#1f1f1f] text-white mb-4 px-[5rem] mt-20">
      <div className="grid grid-cols-3 gap-8 relative top-[-2.2rem]">
        {/* 1 */}
        <div className="text-center">
          <div className="">
            <img className="m-auto w-[15%]" src={time} />
          </div>
          <div className="px-10">
            <h5 className="text-lg my-3">Timely Delivery</h5>
            <p className="text-sm text-[#d4d4d8]">
              The SVG code you provided seems to be incomplete or requires
              additional resources to function correctly.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="text-center">
          <div>
            <img className="m-auto w-[15%]" src={quality} />
          </div>
          <div className="px-10">
            <h5 className="text-lg my-3">High Quality Materials</h5>
            <p className="text-sm text-[#d4d4d8]">
              The SVG code you provided seems to be incomplete or requires
              additional resources to function correctly.
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="text-center">
          <div>
            <img className="m-auto w-[15%]" src={sustain} />
          </div>
          <div className="px-10">
            <h5 className="text-lg my-3">Sustainable Manufacturing</h5>
            <p className="text-sm text-[#d4d4d8]">
              The SVG code you provided seems to be incomplete or requires
              additional resources to function correctly.
            </p>
          </div>
        </div>
        {/*  */}
        {/* <div class="circle">
        <img className="m-auto " src={time} />
        </div> */}

      </div>
    </div>
  );
};

export default HomeUsps;
