import React, { useEffect, useState, useRef } from "react";
import AboutBanner from "../assets/Mask Group 10.png";
import AbputBanner2 from "../assets/aboutb.png";
import stamp from "../assets/isocertified.png";
import "../styles/banner.css";
import { Button } from "../components/index";

const HomeAbout = () => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Adjust this value to control the visibility threshold
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  };

  return (
    <React.Fragment>
      <div
        ref={targetRef}
        className={
          isVisible
            ? "fade-up-element show image-container"
            : "fade-up-element image-container"
        }
      >
        {/* <img src={AboutBanner} alt="Timer_Image" /> */}
        <img src={AbputBanner2} alt="banner_about" />
        <div className="text-overlay text-white md:px-[3rem] lg:px-[7rem]">
          <div>
            <h1 className="text-[#ffd303] md:text-[2rem] lg:text-[3rem] font-black">About Us</h1>
            <p className="md:mb-2 lg:mb-4 md:text-xs lg:text-sm">
              Alupak is Pakistan’s trusted aluminum collapsible tube supplier
              since 1983 based in Karachi, ISO 9001-2015 certified as well as
              proudly meeting European standards. For 40 years we have been
              manufacturing high-quality packaging materials via aluminum
              collapsible tubes, rigid containers, marker barrels, and capacitor
              cans serving different industries like Pharmaceuticals, Cosmetics
              & Toiletries, Food, Industrial Products, and Household Goods.
            </p>
            <div className="text-black relative z-50">
              <Button value={"Read More"} />
            </div>
          </div>
          {/*  */}
          <div className="absolute w-[100%] md:left-[-61px] lg:left-[-91px]">
            <img className="md:w-[25%] lg:w-[30%] xsm:w-[20%]" src={stamp} alt="stamp" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeAbout;
