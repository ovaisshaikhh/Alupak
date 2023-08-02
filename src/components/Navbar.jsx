import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/Alupak logo.svg";
import blackLogo from "../assets/logoalu.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Search, MobileMenu } from "./index";
import "../styles/main.css";

const Navbar = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolledMob, setIsScrolledMob] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScrollMob = () => {
      const headerHeight = headerRef.current.clientHeight;
      setIsScrolledMob(window.scrollY > headerHeight);
    };
    window.addEventListener("scroll", handleScrollMob);
    return () => {
      window.removeEventListener("scroll", handleScrollMob);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <nav
          // className="xs:hidden md:flex justify-between items-center navbar absolute z-50 left-0 right-0 md:py-5 md:px-6 lg:py-8 lg:px-12 xm:px-24"
          className={`${
            isScrolled
              ? "bg-white z-50 py-2 px-6 lg:py-4 lg:px-12 shadow-lg"
              : "bg-transparent z-50 py-4 px-6 lg:py-8 lg:px-12"
          } xs:hidden md:flex justify-between items-center navbar fixed top-0 left-0 w-full transition-all`}
        >
          <div className={`${isScrolled ? "w-[10%]" : ""} `}>
            <Link to="/">
              <img
                // className="md:w-[60%] lg:w-[85%]"
                className={`${
                  isScrolled ? "hidden" : ""
                } md:w-[60%] lg:w-[85%]`}
                src={logo}
                alt="logo"
              />

              <img
                // className="md:w-[60%] lg:w-[85%]"
                className={`${isScrolled ? "" : "hidden"} `}
                src={blackLogo}
                alt="logo"
              />
            </Link>
          </div>

          <div>
            <ul className="flex gap-4">
              <li className="md:px-2 lg:px-4 tracking-wider">
                <NavLink
                  exact
                  to="/products"
                  // className="text-white md:text-xs lg:text-sm xl:text-[.9rem] hover-underline-animation hover:text-[#ffd303]"
                  className={`${
                    isScrolled ? "text-black" : "text-white"
                  }  md:text-xs lg:text-sm xl:text-[.9rem] hover-underline-animation hover:text-[#ffd303]`}
                >
                  Products
                </NavLink>
              </li>
              <li className="md:px-2 lg:px-4 tracking-wider">
                <NavLink
                  exact
                  to="about-us"
                  // className="text-white md:text-xs lg:text-sm xl:text-[.9rem] hover-underline-animation hover:text-[#ffd303]"
                  className={`${
                    isScrolled ? "text-black" : "text-white"
                  }  md:text-xs lg:text-sm xl:text-[.9rem] hover-underline-animation hover:text-[#ffd303]`}
                >
                  About Us
                </NavLink>
              </li>
              <li className="md:px-2 lg:px-4 tracking-wider">
                <NavLink
                  exact
                  to="/careers"
                  // className="text-white md:text-xs lg:text-sm xl:text-[.9rem] hover-underline-animation hover:text-[#ffd303]"
                  className={`${
                    isScrolled ? "text-black" : "text-white"
                  }  md:text-xs lg:text-sm xl:text-[.9rem] hover-underline-animation hover:text-[#ffd303]`}
                >
                  Careers
                </NavLink>
              </li>
            </ul>
          </div>
          {/* ----------------------------------- */}
          <div>
            <button className="px-8" onClick={openModal}>
              <i
                // className="fa fa-search text-white hover:text-[#ffd303]"
                className={`${
                  isScrolled ? "text-black" : "text-white"
                }  fa fa-search hover:text-[#ffd303]`}
              ></i>
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
        <nav
          // className="xs:flex md:hidden items-center py-4 navbar absolute z-50 left-0 right-0 justify-around"
          ref={headerRef}
          className={`${
            isScrolledMob ? "bg-white  shadow-lg" : "bg-transparent"
          } xs:flex md:hidden items-center py-4 navbar fixed top-0 w-full z-50 left-0 right-0 justify-around transition-all`}
        >
          <div>
            <button onClick={handleMenuToggle} className="border-none">
              <i
                // className="fa-solid fa-bars text-[1.25rem] text-white"
                ref={headerRef}
                className={`${
                  isScrolledMob ? "text-black" : "text-white"
                } fa-solid fa-bars text-[1.25rem]`}
              ></i>
            </button>
            <MobileMenu isOpen={isMenuOpen} onClose={handleMenuToggle} />
          </div>

          <div ref={headerRef} className={`${isScrolledMob ? "w-[30%]" : ""} `}>
            <Link to="/">
              <img
                ref={headerRef}
                className={`${isScrolledMob ? "hidden" : ""} xs:w-[50%] m-auto`}
                src={logo}
                alt="logo"
              />

              <img
                ref={headerRef}
                className={`${isScrolledMob ? "" : "hidden"} xs:w-[] m-auto`}
                src={blackLogo}
                alt="logo"
              />
            </Link>
          </div>

          <div>
            <button className="border-none" onClick={openModal}>
              <i
                // className="fa fa-search text-white"
                ref={headerRef}
                className={`${
                  isScrolledMob ? "text-black" : "text-white"
                } fa fa-search`}
              ></i>
            </button>
            {/* Search box */}
            {modalIsOpen && <Search closeModal={closeModal} />}
          </div>
        </nav>
        {/* ---------------------------------------------- */}
      </header>
    </React.Fragment>
  );
};

export default Navbar;
