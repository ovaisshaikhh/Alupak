import React, { useEffect, useState, useRef } from "react";
import HI1 from "../assets/HI1.png";
import HI2 from "../assets/HI2-2.png";
import HI3 from "../assets/HI3.png";
import HI4 from "../assets/HI4-2.png";
import "../styles/banner.css";

const HomeIndustriesImages = () => {
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
    <>
      <div className="grid grid-cols-4">
        {/* 1 */}
        <div
          ref={targetRef}
          className={
            isVisible
              ? "fade-up-element show image-container-HI t4s-eff-border-run"
              : "fade-up-element image-container-HI t4s-eff-border-run"
          }
          id="fade-up-element"
        >
          <img src={HI1} />
          <div className="text-overlay-HI lg:p-4 xm:p-8">
            <p className="lg:text-sm xm:text-base">glue & adhesive</p>
          </div>
        </div>
        {/* 2 */}
        <div
          ref={targetRef}
          className={
            isVisible
              ? "fade-up-elementY showY image-container-HI t4s-eff-border-run"
              : "fade-up-elementY image-container-HI t4s-eff-border-run"
          }
          id="fade-up-element"
        >
          <img src={HI2} />
          <div className="text-overlay-HI lg:p-4 xm:p-8">
            <p className="lg:text-sm xm:text-base">paint</p>
          </div>
        </div>
        {/* 3 */}
        <div
          ref={targetRef}
          className={
            isVisible
              ? "fade-up-element show image-container-HI t4s-eff-border-run"
              : "fade-up-element image-container-HI t4s-eff-border-run"
          }
          id="fade-up-element"
        >
          <img src={HI3} />
          <div className="text-overlay-HI lg:p-4 xm:p-8">
            <p className="lg:text-sm xm:text-base">pharmaceutical</p>
          </div>
        </div>
        {/* 4 */}
        <div
          ref={targetRef}
          className={
            isVisible
              ? "fade-up-elementY showY image-container-HI t4s-eff-border-run"
              : "fade-up-elementY image-container-HI t4s-eff-border-run"
          }
          id="fade-up-element"
        >
          <img src={HI4} />
          <div className="text-overlay-HI lg:p-4 xm:p-8">
            <p className="lg:text-sm xm:text-base">dying pigment</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeIndustriesImages;
