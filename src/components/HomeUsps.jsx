import React, { useEffect, useState, useRef } from "react";
import time from "../assets/Timer.png";
import quality from "../assets/quality.png";
import sustain from "../assets/Sustain.png";

const HomeUsps = () => {
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
        ? "fade-up-element show bg-[#1f1f1f] text-white mb-4 lg:px-[5rem] mt-20"
        : "fade-up-element bg-[#1f1f1f] text-white mb-4 lg:px-[5rem] mt-20"
    }
    >
      <div className="grid grid-cols-3 gap-8 relative top-[-2.2rem]">
        {/* 1 */}
        <div className="text-center">
          <div className="">
            <img className="m-auto lg:w-[25%] xsm:w-[15%]" src={time} />
          </div>
          <div className="lg:px-8 xsm:px-10">
            <h5 className="lg:text-base xsm:text-lg my-3">Timely Delivery</h5>
            <p className="lg:text-xs xsm:text-sm text-[#d4d4d8]">
              The SVG code you provided seems to be incomplete or requires
              additional resources to function correctly.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="text-center">
          <div>
            <img className="m-auto lg:w-[25%] xsm:w-[15%]" src={quality} />
          </div>
          <div className="lg:px-8 xsm:px-10">
            <h5 className="lg:text-base xsm:text-lg my-3">High Quality Materials</h5>
            <p className="lg:text-xs xsm:text-sm text-[#d4d4d8]">
              The SVG code you provided seems to be incomplete or requires
              additional resources to function correctly.
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="text-center">
          <div>
            <img className="m-auto lg:w-[25%] xsm:w-[15%]" src={sustain} />
          </div>
          <div className="lg:px-8 xsm:px-10">
            <h5 className="lg:text-base xsm:text-lg my-3">Sustainable Manufacturing</h5>
            <p className="lg:text-xs xsm:text-sm text-[#d4d4d8]">
              The SVG code you provided seems to be incomplete or requires
              additional resources to function correctly.
            </p>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default HomeUsps;
