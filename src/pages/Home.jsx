import React from "react";
import { Container } from "react-bootstrap";
import HeroSection from "../components/Ui/HeroSection";
import SellerSection from "../components/Ui/Seller-section/SellerSection";
import TrendingSection from "../components/Ui/Trending-section/TrendingSection";
import LiveAction from "./../components/Ui/Live-action/LiveAction";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAction />
      <SellerSection />
      <TrendingSection />
    </>
  );
};

export default Home;
