import React, { useEffect, useState, useRef } from "react";
import HI1 from "../assets/home/Glue&adhesive.png";
import HI2 from "../assets/home/Paint .png";
import HI3 from "../assets/home/Pharmaceutical.png";
import HI4 from "../assets/home/Dying Pigment.png";
import HI11 from "../assets/home/Mask Group 32@2x.png";
import HI12 from "../assets/home/Mask Group 33@2x.png";
import HI13 from "../assets/home/Mask Group 34@2x.png";
import HI14 from "../assets/home/Mask Group 35@2x.png";
import "../styles/banner.css";
import { Link } from "react-router-dom";

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

  const handleClickNav = () => {
    // const halfPageHeight = window.innerHeight / 1.09;
    const halfPageHeight = window.innerHeight / 0.9;
    window.scrollTo(0, halfPageHeight);
  };

  return (
    <React.Fragment>
      <div className="grid xs:grid-cols-2 xs:gap-1 md:gap-0 md:grid-cols-4 ">
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
          <Link onClick={handleClickNav} to="/products">
            <img src={HI1} className="deskimg xs:hidden md:block" />
            <img src={HI11} className="deskimg md:hidden xs:block" />
            <div className="text-overlay-HI xs:p-2 md:p-3 lg:p-4 xm:p-8">
              <p className="xs:text-[12px] md:text-sm xm:text-base">
                glue & adhesive
              </p>
            </div>
          </Link>
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
          <Link onClick={handleClickNav} to="/products">
            <img src={HI2} className="deskimg xs:hidden md:block" />
            <img src={HI12} className="deskimg md:hidden xs:block" />
            <div className="text-overlay-HI xs:p-3 md:p-3 lg:p-4 xm:p-8">
              <p className="xs:text-[12px] md:text-sm xm:text-base">paint</p>
            </div>
          </Link>
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
          <Link onClick={handleClickNav} to="/products">
            <img src={HI3} className="deskimg xs:hidden md:block" />
            <img src={HI13} className="deskimg md:hidden xs:block" />

            <div className="text-overlay-HI xs:p-3 md:p-3 lg:p-4 xm:p-8">
              <p className="xs:text-[12px] md:text-sm xm:text-base">
                pharmaceutical
              </p>
            </div>
          </Link>
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
          <Link onClick={handleClickNav} to="/products">
            <img src={HI4} className="deskimg xs:hidden md:block" />
            <img src={HI14} className="deskimg md:hidden xs:block" />
            <div className="text-overlay-HI xs:p-3 md:p-3 lg:p-4 xm:p-8">
              <p className="xs:text-[12px] md:text-sm xm:text-base">
                dying pigment
              </p>
            </div>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeIndustriesImages;
