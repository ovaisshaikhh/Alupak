import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/main.css";
import Socials from "./Socials";
import "../styles/modal.css";

const MobileMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleClickNav = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      // className={`${
      //   isOpen ? "drawer-enter-active" : "drawer-exit-active"
      // } fixed inset-0 bg-black bg-opacity-50 z-50 shadow-lg`}
      className={` ${isOpen ? "fixed inset-0 bg-black bg-opacity-50 z-50 shadow-lg modal-container" : ""
     }  `}
      onClick={onClose}
    >
      <div
        // className="fixed top-0 left-0 bottom-0 w-[70%] bg-black opacity-80 z-20 rounded-r-[2rem] shadow-lg transform translate-x-0 transition-transform ease-in-out duration-300"
        className={`drawer-enter fixed top-0 left-0 bottom-0 w-[70%] bg-black opacity-80 z-20 rounded-r-[2rem] shadow-lg ${
          isOpen ? "drawer-enter-active" : "drawer-exit-active"
        }`}
      >
        <div className="p-4">
          <h1 className="text-white text-[1.5rem] font-bold">MENU</h1>
          <span className="text-gray-600 px-3 py-2 text-[2rem] absolute top-0 right-0">
            {" "}
            &times;
          </span>
        </div>
        <hr />

        <div className="p-4 ">
          <ul className="flex flex-col gap-4">
            <li
              className="md:px-2 lg:px-4 tracking-wider"
              onClick={handleClickNav}
            >
              <NavLink exact to="/" className="text-white">
                Home
              </NavLink>
            </li>
            <li
              className="md:px-2 lg:px-4 tracking-wider"
              onClick={handleClickNav}
            >
              <NavLink exact to="/products" className="text-white">
                Products
              </NavLink>
            </li>
            <li
              className="md:px-2 lg:px-4 tracking-wider"
              onClick={handleClickNav}
            >
              <NavLink exact to="/downloads" className="text-white">
                Downloads
              </NavLink>
            </li>
            <li
              className="md:px-2 lg:px-4 tracking-wider"
              onClick={handleClickNav}
            >
              <NavLink exact to="/about-us" className="text-white">
                About Us
              </NavLink>
            </li>
            <li
              className="md:px-2 lg:px-4 tracking-wider"
              onClick={handleClickNav}
            >
              <NavLink exact to="/careers" className="text-white">
                Careers
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="absolute w-full bottom-[1%]">
          <hr />
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
