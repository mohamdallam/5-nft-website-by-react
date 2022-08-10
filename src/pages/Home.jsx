import React from "react";

import HeroSection from "./../components/Ui/1-Hero-section/HeroSection";
import LiveAction from "../components/Ui/2-Live-action/LiveAction";
import SellerSection from "../components/Ui/3-Seller-section/SellerSection";
import TrendingSection from "../components/Ui/4-Trending-section/TrendingSection";
import StepSection from "./../components/Ui/5-Step-section/StepSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAction />
      <SellerSection />
      <TrendingSection />
      <StepSection />
    </>
  );
};

export default Home;
