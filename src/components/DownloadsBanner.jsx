import React from "react";
import Productbanner from "../assets/downloads/Mask Group 30.png";
import "../styles/banner.css";
import "../styles/font.css";
import "../styles/animate.css";

const DownloadsBanner = () => {
  return (
    <div className="bg-[#ffd303] relative">
      <img
        className="w-[100vw] xs:hidden md:block"
        src={Productbanner}
        alt="banner"
      />
      {/* <img
        className="w-[100vw] xs:block md:hidden h-[50vh]"
        src={mobProductbanner}
        alt="banner"
      /> */}
      <div className="banner-text absolute left-[-100%] xs:top-[73%] md:top-[60%] text-white text-[24px] w-[100%] xs:px-[2rem] md:px-[6rem] xs:text-center">
        {/* <div> */}
        <h1 className="lg:text-[2rem] xm:text-[2.9rem] font-extrabold mb-4 fontBoldAlupak tracking-[.01rem]">
          Downloads
        </h1>
        <p className="text-[.9rem] xs:mb-12 md:mb-3">
          We are proudly certified aluminum manufacturers operating within
          standardized <br/> safety and environmental conditions.
        </p>
      </div>
    </div>
  );
};

export default DownloadsBanner;
