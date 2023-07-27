import React from "react";
import Flickity from "react-flickity-component";
import "../styles/flickity.css";
import P1 from "../assets/Vector Smart Object/p1m.png";
import P2 from "../assets/Vector Smart Object/p2m.png";
import P3 from "../assets/Vector Smart Object/p3m.png";

const flickityOptions = {
  initialIndex: 1,
  autoPlay: true,
  prevNextButtons: false,
  pageDots: true,
  draggable: true,
  pauseAutoPlayOnHover: false,
  wrapAround: true,
};

const ProductsIndustiresCarouselMob = () => {
  return (
    <div>
      <div className="mt-12">
        <Flickity
          className={"carousel ProductCarouselIndustriesMob"}
          elementType={"div"}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          {/* @1 */}
          <div className="text-center flex justify-center flex-col">
            <img className="h-[300px] w-[150px] m-auto" src={P1} />

            <div className="xs:py-4 xs:px-8">
              <h6 className="font-bold xs:mb-2 text-lg">Pharmaceutical</h6>
              <p className="xs:text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod.
              </p>
            </div>
          </div>
          {/* @2 */}
          <div className="text-center flex justify-center flex-col">
            <img className="h-[300px] w-[150px] m-auto" src={P2} />

            <div className="xs:py-4 xs:px-8">
              <h6 className="font-bold xs:mb-2 text-lg">Paint</h6>
              <p className="xs:text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod.
              </p>
            </div>
          </div>
          {/* @3 */}
          <div className="text-center flex justify-center flex-col">
            <img className="h-[300px] w-[150px] m-auto" src={P3} />

            <div className="xs:py-4 xs:px-8">
              <h6 className="font-bold xs:mb-2 text-lg">Dying Pigments</h6>
              <p className="xs:text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod.
              </p>
            </div>
          </div>
        </Flickity>
      </div>
    </div>
  );
};

export default ProductsIndustiresCarouselMob;
