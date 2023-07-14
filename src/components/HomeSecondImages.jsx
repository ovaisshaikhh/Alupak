import React from "react";
import A1 from "../assets/Alumunium-product1.png";
import A2 from "../assets/Alumunium-product2.png";
import A3 from "../assets/Alumunium-product3.png";

const HomeSecondImages = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="text-center">
        <img src={A1} />
        <div className="py-4 px-8 pt-8">
          <h6 className="font-bold mb-4">Aluminium Can</h6>
          <p className="text-sm">
            Widely used in the beverage industry for packaging carbonated
            drinks, juices, energy drinks, and more.
          </p>
        </div>
      </div>
      <div className="text-center">
        <img src={A2} />
        <div className="py-4 px-8 pt-8">
          <h6 className="font-bold mb-4">Collapsable Aluminium Tubes</h6>
          <p className="text-sm">
            Widely used in the beverage industry for packaging carbonated
            drinks, juices, energy drinks, and more.
          </p>
        </div>
      </div>
      <div className="text-center">
        <img src={A3} />
        <div className="py-4 px-8 pt-8">
          <h6 className="font-bold mb-4">Rigid Aluminium Tubes</h6>
          <p className="text-sm">
            Widely used in the beverage industry for packaging carbonated
            drinks, juices, energy drinks, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSecondImages;
