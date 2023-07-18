import React from "react";
import AboutBanner from "../assets/Mask Group 10.png";
import stamp from "../assets/isocertified.png";
import "../styles/banner.css";
import { Button } from "../components/index";

const HomeAbout = () => {
  return (
    <React.Fragment>
      <div class="image-container">
        <img src={AboutBanner} alt="Timer_Image" />
        <div class="text-overlay text-white px-[7rem]">
          <div>
            <h1 className="text-[#ffd303] text-[3rem] font-black">About Us</h1>
            <p className="mb-4">
              If you have confirmed that the image file is in the correct
              location and the issue persists, please provide more information
              about the error message you are receiving. This additional
              information will help in diagnosing the problem and providing a
              more specific solution.
            </p>
            <div className="text-black relative z-50">
              <Button value={"Read More"} />
            </div>
          </div>
          {/*  */}
          <div className="absolute w-[100%] left-[-91px]">
            <img className="w-[20%]" src={stamp} alt="stamp" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeAbout;
