import React from "react";
import Flickity from "react-flickity-component";
import "../styles/flickity.css";
import P1 from "../assets/Vector Smart Object/p1.png";
import P2 from "../assets/Vector Smart Object/p2.png";
import P3 from "../assets/Vector Smart Object/p3.png";

const flickityOptions = {
  initialIndex: 1,
  autoPlay: true,
  prevNextButtons: false,
  pageDots: false,
  draggable: true,
  pauseAutoPlayOnHover: false,
  wrapAround: true,
};

const ProductsIndustiresCarousel = () => {
  return (
    <div className="mt-12">
      <Flickity
        className={"carousel ProductCarouselIndustries"}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        {/* @1 */}
        <div className="text-center w-[33.33%] flex justify-center flex-col">
          <img className="h-[50vh]" src={P1} />

          <div className="xs:py-4 xs:px-8">
            <h6 className="font-bold xs:mb-2 text-lg">Pharmaceutical</h6>
            <p className="xs:text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </p>
          </div>
        </div>
        {/* @2 */}
        <div className="text-center w-[33.33%] flex justify-center flex-col">
          <img className="h-[50vh]" src={P2} />

          <div className="xs:py-4 xs:px-8">
            <h6 className="font-bold xs:mb-2 text-lg">Paint</h6>
            <p className="xs:text-sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
            </p>
          </div>
        </div>
        {/* @3 */}
        <div className="text-center w-[33.33%] flex justify-center flex-col">
          <img className="h-[50vh]" src={P3} />

          <div className="xs:py-4 xs:px-8">
            <h6 className="font-bold xs:mb-2 text-lg">Dying Pigments</h6>
            <p className="xs:text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </p>
          </div>
        </div>



                {/* @1 */}
                <div className="text-center w-[33.33%] flex justify-center flex-col">
          <img className="h-[50vh]" src={P1} />

          <div className="xs:py-4 xs:px-8">
            <h6 className="font-bold xs:mb-2 text-lg">Pharmaceutical</h6>
            <p className="xs:text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </p>
          </div>
        </div>
        {/* @2 */}
        <div className="text-center w-[33.33%] flex justify-center flex-col">
          <img className="h-[50vh]" src={P2} />

          <div className="xs:py-4 xs:px-8">
            <h6 className="font-bold xs:mb-2 text-lg">Paint</h6>
            <p className="xs:text-sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
            </p>
          </div>
        </div>
        {/* @3 */}
        <div className="text-center w-[33.33%] flex justify-center flex-col">
          <img className="h-[50vh]" src={P3} />

          <div className="xs:py-4 xs:px-8">
            <h6 className="font-bold xs:mb-2 text-lg">Dying Pigments</h6>
            <p className="xs:text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </p>
          </div>
        </div>
      </Flickity>
    </div>
  );
};

export default ProductsIndustiresCarousel;
