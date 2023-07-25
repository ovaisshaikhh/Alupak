import React, { useState } from "react";
import logo from "../assets/Alupak logo.svg";
import search from "../assets/icons8-search.svg";
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
      <header className="">
        {/* Desktop */}
        <nav className="xs:hidden md:flex justify-between items-center navbar absolute z-50 left-0 right-0 md:py-5 md:px-6 lg:py-8 lg:px-12 xm:px-24">
          <div>
            <Link to="/">
              <img className="md:w-[60%] lg:w-[85%]" src={logo} alt="logo" />
            </Link>
          </div>

          <div>
            <ul className="flex gap-4">
              <li className="md:px-2 lg:px-4 tracking-wider">
                <NavLink
                  exact
                  to="/products"
                  className="text-white md:text-xs lg:text-sm xl:text-[.9rem] hover-underline-animation hover:text-[#ffd303]"
                >
                  Products
                </NavLink>
              </li>
              <li className="md:px-2 lg:px-4 tracking-wider">
                <NavLink
                  exact
                  to="about-us"
                  className="text-white md:text-xs lg:text-sm xl:text-[.9rem] hover-underline-animation hover:text-[#ffd303]"
                >
                  About Us
                </NavLink>
              </li>
              <li className="md:px-2 lg:px-4 tracking-wider">
                <NavLink
                  exact
                  to="/careers"
                  className="text-white md:text-xs lg:text-sm xl:text-[.9rem] hover-underline-animation hover:text-[#ffd303]"
                >
                  Careers
                </NavLink>
              </li>
            </ul>
          </div>
          {/* ----------------------------------- */}
          <div>
            <button className="px-8" onClick={openModal}>
              <i className="fa fa-search text-white hover:text-[#ffd303]"></i>
              {/* <img src={search}/> */}
              {/* <i className="pegk pe-7s-search text-white"></i> */}
            </button>
            <Button value={"Contact Us"} onClick={() => navigate("/careers")} />
          </div>
          {/* ----------------------------------- */}
          {/* Search box */}
          {modalIsOpen && <Search closeModal={closeModal} />}
        </nav>
        {/* -------------------------------------- */}
        {/* Mobile */}
        <nav className="xs:flex md:hidden items-center py-4 navbar absolute z-50 left-0 right-0 justify-around">
          <div>
            <button className="border-none">
              <i className="fa-solid fa-bars text-[1.25rem] text-white"></i>
            </button>
          </div>

          <div>
            <Link to="/">
              <img className="xs:w-[50%] m-auto" src={logo} alt="logo" />
            </Link>
          </div>

          <div>
            <button className="border-none">
              {/* <i className="fa-solid fa-magnifying-glass text-white cursor-pointer"></i> */}
              <i className="fa fa-search text-white "></i>
            </button>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
