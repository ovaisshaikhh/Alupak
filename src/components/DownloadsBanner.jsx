import React from "react";
import Productbanner from "../assets/downloads/Mask Group 30.png";
import ProductbannerMob from "../assets/downloads/Group 48.png";
import "../styles/banner.css";
import "../styles/font.css";
import "../styles/animate.css";

const DownloadsBanner = () => {
  return (
    <div className="relative">
      <img
        className="w-[100vw] xs:hidden md:block opacity-90"
        src={Productbanner}
        alt="banner"
      />
      <img
        className="w-[100vw] xs:block md:hidden opacity-90"
        src={ProductbannerMob}
        alt="banner"
      />
      <div className="pageBannerH1 absolute xs:top-[43%] ssx:top-[44%] sg:top-[45%] md:top-[43%] ep:top-[45%] lg:top-[44%] xl:top-[48%] xm:top-[44%] xll:top-[45%] 2xl:top-[47%] text-white text-[24px] w-[100%] xs:px-[1rem] ssx:px-[2rem] md:px-[6rem] xs:text-center">
        <h1 className="tracking-in-expand xs:text-[2.2rem] xm:text-[2.9rem] font-extrabold mb-4 fontBoldAlupak tracking-[.01rem]">
          Downloads
        </h1>
        <p className="xs:text-[.9rem] ss:text-[.9rem] xs:mb-12 md:mb-3">
          We are proudly certified aluminum manufacturers operating within
          standardized <br className="xs:hidden md:block" /> safety and
          environmental conditions.
        </p>
      </div>
    </div>
  );
};

export default DownloadsBanner;
