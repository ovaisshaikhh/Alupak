import React from 'react'
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

const flickityOptions = {
    initialIndex: 0,
    autoPlay: true,
    prevNextButtons: true,
    pageDots: false,
    draggable: true,
    pauseAutoPlayOnHover: false,
    wrapAround: true,
  };

const DownloadsUsefulLinksCarousel = () => {
  return (
    <div className="mt-12">
    <Flickity
      className={"carousel HomeProductsCarousel"}
      elementType={"div"}
      options={flickityOptions}
      disableImagesLoaded={false}
      reloadOnUpdate
      static
      // groupCells={2}
    >
        <DownloadCard
          imageUrl={d1}
          title="Alucan Development"
          paragraph="Our local business unit has covered a journey of expansions to produce and deliver the best final products to all clients till date."
        />

        <DownloadCard
          imageUrl={d2}
          title="Alucan ISO Certificate"
          paragraph="ISO 9001:2015 certified by the Bureau Veritas Certification Holding SAS – UK Branch"
        />

        <DownloadCard
          imageUrl={d3}
          title="Aluminium Cartridge"
          paragraph="Manufacturing single-use containers for packaging primarily made of aluminum."
        />

        <DownloadCard
          imageUrl={d4}
          title="Aluminium Information"
          paragraph="Using aluminum is an effective solution for packaging as it is lightweight, magnetizable, stable, and transport energy-saving."
        />

        <DownloadCard
          imageUrl={d5}
          title="Certificate of Compliance"
          paragraph="Certified by high authorities as being within raw material production standards and does not come in direct contact with animal-origin materials."
        />

        <DownloadCard
          imageUrl={d6}
          title="Internal Lacquer Ammonia"
          paragraph="The quality of our aluminum collapsible is thoroughly checked which abides by the chemical resistance of internal protective coating."
        />

        <DownloadCard
          imageUrl={d7}
          title="Basecoat"
          paragraph="Discover the secrets of our premium basecoat – click here to find out more!"
        />
        <DownloadCard
          imageUrl={d8}
          title="Latex sealing compound"
          paragraph="Easy processing and high proceedings security. Good Latex - cyclization also by using internal lacquers with slip agent. Very good all-round properties and resistant for various fillings."
        />
        <DownloadCard
          imageUrl={d9}
          title="Collapsible Aluminium Tube"
          paragraph="Effortlessly package ointments and more with our collapsible aluminum tubes – the epitome of convenience and durability. Click here to download the manual!"
        />
      
    </Flickity>
  </div>
  )
}

export default DownloadsUsefulLinksCarousel