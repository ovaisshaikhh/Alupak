import React, { useState } from "react";
import logo from "../assets/Alupak logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Search } from "./index";
import "../styles/main.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Search Modal Function
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <React.Fragment>
      <header className="flex justify-between py-8 px-24 items-center navbar absolute z-50 left-0 right-0">
        <div>
          <Link to="/">
            <img className="w-[85%]" src={logo} alt="logo" />
          </Link>
        </div>

        <div>
          <ul className="flex gap-4">
            <li className="px-4">
              <NavLink
                exact
                to="/products"
                className="text-white xm:text-base md:text-xs lg:text-sm xl:text-base hover-underline-animation"
              >
                Products
              </NavLink>
            </li>
            <li className="px-4">
              <NavLink
                exact
                to="about-us"
                className="text-white xm:text-base md:text-xs lg:text-sm xl:text-base hover-underline-animation"
              >
                About Us
              </NavLink>
            </li>
            <li className="px-4">
              <NavLink
                exact
                to="/careers"
                className="text-white xm:text-base md:text-xs lg:text-sm xl:text-base hover-underline-animation"
              >
                Careers
              </NavLink>
            </li>
          </ul>
        </div>
        {/* ----------------------------------- */}
        <div>
          <button className="px-8" onClick={openModal}>
            <i class="fa fa-search text-white"></i>
          </button>
          <Button value={"Contact Us"} onClick={() => navigate("/careers")} />
        </div>
        {/* ----------------------------------- */}
        {/* Search box */}
        {modalIsOpen && <Search closeModal={closeModal} />}
      </header>
    </React.Fragment>
  );
};

export default Navbar;
