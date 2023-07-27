import React, { useState } from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import v1 from "../assets/acrylic-1.png";
import v2 from "../assets/v2.png";
import v3 from "../assets/v3.png";
import "../styles/product.css";
import { ButtonBlack } from "../components/index";

const ProductPageImageGrid = () => {
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
    <div className="h-[50vh]">
      <div className="absolute w-[100vw] bottom-[-200px]">
        <div className="grid grid-cols-3 gap-0 justify-items-center md:mx-60 h-[60vh]">
          {/* @1 */}
          <div className="container ">
            {/* visible */}
            <div className="div1">
              <img src={p1} />
              <div
                onClick={toggleText}
                className="bg-[#ffd303] flex items-center justify-between px-4 py-2 font-semibold text-[#334155] cursor-pointer arrow"
              >
                <h6>Aluminum Cartridge</h6>
                <i className="fas fa-angle-up"></i>
              </div>
            </div>
            {/* collapsable yellow */}
            {showText && (
              <div
                className={`hidden-text div2 ${showText ? "open" : "closed"}`}
                onClick={toggleText}
              >
                <div className="info text-center py-8 px-10 bg-[#ffd303] div2">
                  <img className="w-[20%] m-auto" src={v1} />
                  <h1 className="font-bold my-3">Aluminum Cartridge</h1>
                  <p className="text-sm mb-2">
                    Aluminium tubes are unbreakable, clean, lightweight and
                    compact. Valuable materials are dosed sparingly and
                    hygienically.…appealing.
                  </p>
                  <ButtonBlack value={"Read More"} />
                </div>
              </div>
            )}
          </div>
          {/* @2 */}
          <div className="container">
            {/* visible */}
            <div className="div1">
              <img src={p2} />
              <div
                onClick={toggleText2}
                className="bg-[#ffd303] flex items-center justify-between px-4 py-2 font-semibold text-[#334155] cursor-pointer arrow"
              >
                <h6>Collapsable Aluminum Tube</h6>
                <i className="fas fa-angle-up"></i>
              </div>
            </div>
            {/* collapsable yellow */}
            {showText2 && (
              <div
                className={`hidden-text div2 ${showText2 ? "open" : "closed"}`}
                // className="hidden-text"
                onClick={toggleText2}
              >
                <div className="info text-center py-8 px-10 bg-[#ffd303] div2">
                  <img className="w-[20%] m-auto" src={v2} />
                  <h1 className="font-bold my-3">Collapsable Aluminum Tube</h1>
                  <p className="text-sm mb-2">
                    Aluminium tubes are unbreakable, clean, lightweight and
                    compact. Valuable materials are dosed sparingly and
                    hygienically.…appealing.
                  </p>
                  <ButtonBlack value={"Read More"} />
                </div>
              </div>
            )}
          </div>
          {/* @3 */}
          <div className="container">
            {/* visible */}
            <div className="div1">
              <img src={p3} />
              <div
                onClick={toggleText3}
                className="bg-[#ffd303] flex items-center justify-between px-4 py-2 font-semibold text-[#334155] cursor-pointer arrow"
              >
                <h6>Rigid Aluminium Tubes</h6>
                <i className="fas fa-angle-up"></i>
              </div>
            </div>
            {/* collapsable yellow */}
            {showText3 && (
              <div
                className={`hidden-text div2 ${showText3 ? "open" : "closed"}`}
                // className="hidden-text"
                onClick={toggleText2}
              >
                <div className="info text-center py-8 px-10 bg-[#ffd303] div2">
                  <img className="w-[20%] m-auto" src={v3} />
                  <h1 className="font-bold my-3">Rigid Aluminium Tubes</h1>
                  <p className="text-sm mb-2">
                    Aluminium tubes are unbreakable, clean, lightweight and
                    compact. Valuable materials are dosed sparingly and
                    hygienically.…appealing.
                  </p>
                  <ButtonBlack value={"Read More"} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* <div className="test"></div> */}
      </div>
    </div>
  );
};

export default ProductPageImageGrid;
