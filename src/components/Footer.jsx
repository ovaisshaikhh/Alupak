import React, { useState } from "react";
import { FooterMenu, Socials, ContactModal } from "./index";
import { footerData } from "../data/data";
// import logo from "../assets/footerlogo.png";
import whiteLogo from "../assets/Asset 1 w.png";
import bg_logo from "../assets/Logo footer bg.png";
import mail from "../assets/iconmail.svg";
import location from "../assets/iconlocation.svg";
import { Link } from "react-router-dom";
import background from "../assets/Mask Group 51.svg";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleClickNav = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="absolute w-full h-auto bg-[#1f1f1f] text-white xs:footerShadow lg:shadow-inner xm:px-12">
      {/* ----------------------------------------- */}
      <div className="">
        {/* xs:hidden md:block */}
        <img
          className="xs:hidden md:block md:w-[34%] absolute top-0 md:bottom-0 md:h-[100%] xs:h-[22rem]"
          src={bg_logo}
          alt="bg"
        />

        <img src={background} className="xs:block md:hidden  absolute top-0" />
      </div>

      <div className="md:pb-6 lg:pb-11 xs:px-8 md:px-0 xs:pt-24 md:pt-12 xs:pb-8">
        {/* md:block */}
        <div className="md:grid md:grid-cols-7 md:gap-2 md:ml-4 md:mr-4 lg:ml-16 lg:mr-16 lg:gap-1 lg:mx-16 xm:mx-20 md:mt-4 xs:flex flex-col">
          <div className="relative col-span-2">
            <Link onClick={handleClickNav} to="/">
              <img
                className="m-auto mb-4 mt-[-.5rem] xs:w-[65%] md:w-[53%]"
                // src={logo}
                src={whiteLogo}
                alt="image_logo"
              />
            </Link>
            <p className="xs:text-[12px] lg:text-[13px] text-center mb-4 text-[#d4d4d8]">
              Manufacturing high-quality aluminum collapsible tubes and similar
              packaging materials since 2005.
            </p>
            <Socials />
          </div>
          {/* -- */}
          {footerData.map(({ title, content }) => (
            <FooterMenu
              key={title}
              title={title}
              content={content}
              onContactClick={handleContactClick}
            />
          ))}
          {isModalOpen && <ContactModal onClose={handleCloseModal} />}
          {/* -- */}
          <div className="text-sm col-span-2 xs:mt-6 md:mt-0">
            <div className="flex items-center gap-3 xs:mb-4 md:mb-4">
              <img
                className="xs:w-[5%] md:w-[6%] lg:w-[4%]"
                src={mail}
                alt="mail"
              />

              <div className="xs:text-[13px] md:text-[12px] lg:text-[13px]">
                <a href="mailto:info@alu-pak.com">info@alu-pak.com</a>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <img
                className="xs:w-[5%] md:w-[6%] lg:w-[4%]"
                src={location}
                alt="loc"
              />
              <div className="xs:text-[13px] md:text-[12px] lg:text-[13px]">
                <a href="https://goo.gl/maps/R9fAvz8xVMbT3PXg8" target="_blank">
                  Plot 1&2 Sector B-VII, Export Processing Zone, Landhi
                  Industrial Area, Sector B Karachi Export Processing Zone
                  (KEPZ) Landhi Town, Karachi, Karachi City, Sindh.
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------- */}
      </div>
    </footer>
  );
};

export default Footer;
