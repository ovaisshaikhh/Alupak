import React, { useRef } from "react";
import { Button } from "../components/index";

const CareersForm = () => {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
  };
  return (
    <div className="xs:mx-2 md:mx-20 my-8">
      <h1 className="text-[#3f3f46] fontBoldAlupak xs:text-[2rem] md:text-[2rem] font-black text-center my-4">
        Join Our Team
      </h1>

      <div className="lg:grid grid-cols-2 gap-4 xll:mx-[20rem] lg:mx-[10rem] xs:mx-[2rem]">
        {/* 1 */}
        <div className="mb-2">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="bg-white border border-gray-300 text-gray-900 text-sm outline-none block w-full p-2.5"
            required
          />
        </div>
        {/* 2 */}
        <div className="mb-2">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email<span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            className="bg-white border border-gray-300 text-gray-900 text-sm outline-none block w-full p-2.5"
            required
          />
        </div>
        {/* 3 */}
        <div className="mb-2 col-span-2">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Phone Number<span className="text-red-600">*</span>
          </label>
          <input
            type="telephone"
            className="bg-white border border-gray-300 text-gray-900 text-sm outline-none block w-full p-2.5"
            required
          />
        </div>
        {/* 4 */}
        <div className="mb-2 col-span-2">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Area of Expertise<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="bg-white border border-gray-300 text-gray-900 text-sm outline-none block w-full p-2.5"
            required
          />
        </div>

        {/* 5 */}
        <div className="mb-0 col-span-2">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Resume/CV (5mb max) <span className="text-red-600">*</span>
          </label>
          <div className="pb-4 bg-white border border-gray-300 text-gray-900 text-sm outline-none w-full p-2.5 flex justify-center">
            <input
              ref={inputRef}
              onChange={handleFileInputChange}
              type="file"
              accept="application/pdf"
              required
              style={{ display: "none" }}
            />

            <button
              onClick={handleButtonClick}
              className="text-xs font-semibold block text-center"
            >
              <i className="far fa-arrow-alt-circle-up text-gray-400 text-xl"></i>{" "}
              <br />
              <span className="text-center">Drop file here</span>
              <br /> or <span className="underline">Select file</span>
            </button>
          </div>
        </div>

        <div className="col-span-2 flex justify-center mt-8">
          <Button value={"Submit Application"} />
        </div>
      </div>
      {/* <div className="col-start-2 grid justify-end contact-btn mb-10 xll:mx-[20rem] lg:mx-[10rem] xs:mx-[2rem]"> */}
    </div>
  );
};

export default CareersForm;
