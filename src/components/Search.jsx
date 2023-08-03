import React from "react";
import "../styles/modal.css";

const Search = ({ closeModal }) => {
  return (
    <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full modal-container">
      <div className="bg-white p-5 rounded-lg xs:w-[80%] md:max-w-md md:min-w-[70vw] lg:max-w-md lg:min-w-[50vw] min-h-[50vh] pt-0">
        {/* close button */}
        <div
          className="block text-right cursor-pointer text-xl relative top-[-17px] right-[-38px]"
          onClick={closeModal}
        >
          {/* <i class="fa fa-close text-white bg-[#3f3f46] rounded-full px-3 py-2"></i> */}
          <span className="text-white bg-[#3f3f46] rounded-full px-3 py-2">
            {" "}
            &times;
          </span>
        </div>
        {/* content */}
        <form>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full xs:p-2 xs:pl-10 md:p-4 lg:pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
              placeholder="Search documentation"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
