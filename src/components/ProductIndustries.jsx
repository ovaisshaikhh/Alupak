import React, { useState } from "react";
import {
  ProductsIndustiresCarousel,
  ButtonBlack,
  ProductsIndustiresCarouselMob,
  ContactModal,
} from "../components/index";

const ProductIndustries = () => {
  const [modalIsContactsOpen, setModalIsContactsOpen] = useState(false);
  // @-Contact Modal Function
  const openModalContacts = () => {
    setModalIsContactsOpen(true);
  };
  const CloseContact = () => {
    setModalIsContactsOpen(false);
  };
  return (
    <div className="xs:mx-2 md:mx-10 xl:mx-20 lg:mt-[-5rem]">
      <h1 className="fontBoldAlupak xs:text-[2rem] md:text-[2.5rem] xs:mb-2 lg:mb-[-4rem] font-black text-center">
        Industries We Serve
      </h1>
      <div className="xs:hidden md:block">
        <ProductsIndustiresCarousel />
      </div>
      <div className="xs:block md:hidden">
        <ProductsIndustiresCarouselMob />
      </div>

      <div className="text-center xs:mt-12 xm:mt-[-2rem] md:mt-0 mb-8">
        <ButtonBlack value={"Request Quote"} onClick={openModalContacts} />
      </div>
      {/* ----------------------------------- */}
      {/* Contact Form */}
      {modalIsContactsOpen && <ContactModal CloseContact={CloseContact} />}
    </div>
  );
};

export default ProductIndustries;
