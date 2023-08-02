import React, { useRef, useEffect, useState } from "react";
import "../styles/animate.css";

const AboutSecondInnerTabs = ({ title1, title2, paragraph, imageUrl }) => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
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
    <div className="relative">
      {/* ------------------ */}
      <div className="xs:flex xs:flex-col-reverse lg:grid grid-cols-2 items-center my-8 mt-12 lg:gap-12">
        {/* @1 */}
        <div className="text-center relative">
          <div className="banner-textWajiha  lg:absolute lg:left-[-100%] lg:top-[50%] lg:w-[90%]">
            <h1 className="fontBoldAlupak text-[1.5rem] mb-4">
              <span>{title1}</span>{" "}
              <span className="text-[#FBD404]">{title2}</span>
            </h1>
            <p>{paragraph}</p>
          </div>
        </div>
        {/* @2 */}
        <div className="flex flex-row-reverse">
          <div className="absolute z-[-1] xs:mt-[-.5rem] lg:mt-[-2rem]">
            <div
              ref={targetRef}
              className={
                isVisible
                  ? "lg:background-animation_H bg-yellow-400 xs:w-[5rem] xs:h-[7rem] lg:w-[15rem] lg:h-[15rem]"
                  : "bg-yellow-400 lg:w-[15rem] xs:w-[5rem] xs:h-[7rem] lg:h-[15rem]"
              }
            >
              {""}
            </div>
            <div
              ref={targetRef}
              className={
                isVisible
                  ? "lg:background-animation_H bg-yellow-400 xs:w-[2rem] xs:h-[9rem] lg:w-[5rem] lg:h-[32rem] float-right"
                  : "bg-yellow-400 xs:w-[2rem] xs:h-[9rem] lg:w-[5rem] lg:h-[25rem] float-right"
              }
            >
              {""}
            </div>
          </div>
          <img src={imageUrl} alt={title1} />
        </div>
      </div>
    </div>
  );
};

export default AboutSecondInnerTabs;
