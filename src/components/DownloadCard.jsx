import React from "react";

const DownloadCard = ({ imageUrl, title, paragraph, link }) => {
  return (
    <div
      className="text-center border-2 border-[#ffd303] flex flex-col items-center p-6 hover:bg-[#ffd303] cursor-pointer
    transform xs:bg-[#ffd303] lg:bg-white transition duration-500 justify-between"
    >
      <div className="flex flex-col items-center">
        <div className="t4s-eff-border-run relative bg-[#F5F5F5] p-4 rounded-full w-[fit-content]">
          <img className="w-[2rem]" src={imageUrl} alt={title} />
        </div>
        <div className="xs:py-4 xs:px-8 md:py-2 md:px-2 lg:px-4 md:pt-2 xm:py-4 xm:px-8 xm:pt-8">
          <h6 className="font-bold xs:mb-2 text-lg md:mb-2 xm:mb-4">{title}</h6>
          <p className="xs:text-sm md:text-xs xm:text-sm">{paragraph}</p>
        </div>
      </div>

      <div>
        <a className="mt-6 text-xs underline" href={link}>
          Downloads <i className="text-[10px] fa fa-arrow-down"></i>
        </a>
      </div>
    </div>
  );
};

export default DownloadCard;
