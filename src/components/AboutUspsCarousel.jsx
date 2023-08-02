import React from "react";
import Flickity from "react-flickity-component";
import "../styles/flickity.css";
import time from "../assets/about/technical-support.png";
import quality from "../assets/about/checklist.png";
import sustain from "../assets/about/cost.png";
import { Usps } from "../components/index";

const flickityOptions = {
  initialIndex: 0,
  autoPlay: true,
  prevNextButtons: true,
  pageDots: false,
  draggable: true,
  pauseAutoPlayOnHover: false,
  wrapAround: true,
};
const AboutUspsCarousel = () => {
  return (
    <div className="mt-12 bg-[#1f1f1f] text-white">
      <Flickity
        className={"carousel relative top-[-2.2rem] aboutuspsCarousel"}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        <Usps
          imageUrl={time}
          title="Technical Expertise"
          paragraph="We hold a diverse team of experts who specialize in knowledge of
            what goes into creating Alupak’s products."
        />
        <Usps
          imageUrl={quality}
          title="Regulatory Compliance"
          paragraph="We strictly follow all production and quality standards, laws,
            and guidelines to ensure the safe manufacturing of goods."
        />
        <Usps
          imageUrl={sustain}
          title="Competitive Pricing"
          paragraph="We offer good pricing points which are based on our quality
            production standards as well as the market rate."
        />
      </Flickity>
    </div>
  );
};

export default AboutUspsCarousel;
