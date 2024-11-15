import React from "react";
import Layout from "../components/layout/Layout";

import Hero from "../components/hero_page_components/Hero";
import Header from "../components/hero_page_components/Header";
import FeatureSlider from "../components/hero_page_components/FeatureSlider";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeatureSlider />
    </>
  );
};

export default Layout()(Home);
