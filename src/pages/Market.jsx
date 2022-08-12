import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommonSection from "../components/Ui/Common-section/CommonSection";

const Market = () => {
  return (
    <>
      <CommonSection title={"Market Place"} />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="market__product__filter">
                <div className="filter__left">
                  <div className="all__category__filter">
                    <h6>All Categories</h6>
                    <select>
                      <option value="art">Art</option>
                      <option value="music">music</option>
                      <option value="domain-name">domain-name</option>
                      <option value="virtual-world">virtual-world</option>
                      <option value="trending-card">trending-card</option>
                    </select>
                  </div>

                  <div className="all__item__filter">
                    <h6>All Items</h6>
                    <select>
                      <option value="art">Art</option>
                      <option value="music">music</option>
                    </select>
                  </div>
                </div>

                <div className="filter__right"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Market;

// 14 min
