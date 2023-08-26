import React from "react";
import productBanner from "../assets/products/pb.png";
import mobbanner from "../assets/products/product mob.png";
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
        className="w-[100vw] xs:block md:hidden"
        src={mobbanner}
        alt="banner"
      />
      <div className="pageBannerH1 absolute xs:top-[40%] ssx:top-[41%] sg:top-[43%] md:top-[43%] ep:top-[45%] lg:top-[44%] xl:top-[48%] xm:top-[44%] xll:top-[45%] 2xl:top-[47%] text-white text-[24px] w-[100%] xs:px-[1rem] ssx:px-[2rem] md:px-[6rem] xs:text-center">
        <div className="flex flex-col">
          <h1 className="tracking-in-expand xs:text-[2.2rem] xm:text-[2.9rem] font-extrabold mb-4 fontBoldAlupak tracking-[.01rem]">
            Products
          </h1>
          <p className="xs:text-[.9rem] ss:text-[.9rem] xs:mb-12 md:mb-3">
            We specialize in manufacturing high-quality packaging materials to
            keep your products <br className="xs:hidden md:block" /> secure and
            in their true form.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
