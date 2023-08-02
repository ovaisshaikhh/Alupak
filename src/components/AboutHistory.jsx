import React, { useRef, useEffect, useState } from "react";
import "../styles/banner.css";
import "../styles/font.css";
import "../styles/animate.css";
import { AboutHistoryCarousel } from "./index"

const AboutHistory = () => {
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
    <div className="xs:mx-4 lg:mx-40 xs:mb-[6rem]">
      <div className="text-center">
        {/* <h1 className="text-[1.5rem] font-black mb-8">
          Entered the business in 1983
        </h1> */}

        {/* -- */}
        <div className="lg:grid grid-cols-12 xs:hidden">
          {/* @1 */}
          <div className="col-span-11">
            <h1 className="xs:text-[1.3rem] lg:text-[1.5rem] font-black mb-8">
              Entered the business in 1983
            </h1>
            <div className="grid grid-cols-3 items-center xs:mx-12 md:mx-[unset]">
              {/* 1 */}
              <div className="bg-[#F8F7F5] p-6 h-[15rem] flex flex-col justify-center">
                <h6 className="font-black text-[1.2rem]">Work</h6>
                <p className="text-sm">
                  Pharmaceutical, Cosmetics & Toiletries, Food Items, Industrial
                  Products, Household Goods.
                </p>
              </div>
              {/* 2 */}
              <div className="bg-[#FBD404] text-white p-6 h-[20rem] flex flex-col justify-center">
                <h1 className="text-[2rem]">
                  <span> Presence of</span> <br />{" "}
                  <span className="fontBoldAlupak text-[2.2rem]">35 YEARS</span>
                </h1>
              </div>
              {/* 3 */}
              <div className="bg-[#F8F7F5] p-6 h-[15rem] flex flex-col justify-center">
                <h6 className="font-black text-[1.2rem]">Promises</h6>
                <p className="text-sm">
                  Aluminium keeps its promises. The collapsible aluminium tube
                  is still an unbeatable packaging.
                </p>
              </div>
            </div>
          </div>
          {/* @2 */}
          <div className="xs:hidden lg:grid mr-[-1rem]">
            <h1
              ref={targetRef}
              className={
                isVisible
                  ? "tracking-in-expand vertical-text md:text-[2.5rem] lg:text-[3rem] xm:text-[5rem] font-black text-[#475569] pt-4 tracking-wider"
                  : "vertical-text md:text-[2.5rem] lg:text-[3rem] xm:text-[5rem] font-black text-[#475569] pt-4 tracking-wider"
              }
            >
              History
            </h1>
          </div>
        </div>



        <div className="lg:hidden xs:block">
          <AboutHistoryCarousel/>
        </div>
      </div>
    </div>
  );
};

export default AboutHistory;
