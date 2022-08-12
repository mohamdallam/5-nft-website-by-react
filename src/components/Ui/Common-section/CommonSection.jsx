import "./common-section.css";
import React from "react";
import { Container } from "react-bootstrap";

const CommonSection = ({ title }) => {
  return (
    <section className="common-section">
      <Container className="text-center">
        <h2>{title}</h2>
      </Container>
    </section>
  );
};

export default CommonSection;
