import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Profile from "./assets/components/Profile";
import WorkProcess from "./assets/components/WorkProcess";
import Portfolio from "./assets/components/Portfolio";
import Blog from "./assets/components/Blog";
import WhatIDo from "./assets/components/WhatIDo";
import ErrorPage from "./pages/ErrorPage";
import FrontendLayout from "./layouts/FrontendLayout";
import Discuss from "./assets/components/Discuss";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<FrontendLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<Profile />} />
            <Route path="/workprocess" element={<WorkProcess />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<WhatIDo />} />
          </Route>
          <Route path="/contact" element={<FrontendLayout />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
