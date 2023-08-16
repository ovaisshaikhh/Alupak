import React, { useState, useEffect, useRef } from "react";

const Tabs = ({ tabs, setActiveTab, scrollToSection, activeTab }) => {
  const headerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = headerRef.current.clientHeight;
      setIsScrolled(window.scrollY > headerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
    scrollToSection(index);
  };

  return (
    <div
      ref={headerRef}
      className={`${
        isScrolled
          ? "bg-white fixed top-[8%] w-full shadow-lg pt-6 py-4 z-[10] tabsscroll"
          : "py-8 pb-12"
      } tabs flex justify-between lg:px-28 xsm:px-80  xs:hidden lg:flex`}
    >
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={
            activeTab === index
              ? "active px-4 text-[#FBD404] font-bold tabsUnderline"
              : "px-4 text-[#4b5563] font-bold"
          }
          onClick={() => handleTabClick(index)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
