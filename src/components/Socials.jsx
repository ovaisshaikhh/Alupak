import React from "react";
import fb from "../assets/iconfb.svg";
import twitter from "../assets/icontwitter.svg";
import linkedin from "../assets/iconlinkedin.svg";
// import call from "../assets/iconcall.svg";
import whatsapp from "../assets/whatsapp-01.svg";

const Socials = () => {
  return (
    <div className="mobMenu grid grid-cols-4 xs:gap-2 sg:gap-4 xll:gap-[0rem] justify-items-center items-center sx:my-6 md:mt-6 lg:mt-0 text-white">
      {/* @Facebook */}
      <p className="rounded-full social-icon hover:animate-bounce">
        <a
          href="https://www.facebook.com/people/Alupak-Limited/100064038663586/?mibextid=ZbWKwL"
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-4" src={fb} alt="fb" />
        </a>
      </p>
      {/* @Twitter */}
      <p className="rounded-full social-icon hover:animate-bounce">
        <a
          href="https://twitter.com/i/flow/login?redirect_after_login=%2FAlupak_Limited"
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-4" src={twitter} alt="twitter" />
        </a>
      </p>
      {/* @Linkedin */}
      <p className="rounded-full social-icon hover:animate-bounce">
        <a
          href="https://www.linkedin.com/company/alupak-alluminium-private-limited/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-4" src={linkedin} alt="ln" />
        </a>
      </p>
      {/* @whatsapp */}
      <p className="rounded-full social-icon hover:animate-bounce">
        <a
          type="email"
          href="https://api.whatsapp.com/send?phone=923218204162"
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-4" src={whatsapp} alt="call" />
        </a>
      </p>
      {/* @Call */}
      {/* <p className=" rounded-full social-icon hover:animate-bounce">
        <a type="email" href="mailto:info@image.net.pk" rel="noreferrer">
          <img className="w-4" src={call} alt="call" />
        </a>
      </p> */}
    </div>
  );
};

export default Socials;
