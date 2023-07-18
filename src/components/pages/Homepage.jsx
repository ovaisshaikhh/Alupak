// import React from 'react';
import React from "react";
import { Banner, HomeSecond, HomeAbout, HomeUsps, HomeIndustries, VisibilityComponent  } from "../index";

const Homepage = () => {
  return (
    <React.Fragment>
      <Banner />
      <HomeSecond />
      <HomeAbout />
      <HomeUsps />
      <HomeIndustries />
      {/* <VisibilityComponent /> */}
    </React.Fragment>
  );
};

export default Homepage;
