import React from "react";
import Flickity from "react-flickity-component";
import time from "../assets/Timer.png";
import quality from "../assets/quality.png";
import sustain from "../assets/Sustain.png";
import "../styles/flickity.css";

const flickityOptions = {
  initialIndex: 0,
  autoPlay: true,
  prevNextButtons: true,
  pageDots: false,
  draggable: true,
  pauseAutoPlayOnHover: false,
  wrapAround: true,
};

const HomeUspsCarousel = () => {
  return (
    <div className="mt-12 bg-[#1f1f1f] text-white">
      <Flickity
        className={"carousel relative top-[-2.2rem] upsCarousel"}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
        // groupCells={2}
      >
        {/* @1 */}
        <div>
          <div className="text-center">
            <div className="">
              <img className="m-auto xs:w-[20%]" src={time} />
            </div>
            <div className="xs:px-[3.2rem]">
              <h5 className="xs:text-xl my-3">Timely Delivery</h5>
              <p className="xs:text-sm text-[#d4d4d8]">
                We understand our customers’ needs, hence we aim to do swift and
                in-time deliveries.
              </p>
            </div>
          </div>
        </div>
        {/* @2 */}
        <div>
          <div className="text-center">
            <div>
              <img className="m-auto xs:w-[20%]" src={quality} />
            </div>
            <div className="xs:px-[3.2rem]">
              <h5 className="xs:text-xl my-3">High Quality Materials</h5>
              <p className="xs:text-sm text-[#d4d4d8]">
                We manufacture high-grade packaging materials to keep your
                products safe and in good shape.
              </p>
            </div>
          </div>
        </div>
        {/* @3 */}
        <div>
          <div className="text-center">
            <div>
              <img className="m-auto xs:w-[20%]" src={sustain} />
            </div>
            <div className="xs:px-[3.2rem]">
              <h5 className="xs:text-xl my-3">Sustainable Manufacturing</h5>
              <p className="xs:text-sm text-[#d4d4d8]">
                We consider all safety and quality standards to manufacture our
                products.
              </p>
            </div>
          </div>
        </div>
      </Flickity>
    </div>
  );
};

export default HomeUspsCarousel;
