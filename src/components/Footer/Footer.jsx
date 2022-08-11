import "./footer.css";
import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const MY__ACCOUNT = [
  {
    display: "Author Profile",
    url: "/seller-profile",
  },

  {
    display: "Create Item",
    url: "/create",
  },

  {
    display: "Collection",
    url: "/market",
  },

  {
    display: "Edit Profile",
    url: "/edit-profile",
  },
];

const RESOURSES = [
  {
    display: "Help Center",
    url: "#",
  },

  {
    display: "Partner",
    url: "#",
  },

  {
    display: "Community",
    url: "#",
  },

  {
    display: "Activity",
    url: "#",
  },
];

const COMPANY = [
  {
    display: "About",
    url: "#",
  },

  {
    display: "Career",
    url: "#",
  },

  {
    display: "Ranking",
    url: "#",
  },

  {
    display: "Contact Us",
    url: "/contact",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" sm="6" className="mb-4">
            <div className="logo">
              <h2 className="d-flex gap-2 align-items-center">
                <span>
                  <i class="ri-fire-fill"></i>
                </span>
                NFTs
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid id vitae magnam molestias sed est sapiente provident
                fugiat
              </p>
            </div>
          </Col>

          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>My Account</h5>
            <ListGroup className="list__group">
              {MY__ACCOUNT.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>Resourses</h5>
            <ListGroup className="list__group">
              {RESOURSES.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="2" md="3" sm="6">
            <h5>Company</h5>
            <ListGroup className="list__group">
              {COMPANY.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" sm="6" className="mb-4">
            <h5>Newsletter</h5>
            <input type="text" className="newsletter" placeholder="Email" />
            <div className="social__links d-flex gap-3 align-items-center mt-4">
              <span>
                <i class="ri-facebook-line"></i>
                <Link to="#"></Link>
              </span>

              <span>
                <i class="ri-linkedin-fill"></i>
                <Link to="#"></Link>
              </span>

              <span>
                <i class="ri-instagram-line"></i>
                <Link to="#"></Link>
              </span>

              <span>
                <i class="ri-twitter-line"></i>
                <Link to="#"></Link>
              </span>

              <span>
                <i class="ri-whatsapp-line"></i>
                <Link to="#"></Link>
              </span>

              <span>
                <i class="ri-telegram-line"></i>
                <Link to="#"></Link>
              </span>
            </div>
          </Col>

          <Col lg="12" className="mt-4 text-center">
            <p className="copyright">
              Copyright 2022 Developed by Mohamed Ahmed @Allam Tech All Right
              Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
