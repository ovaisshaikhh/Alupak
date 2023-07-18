import React from "react";
import A1 from "../assets/Alumunium-product1.png";
import A2 from "../assets/Alumunium-product2.png";
import A3 from "../assets/Alumunium-product3.png";
import "../styles/banner.css";

const HomeSecondImages = () => {
  return (
    <div className="grid grid-cols-3 lg:gap-5 xm:gap-8">
      {/* 1 */}
      <div className="text-center">
        <div className="t4s-eff-border-run relative">
          <img src={A1} />
        </div>
        <div className="lg:py-2 lg:px-4 lg:pt-2 xm:py-4 xm:px-8 xm:pt-8">
          <h6 className="font-bold lg:mb-2 xm:mb-4">Aluminium Can</h6>
          <p className="lg:text-xs xm:text-sm">
            Widely used in the beverage industry for packaging carbonated
            drinks, juices, energy drinks, and more.
          </p>
        </div>
      </div>
      {/* 2 */}
      <div className="text-center">
        <div className="t4s-eff-border-run relative">
          <img src={A2} />
        </div>
        <div className="lg:py-2 lg:px-4 lg:pt-2 xm:py-4 xm:px-8 xm:pt-8">
          <h6 className="font-bold lg:mb-2 xm:mb-4">
            Collapsable Aluminium Tubes
          </h6>
          <p className="lg:text-xs xm:text-sm">
            Widely used in the beverage industry for packaging carbonated
            drinks, juices, energy drinks, and more.
          </p>
        </div>
      </div>
      {/* 3 */}
      <div className="text-center">
        <div className="t4s-eff-border-run relative">
          <img src={A3} />
        </div>
        <div className="lg:py-2 lg:px-4 lg:pt-2 xm:py-4 xm:px-8 xm:pt-8">
          <h6 className="font-bold lg:mb-2 xm:mb-4">Rigid Aluminium Tubes</h6>
          <p className="lg:text-xs xm:text-sm">
            Widely used in the beverage industry for packaging carbonated
            drinks, juices, energy drinks, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSecondImages;
