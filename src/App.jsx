import React from "react";
import Navbar from "./assets/components/Navbar";
import Banner from "./assets/components/Banner";
import Profile from "./assets/components/Profile";
import WorkProcess from "./assets/components/WorkProcess";
import Portfolio from "./assets/components/Portfolio";
import WorkTogether from "./assets/components/WorkTogether";
import Blog from "./assets/components/Blog";
import WhatIDo from "./assets/components/WhatIDo";
import Clients from "./assets/components/Clients";
import Testimonial from './assets/components/Testimonial';
import Discuss from "./assets/components/Discuss";
import Footer from './assets/components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Profile />
      <WorkProcess />
      <Portfolio />
      <WorkTogether />
      <Blog />
      <WhatIDo />
      <Clients />
      <Testimonial />
      <Discuss />
      <Footer />
    </>
  );
};

export default App;
