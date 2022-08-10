import "./stepsection.css";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const StepSection = () => {
  const STEP__DATA = [
    {
      title: "setup your wallet",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde eos quaerat sapiente",
      icon: "ri-wallet-line",
    },

    {
      title: "Create Your Wallet",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde eos quaerat sapiente",
      icon: "ri-layout-masonry-line",
    },

    {
      title: "Add Your NFTs",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde eos quaerat sapiente",
      icon: "ri-image-line",
    },

    {
      title: "List them for sale",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde eos quaerat sapiente",
      icon: "ri-list-check",
    },
  ];

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <h3 className="step__title">Create and sell your NFTS</h3>
          </Col>

          {STEP__DATA.map((item, index) => (
            <Col key={index} lg="3" md="4" sm="6" className="mb-4">
              <div className="single__step__item">
                <span>
                  <i class={item.icon}></i>
                  <div className="step__item__content">
                    <h5>
                      <Link to="/wallet">{item.title}</Link>
                    </h5>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;
