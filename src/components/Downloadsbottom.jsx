import React from "react";
import db from "../assets/downloads/Mask Group 31.png";
import { Button } from "./index";

const Downloadsbottom = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-[#F2F2F2] px-16 py-12">
        <h1 className="fontBoldAlupak text-[1.9rem] mb-4">
          DO YOU WANT TO CUSTOMIZE YOUR PRODUCTS?
        </h1>
        <p className="mb-4">
          Alupak believes in providing packaging solutions to fit all needs made
          for different types of industrial standards and requirements. Hence,
          we are pledged to manufacture aluminum products customized for every
          need, and every industry and secure the quality and properties of each
          produced goods. If you are looking for such a customized solution,
          please feel free to email us your requirements.
        </p>

        <Button value={"GET IN TOUCH WITH US"} />
      </div>
      <div>
        <img className="object-none" src={db} />
      </div>
    </div>
  );
};

export default Downloadsbottom;
