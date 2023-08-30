import React from "react";
import Flickity from "react-flickity-component";
import "../styles/flickity.css";
import { DownloadCard } from "./index";
import d1 from "../assets/downloads/growth.png";
import d2 from "../assets/downloads/medal (1).png";
import d3 from "../assets/downloads/acrylic.png";
import d4 from "../assets/downloads/Iconcircle.png";
import d5 from "../assets/downloads/shield.png";
import d6 from "../assets/downloads/setting.png";
import d7 from "../assets/downloads/layers.png";
import d8 from "../assets/downloads/test.png";
import d9 from "../assets/downloads/acrylic2.png";
//
import l1 from "../assets/alupak docs/Alupak Development.pdf";
import l2 from "../assets/alupak docs/certificate.pdf";
import l3 from "../assets/alupak docs/Aluminium_Cartridges_Brochure[1].pdf";
import l4 from "../assets/alupak docs/Aluminium Information.pdf";
import l5 from "../assets/alupak docs/Certificate of Compliance.pdf";
import l6 from "../assets/alupak docs/Internal Lacquer.pdf";
import l7 from "../assets/alupak docs/Basecoat.pdf";
import l8 from "../assets/alupak docs/Latex Sealing Compound.pdf";
import l9 from "../assets/alupak docs/Collapsibles Aluminium Tubes.pdf";

const flickityOptions = {
  initialIndex: 0,
  autoPlay: true,
  prevNextButtons: true,
  pageDots: false,
  draggable: true,
  pauseAutoPlayOnHover: false,
  wrapAround: false,
};

const DownloadsUsefulLinksCarousel = () => {
  return (
    <div className="mt-8">
      <Flickity
        className={"carousel DownloadsCarousel1"}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
        // groupCells={2}
      >
        <DownloadCard
          imageUrl={d1}
          title="Alupak Development"
          paragraph="Our business unit has covered a journey of expansions to produce and deliver the best final products to all clients till date."
          link={l1}
        />

        <DownloadCard
          imageUrl={d2}
          title="Alupak ISO Certificate"
          paragraph="ISO 9001:2015 certified by the Bureau Veritas Certification Holding."
          link={l2}
        />

        <DownloadCard
          imageUrl={d3}
          title="Aluminium Cartridge"
          paragraph="Manufacturing single-use containers for packaging primarily made of aluminum."
          link={l3}
        />

        <DownloadCard
          imageUrl={d4}
          title="Aluminium Information"
          paragraph="Using aluminum is an effective solution for packaging as it is lightweight, magnetizable, stable, and transport energy-saving."
          link={l4}
        />

        <DownloadCard
          imageUrl={d5}
          title="Certificate of Compliance"
          paragraph="Certified by high authorities as being within raw material production standards and does not come in direct contact with animal-origin materials."
          link={l5}
        />

        <DownloadCard
          imageUrl={d6}
          title="Internal Lacquer Ammonia"
          paragraph="The quality of our aluminum collapsible is thoroughly checked which abides by the chemical resistance of internal protective coating."
          link={l6}
        />

        <DownloadCard
          imageUrl={d7}
          title="Basecoat"
          paragraph="Discover the secrets of our premium basecoat – click here to find out more!"
          link={l7}
        />
        <DownloadCard
          imageUrl={d8}
          title="Latex sealing compound"
          paragraph="Easy processing and high proceedings security. Good Latex - cyclization also by using internal lacquers with slip agent. Very good all-round properties and resistant for various fillings."
          link={l8}
        />
        <DownloadCard
          imageUrl={d9}
          title="Collapsible Aluminium Tube"
          paragraph="Effortlessly package ointments and more with our collapsible aluminum tubes – the epitome of convenience and durability. Click here to download the manual!"
          link={l9}
        />
      </Flickity>
    </div>
  );
};

export default DownloadsUsefulLinksCarousel;
