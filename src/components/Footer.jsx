import React from "react";
import { FooterMenu, Socials } from "./index";
import { footerData } from "../data/data";
import logo from "../assets/logo footer.png";
import bg_logo from "../assets/Logo footer bg.png";
import mail from "../assets/iconmail.svg";
import location from "../assets/iconlocation.svg";

const Footer = () => {
  return (
    <footer className="absolute w-full h-auto bg-[#1f1f1f] text-white xs:footerShadow lg:shadow-inner px-12">
      {/* ----------------------------------------- */}
      <div>
        <img
          className="w-[35%] absolute top-0 bottom-0 h-[-webkit-fill-available]"
          src={bg_logo}
          alt="bg"
        />
      </div>

      <div className="pb-11 pt-12">
        {/* md:block */}
        <div className="md:grid md:grid-cols-4 md:gap-4 md:ml-16 md:mr-16 lg:gap-1 lg:ml-28 lg:mr-28 md:mt-4 sx:hidden">
          <div className="relative">
            <img
              className="m-auto mb-4 mt-[-2rem] w-[40%]"
              src={logo}
              alt="image_logo"
            />
            <p className="text-[13px] text-center mb-4 text-[#d4d4d8]">
              Alupak Industry is a leading company in the packaging industry,
              specializing in high-quality aluminum packaging solutions.{" "}
            </p>
            <Socials />
          </div>
          {/* -- */}
          {footerData.map(({ title, content }) => (
            <FooterMenu title={title} content={content} />
          ))}
          {/* -- */}
          <div className="text-sm">
            <div className="flex items-center gap-3 mb-4">
              <img className="w-[5%]" src={mail} alt="mail" />

              <div>
                <a href="mailto:exmaple@gmail.com">exmaple@gmail.com</a>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <img className="w-[5%]" src={location} alt="loc" />
              <div>
                Plot 1&2 Sector B-VII, Export Processing Zone, Landhi Industrial
                Area, Sector B Karachi Export Processing Zone (KEPZ) Landhi
                Town, Karachi, Karachi City, Sindh.
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------- */}
        {/* @-till 768 */}
        <div className="md:hidden ml-12 mr-12 mt-6">
          {footerData.map(({ title, content }) => (
            <FooterMenu title={title} content={content} />
          ))}
        </div>
        {/* ----------------------------------------- */}
      </div>
    </footer>
  );
};

export default Footer;
