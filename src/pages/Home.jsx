import React from "react";
import { Container } from "react-bootstrap";
import HeroSection from "../components/Ui/HeroSection";
import LiveAction from "./../components/Ui/Live-action/LiveAction";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAction />
    </>
  );
};

export default Home;
