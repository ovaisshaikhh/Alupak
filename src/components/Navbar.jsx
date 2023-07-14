import React from "react";
import logo from "../assets/Alupak logo.svg";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./index";
import { useNavigate } from "react-router-dom";
import "../styles/main.css";

const Navbar = () => {
  const navigate = useNavigate();
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
            <li className="px-4 ">
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

        <div>
          <button className="px-8">
            <i class="fa fa-search text-white"></i>
          </button>
          <Button value={"Contact Us"} onClick={() => navigate("/careers")} />
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
