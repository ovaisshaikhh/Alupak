import React from "react";
import Flickity from "react-flickity-component";
import "../styles/flickity.css";
import A1 from "../assets/Alumunium-product1.png";
import A2 from "../assets/Alumunium-product2.png";
import A3 from "../assets/Alumunium-product3.png";

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
        // groupCells={2}
      >
        {/* @1 */}
        <div className="text-center">
          <div className="t4s-eff-border-run relative">
            <img src={A1} />
          </div>
          <div className="xs:py-4 xs:px-8">
            <h6 className="font-bold xs:mb-2 text-lg">Aluminium Cartridge</h6>
            <p className="xs:text-sm">
              Widely used in the beverage industry for packaging carbonated
              drinks, juices, energy drinks, and more.
            </p>
          </div>
        </div>
        {/* @2 */}
        <div className="text-center">
          <div className="t4s-eff-border-run relative">
            <img src={A2} />
          </div>
          <div className="xs:py-4 xs:px-8">
            <h6 className="font-bold xs:mb-2 text-lg">
              Collapsable Aluminium Tubes
            </h6>
            <p className="xs:text-sm">
              Widely used in the beverage industry for packaging carbonated
              drinks, juices, energy drinks, and more.
            </p>
          </div>
        </div>
        {/* @3 */}
        <div className="text-center">
          <div className="t4s-eff-border-run relative">
            <img src={A3} />
          </div>
          <div className="xs:py-4 xs:px-8">
            <h6 className="font-bold xs:mb-2 text-lg">Rigid Aluminium Tubes</h6>
            <p className="xs:text-sm">
              Widely used in the beverage industry for packaging carbonated
              drinks, juices, energy drinks, and more.
            </p>
          </div>
        </div>
      </Flickity>
    </div>
  );
};

export default HomeSecondImagesCarousel;
