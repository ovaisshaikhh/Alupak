import React, { useRef, useEffect, useState } from "react";
import { HomeIndustriesImages, Button } from "./index";
import "../styles/banner.css";
import "../styles/font.css";
import "../styles/animate.css";

const HomeIndustries = () => {
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
    <div className="relative my-12">
      <div className="absolute z-[-1]">
        <div
          ref={targetRef}
          className={
            isVisible
              ? " w-[calc(100vw-7.1rem)] h-[5rem] background-animation"
              : " w-[calc(100vw-7.1rem)] h-[5rem]"
          }
        >
          {""}
        </div>
        <div 
          ref={targetRef}
          className={
            isVisible
              ? "w-[50%] h-[20rem] absolute right-0 background-animationV"
              : "w-[50%] h-[20rem] absolute right-0"
          }>
          {""}
        </div>
      </div>
      {/*  */}
      <div className="grid grid-cols-5 pt-12 lg:mx-0 xm:mx-12 lg:ml-[5rem] xm:ml-[10rem]">
        <div className="col-span-4">
          <HomeIndustriesImages />
        </div>
        <div>
          <h2
            ref={targetRef}
            className={
              isVisible
                ? "tracking-in-expand vertical-text lg:text-[3rem] xm:text-[5rem] font-black text-[#475569] pt-4 tracking-wider"
                : "vertical-text lg:text-[3rem] xm:text-[5rem] font-black text-[#475569] pt-4 tracking-wider"
            }
          >
            Industries
          </h2>
        </div>
      </div>
      {/*  */}
      <div className="text-center m-8 lg:mx-[10rem] xsm:mx-[20rem]">
        <p className="mb-4">
          Note that while most modern browsers support CSS writing-mode, it's a
          good practice to test your code on different browsers to ensure
          compatibility. Some older browsers might not fully support this
          property, so you may need to consider alternative solutions for those
          cases.
        </p>
        <Button value={"Read More"} />
      </div>
    </div>
  );
};

export default HomeIndustries;
