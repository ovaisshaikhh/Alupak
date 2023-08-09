import React, { useState } from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import v1 from "../assets/acrylic-1.png";
import v2 from "../assets/v2.png";
import v3 from "../assets/v3.png";
import "../styles/product.css";
import "../styles/banner.css";
import { ButtonBlack } from "../components/index";
import { useNavigate } from "react-router-dom";

const ProductPageImageGrid = () => {
  const navigate = useNavigate();

  const [showText, setShowText] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
    setShowText2(false);
    setShowText3(false);
  };
  const toggleText2 = () => {
    setShowText2(!showText2);
    setShowText(false);
    setShowText3(false);
  };
  const toggleText3 = () => {
    setShowText3(!showText3);
    setShowText(false);
    setShowText2(false);
  };
  return (
    <>
      <div className="relative md:h-[15rem] lg:h-[20rem]">
        <div className="absolute w-[100vw] md:top-[-9%] lg:top-[-16%] xm:top-[-30%]">
          <div className="grid grid-cols-3 gap-0 justify-items-center md:mx-8 lg:mx-20 xm:mx-60">
            {/* @1 */}
            <div className="container">
              {/* visible */}
              <div className="div1 shadow-lg image-container">
                <img src={p1} className="" />
                <button
                  onClick={toggleText}
                  className="z-10 absolute left-0 right-0 bottom-0 bg-[#ffd303] flex items-center justify-between md:px-2 md:py-2 lg:px-4 lg:py-2 font-semibold text-[#334155] cursor-pointer"
                >
                  <span className="md:text-[13px] lg:text-sm">
                    Aluminum Cartridge
                  </span>
                  <i className="fas fa-angle-up text-sm"></i>
                </button>
              </div>
              {/* collapsable yellow */}
              <div
                className="div2 ProductCard z-20 overlay t4s-eff-border-run"
                // className={`hidden-texts div2 z-20 ProductCard ${
                //   showText ? "open" : "closed"
                // }`}
                // onClick={toggleText}
              >
                <div className="h-full flex flex-col text-center md:py-2 md:px-2 lg:py-4 lg:px-4 xsm:py-8 xsm:px-10">
                  <img className="md:w-[12%] lg:w-[25%] mx-auto mb-4" src={v1} />
                  <h1 className="font-bold my-3">Aluminum Cartridge</h1>
                  <p className="md:text-xs lg:text-sm mb-2">
                    We specialize in designing and manufacturing the necessities
                    for filling and packing silicon and polyurethane sealants in
                    aluminum cartridges.
                  </p>
                </div>
              </div>
            </div>
            {/* @2 */}
            <div className="container">
              {/* visible */}
              <div className="div1 shadow-lg image-container">
                <img src={p2} className=" " />
                <button
                  onClick={toggleText2}
                  className="z-10 absolute left-0 right-0 bottom-0 bg-[#ffd303] flex items-center justify-between md:px-2 md:py-2 lg:px-4 lg:py-2 font-semibold text-[#334155] cursor-pointer"
                >
                  <span className="md:text-[13px] lg:text-sm">
                    Collapsable Aluminum Tube
                  </span>
                  <i className="fas fa-angle-up text-sm"></i>
                </button>
              </div>
              {/* collapsable yellow */}
              <div
                className="div2 ProductCard z-20 overlay t4s-eff-border-run"
                // className={`hidden-texts div2 z-20 ProductCard ${
                //   showText2 ? "open" : "closed"
                // }`}
                // onClick={toggleText2}
              >
                <div className="h-full flex flex-col text-center md:py-2 md:px-2 lg:py-10 lg:px-4 xsm:py-8 xsm:px-10">
                  <img className="md:w-[15%] lg:w-[25%] mx-auto mb-4" src={v2} />
                  <h1 className="font-bold my-3">Collapsable Aluminum Tube</h1>
                  <p className="md:text-xs lg:text-sm mb-2">
                    Widely used for packaging various products such as creams,
                    oinment, gels and pastes.
                  </p>
                </div>
              </div>
            </div>
            {/* @3 */}
            <div className="container">
              {/* visible */}
              <div className="div1 shadow-lg image-container">
                <img src={p3} className="" />
                <button
                  onClick={toggleText3}
                  className="z-10 absolute left-0 right-0 bottom-0 bg-[#ffd303] flex items-center justify-between  md:px-2 md:py-2 lg:px-4 lg:py-2 font-semibold text-[#334155] cursor-pointer arrow"
                >
                  <span className="md:text-[13px] lg:text-sm">
                    Rigid Aluminium Tubes
                  </span>
                  <i className="fas fa-angle-up text-sm"></i>
                </button>
              </div>
              {/* collapsable yellow */}
              <div
                className="div2 ProductCard z-20 overlay t4s-eff-border-run"
                // className={`hidden-texts div2 z-20 ProductCard ${
                //   showText3 ? "open" : "closed"
                // }`}
                // onClick={toggleText3}
              >
                <div className="h-full flex flex-col text-center md:py-2 md:px-2 lg:py-4 lg:px-4 xsm:py-8 xsm:px-10">
                  <img className="md:w-[12%] lg:w-[25%] mx-auto mb-4" src={v3} />
                  <h1 className="font-bold my-3">Rigid Aluminium Tubes</h1>
                  <p className="md:text-xs lg:text-sm mb-2">
                    Commonly used for packaging and dispensing products such as
                    adhesives, pharmaceuticals, cosmetics, and food items.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPageImageGrid;
