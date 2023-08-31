import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/main.css";
import Socials from "./Socials";
import "../styles/modal.css";
import whiteLogo from "../assets/Logo White.png";
import { ContactModal } from "./index";
import background from "../assets/Mask Group 50.svg";

const MobileMenu = ({ isOpen, onClose }) => {
  const [modalIsContactOpen, setModalIsContactOpen] = useState(false);

  const handleClickNav = () => {
    window.scrollTo(0, 0);
  };
  // Contact Modal Function
  const openModalContact = () => {
    setModalIsContactOpen(true);
  };
  const CloseContact = () => {
    setModalIsContactOpen(false);
  };

  return (
    <div>
      <div
        className={` ${
          isOpen
            ? "fixed inset-0 bg-black bg-opacity-50 z-50 shadow-lg modal-container"
            : ""
        }  `}
        onClick={onClose}
      >
        <div
          // rounded-r-[2rem]
          className={`drawer-enter fixed top-0 left-0 bottom-0 w-[70%] bg-black opacity-80 z-20  shadow-lg ${
            isOpen ? "drawer-enter-active" : "drawer-exit-active"
          }`}
        >
          <div className="p-6">
            <Link to="/" onClick={handleClickNav}>
              <img src={whiteLogo} className="w-[70%]" />
            </Link>
            <span className="text-gray-600 px-3 py-2 text-[2rem] absolute top-0 right-0">
              {" "}
              &times;
            </span>
          </div>

          <div className="p-4 ">
            <ul className="flex flex-col gap-4 text-center">
              <li
                className="md:px-2 lg:px-4 tracking-wider"
                onClick={handleClickNav}
              >
                <NavLink
                  exact
                  to="/products"
                  className="text-white hover:font-bold hover:text-yellow-400"
                >
                  Products
                </NavLink>
              </li>
              <li
                className="md:px-2 lg:px-4 tracking-wider"
                onClick={handleClickNav}
              >
                <NavLink
                  exact
                  to="/downloads"
                  className="text-white hover:font-bold hover:text-yellow-400"
                >
                  Downloads
                </NavLink>
              </li>
              <li
                className="md:px-2 lg:px-4 tracking-wider"
                onClick={handleClickNav}
              >
                <NavLink
                  exact
                  to="/about-us"
                  className="text-white hover:font-bold hover:text-yellow-400"
                >
                  About Us
                </NavLink>
              </li>
              <li
                className="md:px-2 lg:px-4 tracking-wider"
                onClick={handleClickNav}
              >
                <NavLink
                  exact
                  to="/careers"
                  className="text-white hover:font-bold hover:text-yellow-400"
                >
                  Careers
                </NavLink>
              </li>
              <li
                className="md:px-2 lg:px-4 tracking-wider"
                onClick={handleClickNav}
              >
                <NavLink
                  exact
                  onClick={openModalContact}
                  className="text-white hover:font-bold hover:text-yellow-400"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="mt-[1rem] mx-6">
            {/* <hr /> */}
            <Socials />
          </div>

          <div>
            <img src={background} />
          </div>
        </div>
      </div>
      {/* ----------------------------------- */}
      {/* Contact Form */}
      {modalIsContactOpen && <ContactModal CloseContact={CloseContact} />}
    </div>
  );
};

export default MobileMenu;
