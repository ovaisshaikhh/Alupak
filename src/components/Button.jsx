import React from "react";

const Button = ({ value, onClick }) => {
  const handleClickNav = () => {
    window.scrollTo(0, 0);
  };
  function linkbtn(event) {
    onClick(event);
  }

  function handleClickBtn() {
    handleClickNav();
    linkbtn();
  }
  return (
    <button
      onClick={handleClickBtn}
      className=" bg-[#ffd303] rounded-full font-bold md:text-xs leading-5 lg:px-[1.6rem] lg:py-[.6rem] lg:pb-[.5rem] md:px-[20px] md:py-[8px] sx:px-[23px] sx:py-[7px] sx:pb-[5px] md:pb-[8px] sx:text-[.78rem] hover:bg-[#fde047]"
    >
      <span> {value}</span>
    </button>
  );
};

export default Button;
