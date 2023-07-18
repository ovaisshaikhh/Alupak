import React, { useRef, useEffect, useState } from "react";
import { HomeSecondImages } from "../components/index";
import "../styles/animate.css";

const HomeSecond = () => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
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
      <div className="ml-[6rem] absolute z-[-1] ">
        <div
          ref={targetRef}
          className={
            isVisible
              ? "background-animation_H bg-[#ffd303] lg:w-[10rem] lg:h-[40vh] xm:w-[14rem] xm:h-[40vh]"
              : "bg-[#ffd303] lg:w-[10rem] lg:h-[40vh] xm:w-[14rem] xm:h-[40vh]"
          }
        >
          {""}
        </div>
        <div
          ref={targetRef}
          className={
            isVisible
              ? "background-animation lg:w-[calc(100vw-7.1rem)] lg:h-[4rem] xm:w-[calc(100vw-7.1rem)] xm:h-[8rem]"
              : "lg:w-[calc(100vw-7.1rem)] lg:h-[4rem] xm:w-[calc(100vw-7.1rem)] xm:h-[8rem]"
          }
        >
          {""}
        </div>
      </div>
      {/* -- */}
      <div className="mx-[9rem] py-10">
        <h1
          ref={targetRef}
          className={
            isVisible
              ? "tracking-in-expand text-[#3f3f46] lg:text-[2.9rem] xm:text-[3.5rem] font-black tracking-wide leading-[3.5rem] mb-4 fontBoldAlupak"
              : "text-[#3f3f46] lg:text-[2.9rem] xm:text-[3.5rem] font-black tracking-wide leading-[3.5rem] mb-4 fontBoldAlupak"
          }
        >
          Our <br />
          Products
        </h1>
        <HomeSecondImages />
      </div>
    </div>
  );
};

export default HomeSecond;
