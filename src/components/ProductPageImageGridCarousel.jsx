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
import { ButtonBlack, ContactModal } from "../components/index";

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
  const [modalIsContactsOpen, setModalIsContactsOpen] = useState(false);

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

  // @-Contact Modal Function
  const openModalContacts = () => {
    setModalIsContactsOpen(true);
  };
  const CloseContact = () => {
    setModalIsContactsOpen(false);
  };

  return (
    <div className="mt-12 mx-6">
      <Flickity
        className={"carousel MobProductCarouselIndustries"}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={false}
        // reloadOnUpdate
        // static
      >
        {/* @2 */}
        <div className="container mx-4">
          {/* visible */}
          <div className="div1 shadow-lg t4s-eff-border-run">
            <img src={p2} />
            <button
              onClick={toggleText2}
              className="z-10 absolute left-0 right-0 bottom-0 bg-[#ffd303] flex items-center justify-between px-4 py-2 font-semibold text-[#334155] cursor-pointer arrow"
            >
              <span className="text-sm">Collapsible Aluminum Tube</span>
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
            <div className="text-center py-8 px-10 flex flex-col justify-evenly h-full">
              <img className="w-[28%] mx-auto" src={v2} />
              <h1 className="font-bold my-2">Collapsible Aluminum Tube</h1>
              <p className="text-sm mb-2">
                Widely used for packaging various products such as creams,
                oinment, gels, and pastes.
              </p>
              <div className="relative z-[999999]">
                <ButtonBlack
                  value={"Request a Quote"}
                  onClick={openModalContacts}
                />
              </div>
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
            <div className="text-center py-8 px-10 flex flex-col justify-evenly h-full">
              <img className="w-[28%] mx-auto" src={v3} />
              <h1 className="font-bold my-2">Rigid Aluminium Tubes</h1>
              <p className="text-sm mb-2">
                Commonly used for packaging pharmaceutical effervescent tablets
                and home test kit strips.
              </p>
              <div className="relative z-[999999]">
                <ButtonBlack
                  value={"Request a Quote"}
                  onClick={openModalContacts}
                />
              </div>
            </div>
          </div>
        </div>
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
            <div className="text-center py-8 px-10 flex flex-col justify-evenly h-full">
              <img className="w-[28%] mx-auto" src={v1} />
              <h1 className="font-bold my-2">Aluminum Cartridge</h1>
              <p className="text-sm mb-2">
                We specialize in designing and manufacturing the necessities for
                filling and packing silicon and polyurethane sealants in
                aluminum cartridges.
              </p>

              <div className="relative z-[999999]">
                <ButtonBlack
                  value={"Request a Quote"}
                  onClick={openModalContacts}
                />
              </div>
            </div>
          </div>
        </div>
      </Flickity>

      {/* ----------------------------------- */}
      {/* Contact Form */}
      {modalIsContactsOpen && <ContactModal CloseContact={CloseContact} />}
    </div>
  );
};

export default ProductPageImageGridCarousel;
