import React from "react";
import Layout from "../components/layout/Layout";

import Hero from "../components/hero_page_components/Hero";
import Header from "../components/hero_page_components/Header";
import FeatureSlider from "../components/hero_page_components/FeatureSlider";
import { FAQs } from "../components/hero_page_components/FAQ";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeatureSlider />
      <FAQs />
    </>
  );
};

export default Layout()(Home);
