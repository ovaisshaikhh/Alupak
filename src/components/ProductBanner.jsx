import React from "react";
import productBanner from "../assets/products/pb.png";
import mobProductbanner from "../assets/products/pbmob.png";
import "../styles/banner.css";
import "../styles/font.css";
import "../styles/animate.css";

const ProductBanner = () => {
  return (
    <div className="relative">
      <img
        className="w-[100vw] xs:hidden md:block"
        src={productBanner}
        alt="banner"
      />
      <img
        className="w-[100vw] xs:block md:hidden h-[50vh]"
        src={mobProductbanner}
        alt="banner"
      />
      <div className="banner-text absolute left-[-100%] xs:top-[73%] md:top-[60%] text-white text-[24px] w-[100%] xs:px-[2rem] md:px-[6rem] xs:text-center">
        <h1 className="lg:text-[2rem] xm:text-[2.9rem] font-extrabold mb-4 fontBoldAlupak tracking-[.01rem]">
          Products
        </h1>
        <p className="text-[.9rem] xs:mb-12 md:mb-3">
          We specialize in manufacturing high-quality packaging materials to
          keep your products <br /> secure and in their true form.
        </p>
      </div>
    </div>
  );
};

export default ProductBanner;
