import React from "react";

const Button = ({ value, onClick }) => {
  return (
    <button
      onClick={(event) => onClick(event)}
      className=" bg-[#ffd303] rounded-full font-bold md:text-xs leading-5 lg:px-[1.6rem] lg:py-[.6rem] lg:pb-[.5rem] md:px-[20px] md:py-[8px] sx:px-[20px] sx:py-[7px] sx:text-xs hover:bg-[#fde047]"
    >
      <span> {value}</span>
    </button>
  );
};

export default Button;
