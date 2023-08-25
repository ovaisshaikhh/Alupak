import React, { useEffect, useState, useRef } from "react";
import aboitMission from "../assets/about/ab-w.png";
import mobcert from "../assets/about/cer.png";
import l2 from "../assets/alupak docs/certificate.pdf";

const AboutCertificate = () => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleDownload = () => {
    const pdfUrl = l2;
    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.download = pdfUrl;
    anchor.target = "_blank";
    anchor.click();
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Adjust this value to control the visibility threshold
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  };
  return (
    <div
      ref={targetRef}
      className={
        isVisible ? "fade-up-element show my-12" : "fade-up-element my-12"
      }
    >
      <img className="xs:hidden lg:block relative" src={aboitMission} />
      <img className="xs:block lg:hidden mb-6 mx-4 w-[90%]" src={mobcert} />

      <p className="text-center mx-4 mb-4 lg:hidden">
        Alupak is ISO 9001:2015 certified <br /> and meets European standards.
      </p>
      <div className="xs:flex xs:justify-center lg:absolute lg:top-[80%] lg:left-[57%]">
        <a
          // href={l2}
          onClick={handleDownload}
        >
          <button className=" bg-[#393937] text-white rounded-full font-bold md:text-xs leading-5 lg:px-[1.6rem] lg:py-[.6rem] lg:pb-[.5rem] md:px-[20px] md:py-[8px] sx:px-[20px] sx:py-[7px] sx:text-xs">
            <span>Download Cerificate</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default AboutCertificate;
