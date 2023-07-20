import React, { useEffect, useState, useRef } from "react";
import AboutBanner from "../assets/Mask Group 10.png";
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
        <img src={AboutBanner} alt="Timer_Image" />
        <div className="text-overlay text-white px-[7rem]">
          <div>
            <h1 className="text-[#ffd303] text-[3rem] font-black">About Us</h1>
            <p className="mb-4 lg:text-sm xsm:text-base">
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
            <img className="lg:w-[30%] xsm:w-[20%]" src={stamp} alt="stamp" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeAbout;
