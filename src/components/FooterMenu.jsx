import React from "react";
import { Link } from "react-router-dom";

const FooterMenu = ({
  title,
  content: [{ li, link }, { li2, link2 }, { li3, link3 }],
}) => {
  const handleClickNav = () => {
    window.scrollTo(0, 0);
  };
  return (
    <React.Fragment>
      {/* @-desktop footer */}
      <div className="block xs:pt-4 md:pt-0 xs:relative z-10">
        <div className="text-center">
          <h6 className="md:text-sm lg:text-base xs:font-medium md:font-medium xs:mb-2 md:mb-4">{title}</h6>
          <ul className="xs:text-xs md:text-xs lg:text-sm xll:text-[0.7rem] font-normal">
            <li
              // hover-underline-animation
              className="mb-2 hover:text-[#919191]"
              onClick={handleClickNav}
            >
              <Link to={link}>{li}</Link>
            </li>{" "}
            <li className="mb-2 hover:text-[#919191]" onClick={handleClickNav}>
              <Link to={link2}>{li2}</Link>
            </li>{" "}
            <li className="mb-2 hover:text-[#919191]" onClick={handleClickNav}>
              <Link to={link3}>{li3}</Link>
            </li>{" "}
          </ul>
        </div>
      </div>
      {/* ------------------------------ */}
    </React.Fragment>
  );
};

export default FooterMenu;
