import React from "react";
import {
  ProductsIndustiresCarousel,
  ButtonBlack,
  ProductsIndustiresCarouselMob,
} from "../components/index";

const ProductIndustries = () => {
  return (
    <div className="xs:mx-2 md:mx-20">
      <h1 className="fontBoldAlupak xs:text-[2rem] md:text-[3rem] mb-2 font-black text-center">
        Industries We Serve
      </h1>
      <div className="xs:hidden md:block">
        <ProductsIndustiresCarousel />
      </div>
      <div className="xs:block md:hidden">
        <ProductsIndustiresCarouselMob />
      </div>

      <div className="text-center xs:mt-12 md:mt-[unset] mb-8">
        <ButtonBlack value={"Request Quote"} />
      </div>
    </div>
  );
};

export default ProductIndustries;
