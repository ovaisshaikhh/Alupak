import React from "react";

const ContentSection = ({ title, isActive, id, scrollToSection }) => {
  return (
      <div className={`content-section h-[100vh] bg-gray-200 my-8 ${isActive ? "active" : ""}`} id={id}>
        <h2>{title}</h2>
        <button onClick={scrollToSection}>Scroll to {title}</button>
      </div>
  );
};

export default ContentSection;
