// import React from 'react';
import React from "react";
import {
  Banner,
  HomeSecond,
  HomeAbout,
  HomeUsps,
  HomeIndustries,
} from "../index";

const Homepage = () => {
  return (
    <React.Fragment>
      <Banner />
      <HomeSecond />
      <HomeAbout />
      <HomeUsps />
      <HomeIndustries />
    </React.Fragment>
  );
};

export default Homepage;
