import React from 'react'

const ProductGridCard = ({ imageUrl, title, paragraph }) => {
  return (
    <div className="container ">
    {/* visible */}
    <div className="div1">
      <img src={imageUrl} />
      <div
        onClick={toggleText}
        className="bg-[#ffd303] flex items-center justify-between px-4 py-2 font-semibold text-[#334155] cursor-pointer arrow"
      >
        <h6>Aluminum Cartridge</h6>
        <i className="fas fa-angle-up"></i>
      </div>
    </div>
    {/* collapsable yellow */}
    {showText && (
      <div
        className={`hidden-text div2 ${showText ? "open" : "closed"}`}
        onClick={toggleText}
      >
        <div className="info text-center py-8 px-10 bg-[#ffd303] div2">
          <img className="w-[20%] m-auto" src={v1} />
          <h1 className="font-bold my-3">Aluminum Cartridge</h1>
          <p className="text-sm mb-2">
            Aluminium tubes are unbreakable, clean, lightweight and
            compact. Valuable materials are dosed sparingly and
            hygienically.…appealing.
          </p>
          <ButtonBlack value={"Read More"} />
        </div>
      </div>
    )}
  </div>
  )
}

export default ProductGridCard