import React, { useRef, useEffect, useState }  from "react";
import { HomeIndustriesImages, Button } from "./index";
import "../styles/banner.css";
import "../styles/font.css"
import "../styles/animate.css"

const HomeIndustries = () => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this value to control the visibility threshold
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
      <div className=" absolute z-[-1]">
        <div 
         ref={targetRef}
         className={
           isVisible
             ? "bg-[#ffd303] w-[calc(100vw-7.1rem)] h-[5rem] background-animation"
             : "bg-[#ffd303] w-[calc(100vw-7.1rem)] h-[5rem]"
         }>{""}</div>
        <div className="bg-[#ffd303] w-[50%] h-[10rem] absolute right-0">
          {""}
        </div>
      </div>
      {/*  */}
      <div className="grid grid-cols-5 pt-12 mx-12 ml-[10rem]">
        <div className="col-span-4">
          <HomeIndustriesImages />
        </div>
        <div>
          <h2  ref={targetRef} className={isVisible ? "tracking-in-expand vertical-text text-[5rem] font-black text-[#475569] pt-4 tracking-wider" : "vertical-text text-[5rem] font-black text-[#475569] pt-4 tracking-wider"}>
            Industries
          </h2>
        </div>
      </div>
      {/*  */}
      <div className="text-center m-8 mx-[20rem]">
        <p  className="mb-4">
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
