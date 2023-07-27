import React from "react";
import mobProductbanner from "../assets/pbmob.png";
import Productbanner from "../assets/about/Group 11.png";
import "../styles/banner.css";
import "../styles/font.css";
import "../styles/animate.css";

const AboutBanner = () => {
  return (
    <div className="relative">
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
          About Us
        </h1>
        <p className="text-[.9rem] xs:mb-12 md:mb-3">
          Alupak is Pakistan’s trusted aluminum collapsible tube supplier since
          1983 based in Karachi, ISO 9001-2015 <br />
          certified as well as proudly meeting European standards.
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
