import React from "react";
import { FooterMenu, Socials } from "./index";
import { footerData } from "../data/data";
import logo from "../assets/Alupak logo.svg";

const Footer = () => {
  return (
    <footer className="absolute w-full h-auto pb-8 bg-[#1f1f1f] text-white xs:footerShadow lg:shadow-inner pt-12">
      {/* ----------------------------------------- */}
      {/* md:block */}
      <div className="md:grid md:grid-cols-4 md:gap-5 md:ml-16 md:mr-16 lg:gap-1 lg:ml-28 lg:mr-28 md:mt-4 sx:hidden">
        <div>
          <img
            className=""
            src={logo}
            alt="image_logo"
          />
          <p className="text-sm">Lorem ipsum jbjh jij qee ghewo gorila doremon ufd hgij guiua i a hgua uuis ijs kic.</p>
          <Socials/>
        </div>
        {/* -- */}
        {footerData.map(({ title, content }) => (
          <FooterMenu title={title} content={content} />
        ))}
        {/* -- */}
        <div className="text-sm">
          <div className="flex items-center gap-4 mb-4">
            {/* <i class="fa fa-envelope" aria-hidden="true"></i> */}
            <i class="facl facl-mail"></i>
            <div>
              <a href="mailto:exmaple@gmail.com">exmaple@gmail.com</a>
            </div>
          </div>

          <div className="flex gap-4">
            <i class="fa-solid fa-location-dot"></i>
            <div>
              Plot 1&2 Sector B-VII, Export Processing Zone, Landhi Industrial
              Area, Sector B Karachi Export Processing Zone (KEPZ) Landhi Town,
              Karachi, Karachi City, Sindh.
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
    </footer>
  );
};

export default Footer;
