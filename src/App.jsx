import React from "react";
import Navbar from "./assets/components/Navbar";
import Banner from "./assets/components/Banner";
import Profile from './assets/components/Profile';
import WorkProcess from './assets/components/WorkProcess';

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Profile/>
      <WorkProcess/>
    </>
  );
};

export default App;
