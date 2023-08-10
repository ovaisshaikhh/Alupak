import React, { useState } from "react";
import Flickity from "react-flickity-component";
import "../styles/flickity.css";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import v1 from "../assets/acrylic-1.png";
import v2 from "../assets/v2.png";
import v3 from "../assets/v3.png";
import "../styles/product.css";
import "../styles/banner.css";
import { useNavigate } from "react-router-dom";

const flickityOptions = {
  initialIndex: 0,
  autoPlay: true,
  prevNextButtons: true,
  pageDots: false,
  draggable: true,
  pauseAutoPlayOnHover: false,
  wrapAround: true,
};

const ProductPageImageGridCarousel = () => {
  const navigate = useNavigate();

  const [showText, setShowText] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
    setShowText2(false);
    setShowText3(false);
    // alert("1")
  };

  const toggleText2 = () => {
    setShowText2(!showText2);
    setShowText(false);
    setShowText3(false);
    // alert("2")
  };
  const toggleText3 = () => {
    setShowText3(!showText3);
    setShowText(false);
    setShowText2(false);
    // alert("3")
  };

  return (
    <div className="mt-12 mx-6">
      <Flickity
        className={"carousel MobProductCarouselIndustries"}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={false}
        // reloadOnUpdate
        static
      >
        {/* @1 */}
        <div className="container mx-4">
          {/* visible */}
          <div className="div1 shadow-lg t4s-eff-border-run ">
            <img src={p1} />
            <button
              onClick={toggleText}
              className="z-10 absolute left-0 right-0 bottom-0 bg-[#ffd303] flex items-center justify-between px-4 py-2 font-semibold text-[#334155] cursor-pointer mgrid1"
            >
              <span className="text-sm">Aluminum Cartridge</span>
              <i className="fas fa-angle-up text-sm"></i>
            </button>
          </div>
          {/* collapsable yellow */}
          <div
            className={`hidden-texts div2 z-20 ProductCard ${
              showText ? "open t4s-eff-border-run" : "closed"
            }`}
            onClick={toggleText}
          >
            <div className="text-center py-8 px-10 flex flex-col h-full">
              <img className="w-[28%] mx-auto mb-4" src={v1} />
              <h1 className="font-bold my-3">Aluminum Cartridge</h1>
              <p className="text-sm mb-2">
                We specialize in designing and manufacturing the necessities for
                filling and packing silicon and polyurethane sealants in
                aluminum cartridges.
              </p>
            </div>
          </div>
        </div>
        {/* @2 */}
        <div className="container mx-4">
          {/* visible */}
          <div className="div1 shadow-lg t4s-eff-border-run">
            <img src={p2} />
            <button
              onClick={toggleText2}
              className="z-10 absolute left-0 right-0 bottom-0 bg-[#ffd303] flex items-center justify-between px-4 py-2 font-semibold text-[#334155] cursor-pointer arrow"
            >
              <span className="text-sm">Collapsable Aluminum Tube</span>
              <i className="fas fa-angle-up text-sm"></i>
            </button>
          </div>
          {/* collapsable yellow */}
          <div
            className={`hidden-texts div2 z-20 ProductCard ${
              showText2 ? "open t4s-eff-border-run" : "closed"
            }`}
            onClick={toggleText2}
          >
            <div className="text-center py-8 px-10 flex flex-col h-full">
              <img className="w-[28%] mx-auto mb-4" src={v2} />
              <h1 className="font-bold my-3">Collapsable Aluminum Tube</h1>
              <p className="text-sm mb-2">
                Widely used for packaging various products such as creams,
                oinment, gels and pastes.
              </p>
              {/* <ButtonBlack value={"Read More"} /> */}
            </div>
          </div>
        </div>
        {/* @3 */}
        <div className="container mx-4">
          {/* visible */}
          <div className="div1 shadow-lg t4s-eff-border-run">
            <img src={p3} />
            <button
              onClick={toggleText3}
              className="z-10 absolute left-0 right-0 bottom-0 bg-[#ffd303] flex items-center justify-between px-4 py-2 font-semibold text-[#334155] cursor-pointer arrow"
            >
              <span className="text-sm">Rigid Aluminium Tubes</span>
              <i className="fas fa-angle-up text-sm"></i>
            </button>
          </div>
          {/* collapsable yellow */}
          <div
            className={`hidden-texts div2 z-20 ProductCard ${
              showText3 ? "open t4s-eff-border-run" : "closed"
            }`}
            onClick={toggleText3}
          >
            <div className="text-center py-8 px-10 flex flex-col h-full">
              <img className="w-[28%] mx-auto mb-4" src={v3} />
              <h1 className="font-bold my-3">Rigid Aluminium Tubes</h1>
              <p className="text-sm mb-2">
                Commonly used for packaging and dispensing products such as
                adhesives, pharmaceuticals, cosmetics, and food items.
              </p>
            </div>
          </div>
        </div>
      </Flickity>
    </div>
  );
};

export default ProductPageImageGridCarousel;
