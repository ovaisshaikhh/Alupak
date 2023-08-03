import React, { useState } from "react";
import { Tabs, ContentSection } from "../index";

const PageNotFound = () => {
  const tabs = [
    { title: "Section 1" },
    { title: "Section 2" },
    { title: "Section 3" },
    { title: "Section 4" },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const scrollToSection = (index) => {
    const section = document.getElementById(`section-${index}`);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <Tabs
        tabs={tabs}
        setActiveTab={setActiveTab}
        scrollToSection={scrollToSection}
      />
      <div className="content">
        {tabs.map((tab, index) => (
          <ContentSection
            key={index}
            title={tab.title}
            isActive={activeTab === index}
            id={`section-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PageNotFound;
