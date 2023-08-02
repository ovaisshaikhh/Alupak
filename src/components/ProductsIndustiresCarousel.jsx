import React from "react";
import Flickity from "react-flickity-component";
import "../styles/flickity.css";
import P1 from "../assets/Vector Smart Object/p1.png";
import P2 from "../assets/Vector Smart Object/p2.png";
import P3 from "../assets/Vector Smart Object/p3.png";
import { ProductIndustriesCard } from "../components/index";

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
        <ProductIndustriesCard
          imageUrl={P1}
          title="Pharmaceutical"
          paragraph=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod."
        />
        <ProductIndustriesCard
          imageUrl={P2}
          title="Paint"
          paragraph=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod."
        />
        <ProductIndustriesCard
          imageUrl={P3}
          title="Dying Pigments"
          paragraph=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod."
        />

        <ProductIndustriesCard
          imageUrl={P1}
          title="Pharmaceutical"
          paragraph=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod."
        />
        <ProductIndustriesCard
          imageUrl={P2}
          title="Paint"
          paragraph=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod."
        />
        <ProductIndustriesCard
          imageUrl={P3}
          title="Dying Pigments"
          paragraph=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod."
        />
      </Flickity>
    </div>
  );
};

export default ProductsIndustiresCarousel;
