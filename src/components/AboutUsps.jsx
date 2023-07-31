import React, { useEffect, useState, useRef } from "react";
import time from "../assets/Timer.png";
import quality from "../assets/quality.png";
import sustain from "../assets/Sustain.png";

const AboutUsps = () => {
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
              <img className="m-auto md:w-[25%] xsm:w-[15%]" src={time} />
            </div>
            <div className="md:px-3 lg:px-8 xsm:px-10">
              <h5 className="lg:text-base xsm:text-lg my-3">
                Technical Expertise
              </h5>
              <p className="md:text-xs xsm:text-sm text-[#d4d4d8]">
                We hold a diverse team of experts who specialize in knowledge of
                what goes into creating Alupak’s products.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="text-center">
            <div>
              <img className="m-auto md:w-[25%] xsm:w-[15%]" src={quality} />
            </div>
            <div className="md:px-3 lg:px-8 xsm:px-10">
              <h5 className="lg:text-base xsm:text-lg my-3">
                Regulatory Compliance
              </h5>
              <p className="md:text-xs xsm:text-sm text-[#d4d4d8]">
                We strictly follow all production and quality standards, laws,
                and guidelines to ensure the safe manufacturing of goods.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="text-center">
            <div>
              <img className="m-auto md:w-[25%] xsm:w-[15%]" src={sustain} />
            </div>
            <div className="md:px-3 lg:px-8 xsm:px-10">
              <h5 className="lg:text-base xsm:text-lg my-3">
                Competitive Pricing
              </h5>
              <p className="md:text-xs xsm:text-sm text-[#d4d4d8]">
                We offer good pricing points which are based on our quality
                production standards as well as the market rate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUsps;
