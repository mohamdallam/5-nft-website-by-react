import "./market.css";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommonSection from "../components/Ui/Common-section/CommonSection";

import NftCard from "../components/Ui/Nft-card/NftCard";
import { NFT__DATA } from "../assets/data/data";

const Market = () => {
  const [data, setData] = useState(NFT__DATA);

  const handleCategory = () => {};

  const handleItem = () => {};

  // Sorting Data By Hight Mid Low Rate
  const handleSort = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "high") {
      const filterData = NFT__DATA.filter((item) => item.currentBid >= 6);
      setData(filterData);
    }

    if (filterValue === "mid") {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid >= 5.5 && item.currentBid < 6
      );
      setData(filterData);
    }

    if (filterValue === "low") {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid >= 4.89 && item.currentBid < 50
      );
      setData(filterData);
    }
  };

  return (
    <>
      <CommonSection title={"Market Place"} />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="market__product__filter d-flex align-items-center justify-content-between">
                <div className="filter__left d-flex align-items-center gap-5">
                  {/* select 1 All Categories */}
                  <div className="all__category__filter">
                    <select onChange={handleCategory}>
                      <option>All Categories</option>
                      <option value="art">Art</option>
                      <option value="music">music</option>
                      <option value="domain-name">domain-name</option>
                      <option value="virtual-world">virtual-world</option>
                      <option value="trending-card">trending-card</option>
                    </select>
                  </div>

                  {/* select 2 All Item*/}
                  <div className="all__item__filter">
                    <select onChange={handleItem}>
                      <option>All Item</option>
                      <option value="single-item">single-item</option>
                      <option value="bundle">bundle</option>
                    </select>
                  </div>
                </div>

                {/* select 3 Filter Right */}
                <div className="filter__right">
                  <select onChange={handleSort}>
                    <option>Sort By</option>
                    <option value="hight">Hight Rate</option>
                    <option value="mid">Mid Rate</option>
                    <option value="low">Low Rate</option>
                  </select>
                </div>
              </div>
            </Col>

            {data.map((item) => (
              <Col lg="3" md="4" sm="6" className="mb-4" key={item.id}>
                <NftCard items={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Market;
