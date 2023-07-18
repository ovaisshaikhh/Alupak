import React from "react";
import "../styles/Button.css";

const Button = ({ value, onClick }) => {
  return (
    <button
      onClick={(event) => onClick(event)}
      // button draw-border
      className=" bg-[#ffd303] rounded-full font-bold md:text-xs leading-5 lg:px-[1.6rem] lg:py-[.6rem] lg:pb-[.5rem] md:px-[32px] md:py-[10px] sx:px-[20px] sx:py-[7px] sx:text-xs hover:bg-[#fde047]"
    >
      <span> {value}</span>
    </button>
  );
};

export default Button;
