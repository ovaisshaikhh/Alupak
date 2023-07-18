import React from "react";
import HI1 from "../assets/HI1.png";
import HI2 from "../assets/HI2-2.png";
import HI3 from "../assets/HI3.png";
import HI4 from "../assets/HI4-2.png";
import "../styles/banner.css";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const HomeIndustriesImages = () => {
  return (
    <>
      <div className="grid grid-cols-4">
        {/* 1 */}
        <div
          class="image-container-HI t4s-eff-border-run"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          <img src={HI1} className="" />
          <div class="text-overlay-HI">
            <p>glue & adhesive</p>
          </div>
        </div>
        {/* 2 */}
        <div
          class="image-container-HI t4s-eff-border-run"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          <img src={HI2} />
          <div class="text-overlay-HI">
            <p>paint</p>
          </div>
        </div>
        {/* 3 */}
        <div
          class="image-container-HI t4s-eff-border-run"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          <img src={HI3} />
          <div class="text-overlay-HI">
            <p>pharmaceutical</p>
          </div>
        </div>
        {/* 4 */}
        <div
          class="image-container-HI t4s-eff-border-run"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          <img src={HI4} />
          <div class="text-overlay-HI">
            <p>dying pigment</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeIndustriesImages;
