import React, { useState, useEffect } from "react";
import "../styles/modal.css";
import img from "../assets/contact.png";
import mobimg from "../assets/home/mob.png";
import { ButtonBlack } from "./index";
import { ValidationError, useForm } from "@formspree/react";
import giff from "../assets/icons8-tick (1).gif";

const ContactModal = ({ CloseContact }) => {
  const [state, handleSubmit] = useForm("xvojareb");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to control success message display

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessMessage(true); // Display success message when form submission succeeds
      setTimeout(() => {
        setShowSuccessMessage(false); // Hide success message after 2 seconds
      }, 2000);
    }
  }, [state.succeeded]);

  // if (state.succeeded) {
  //   return (
  //     <div>
  //       <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full modal-container z-[70]">
  //         <div className="relative bg-white rounded-lg xs:w-[80%] md:max-w-md md:min-w-[50vw] lg:max-w-md lg:min-w-[30vw] ">
  //           <div className="px-[1.5rem] py-[2rem]">
  //             <img className="m-auto mb-4" src={giff} />
  //             <h3 className="text-center font-semibold">
  //               {" "}
  //               Kindly be informed that your correspondence has been dispatched.
  //             </h3>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full modal-container z-[70]">
      <div className=" relative bg-white rounded-lg xs:w-[80%] md:max-w-md md:min-w-[70vw] lg:max-w-md lg:min-w-[50vw] max-h-[85vh] min-h-[50vh]">
        {/* @-content */}
        <div className="xs:flex flex-col-reverse md:grid grid-cols-6 relative">
          <div className="col-span-4 p-5 xs:text-left">
            <h1 className="xs:text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] fontBoldAlupak md:mb-4 lg:mb-6 xs:mb-4 text-gray-800 lg:mt-4">
              Contact Us
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="md:grid grid-cols-1 lg:grid-cols-2 md:gap-2 lg:gap-4">
                {/* 1 */}
                <div className="mb-2">
                  <label
                    for="text"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    First Name<span className="text-[#ffd303]">*</span>
                  </label>
                  <input
                    id="First_Name"
                    name="First Name"
                    type="text"
                    className="bg-white border border-gray-300 text-gray-900 text-sm outline-none block w-full p-2.5"
                    required
                  />
                </div>
                {/* 2 */}
                <div className="mb-2">
                  <label
                    for="text"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Last Name<span className="text-[#ffd303]">*</span>
                  </label>
                  <input
                    id="Last_Name"
                    name="Last Name"
                    type="text"
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
                    Email address<span className="text-[#ffd303]">*</span>
                  </label>
                  <input
                    id="Email"
                    name="Email"
                    type="email"
                    className="bg-white border border-gray-300 text-gray-900 text-sm outline-none block w-full p-2.5"
                    required
                  />
                </div>

                <ValidationError
                  field="email"
                  prefix="Email"
                  errors={state.errors}
                />
                {/* 4 */}
                <div className="mb-2 col-span-2">
                  <label
                    for="text"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Message
                  </label>
                  <textarea
                    id="Message"
                    name="Message"
                    type="text"
                    className="bg-white border border-gray-300 text-gray-900 text-sm outline-none block w-full p-2.5"
                    required
                  />
                </div>
              </div>

              <div className="xs:mt-4 lg:mt-8 float-right">
                <ButtonBlack
                  value={"Submit"}
                  type="submit"
                  disabled={state.submitting}
                />
              </div>
            </form>
          </div>
          {/* ------------------------------------------- */}
          <div className="col-span-2">
            <img
              src={img}
              className="md:h-[100%] rounded-br-lg rounded-tr-lg md:block xs:hidden "
            />
            <img
              src={mobimg}
              className="rounded-t-lg xs:block md:hidden w-full h-[8rem] object-cover"
            />
          </div>
        </div>
        {/* @-close button */}
        <div
          className="block text-right cursor-pointer text-xl absolute xs:top-[-2.5%] md:top-[-3%] xs:right-[-5%] md:right-[-3%]"
          onClick={CloseContact}
        >
          <span className="text-white bg-[#3f3f46] rounded-full xs:px-[.6rem] xs:py-[6px] lg:px-3 lg:py-[.4rem]">
            {" "}
            &times;
          </span>
        </div>
      </div>

      {/* ----------------------------------- */}

      {showSuccessMessage && ( // Conditionally render success message
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 z-[90] bg-gray-900">
          <div className="bg-white rounded-lg xs:p-4 lg:p-5 xs:w-[70vw] lg:w-[30vw]">
            <img className="m-auto mb-4" src={giff} alt="Success animation" />
            <h3 className="text-center font-semibold z-[90] relative xs:text-sm lg:text-base">
              Kindly be informed that your correspondence has been dispatched.
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactModal;
