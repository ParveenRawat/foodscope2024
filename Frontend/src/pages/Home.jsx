import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/hero_page_components/Hero";
import FeatureSlider from "../components/hero_page_components/FeatureSlider";
const Home = () => {
  return (<><Hero/>
  <FeatureSlider/></>);
};

export default Layout()(Home);
