import React from "react";
import { HomeSecondImages } from "../components/index";

const HomeSecond = () => {
  return (
    <div className="relative">
      <div className="ml-[6rem] absolute z-[-1]">
        <div className="bg-[#f8d721] w-[14rem] h-[40vh]">{""}</div>
        <div className="bg-[#f8d721] w-[calc(100vw-7.1rem)] h-[8rem]">{""}</div>
      </div>
      <div className="mx-[9rem] py-10 ">
        <h1 className="text-[#3f3f46] text-[3rem] font-black tracking-widest">Our <br/>Products</h1>
        <HomeSecondImages />
      </div>
    </div>
  );
};

export default HomeSecond;
