import "./wallets.css";
import React from "react";
import CommonSection from "../components/Ui/Common-section/CommonSection";
import { Container, Row, Col } from "react-bootstrap";

const wallet__data = [
  {
    title: "Bitcoin",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non ipsa consequuntur, ipsum ut sequi",
    icon: "ri-bit-coin-line",
  },

  {
    title: "Coinbase",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non ipsa consequuntur, ipsum ut sequi",
    icon: "ri-coin-line",
  },

  {
    title: "Metamask",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non ipsa consequuntur, ipsum ut sequi",
    icon: "ri-money-cny-circle-line",
  },

  {
    title: "Etherum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non ipsa consequuntur, ipsum ut sequi",
    icon: "ri-money-pound-circle-line",
  },
];

const Wallets = () => {
  return (
    <>
      <CommonSection title="Connect Wallet" />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5" text-center>
              <div className="w-50">
                <h3 className="text-light">Connect Youyr Wallet</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur qui culpa vero nulla quasi dolorem repudiandae
                  deserunt distinctio consequatur eveniet accusamus vitae,
                  molestiae
                </p>
              </div>
            </Col>

            {wallet__data.map((item, index) => (
              <Col lg="3" md="4" sm="6" key={index} className="mb-4">
                <div className="wallet__item">
                  <span>
                    <i class={item.icon}></i>
                  </span>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Wallets;
