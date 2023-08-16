import React from "react";
import A2 from "../assets/home/Alumunium-product2.png";
import A3 from "../assets/home/Alumunium-product3.png";
import A1 from "../assets/home/Mask Group 37.png";
import { Cards } from "../components/index";

const HomeSecondImages = () => {
  return (
    <div className="grid grid-cols-3 md:gap-3 lg:gap-5 xm:gap-8">
      <Cards
        imageUrl={A1}
        title="Aluminium Cartridge"
        paragraph="We specialize in designing and manufacturing the necessities for filling and packing silicon and polyurethane sealants in aluminum cartridges."
      />
      <Cards
        imageUrl={A2}
        title="Collapsible Aluminium Tubes"
        paragraph="Widely used for packaging various products such as creams, oinment, gels and pastes."
      />
      <Cards
        imageUrl={A3}
        title="Rigid Aluminium Tubes"
        paragraph="Commonly used for packaging and dispensing products such as adhesives, pharmaceuticals, cosmetics, and food items."
      />
    </div>
  );
};

export default HomeSecondImages;
