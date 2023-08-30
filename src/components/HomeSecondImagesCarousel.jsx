import React from "react";
import Flickity from "react-flickity-component";
import "../styles/flickity.css";
import A2 from "../assets/home/Alumunium-product2.png";
import A3 from "../assets/home/Alumunium-product3.png";
import A1 from "../assets/home/Mask Group 37.png";
import { Cards } from "../components/index";

const flickityOptions = {
  initialIndex: 0,
  autoPlay: true,
  prevNextButtons: true,
  pageDots: false,
  draggable: true,
  pauseAutoPlayOnHover: false,
  wrapAround: true,
};

const HomeSecondImagesCarousel = () => {
  return (
    <div className="mt-12">
      <Flickity
        className={"carousel HomeProductsCarousel"}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        <Cards
          imageUrl={A2}
          title="Collapsible Aluminium Tubes"
          paragraph="Widely used for packaging various products such as creams, oinment, gels, and pastes."
        />
        <Cards
          imageUrl={A3}
          title="Rigid Aluminium Tubes"
          paragraph="Commonly used for packaging pharmaceutical effervescent tablets
          and home test kit strips."
        />
        <Cards
          imageUrl={A1}
          title="Aluminium Cartridge"
          paragraph="We specialize in designing and manufacturing the necessities for filling and packing silicon and polyurethane sealants in aluminum cartridges."
        />
      </Flickity>
    </div>
  );
};

export default HomeSecondImagesCarousel;
