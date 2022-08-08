import "./hero-section.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import heroImg from "../../assets/images/hero.jpg";

const HeroSection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2>
                Discover Digital art And Collect
                <span> sell extraordinary</span> NFTs
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
                veniam saepe delectus facere assumenda molestiae quas magnam
                inventore magni possimus.
              </p>

              <div className="hero__btns d-flex align-items-center gap-4">
                <button className="explore__btn d-flex align-items-center gap-2">
                  <i class="ri-rocket-line"></i>
                  <Link to="/market">Explore</Link>
                </button>

                <button className="create__btn d-flex align-items-center gap-2">
                  <i class="ri-ball-pen-line"></i>
                  <Link to="/create">Create</Link>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
