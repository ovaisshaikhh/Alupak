import React from "react";
import "../styles/modal.css";

const ContactModal = ({ onClose }) => {
  return (
    <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full modal-container">
      <div className="bg-white p-5 rounded-lg xs:w-[80%] md:max-w-md md:min-w-[70vw] lg:max-w-md lg:min-w-[50vw] min-h-[50vh] pt-0">
        {/* close button */}
        <div
          className="block text-right cursor-pointer text-xl relative top-[-17px] right-[-38px]"
          onClick={onClose}
        >
          <span className="text-white bg-[#3f3f46] rounded-full px-3 py-2">
            {" "}
            &times;
          </span>
        </div>
        {/* content */}
        Contact
      </div>
    </div>
  );
};

export default ContactModal;
