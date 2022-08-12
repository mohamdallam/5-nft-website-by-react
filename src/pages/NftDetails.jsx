import "./nftdetails.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommonSection from "../components/Ui/Common-section/CommonSection";
import { NFT__DATA } from "../assets/data/data";
import { useParams, Link } from "react-router-dom";
import LiveAction from "../components/Ui/2-Live-action/LiveAction";

const NftDetails = () => {
  const { id } = useParams();

  const singleNft = NFT__DATA.find((item) => item.id === id);

  return (
    <>
      <CommonSection title={singleNft.title} />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <img
                src={singleNft.imgUrl}
                alt=""
                className="single__nft__img w-100"
              />
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="single__nft__content">
                <h2>{singleNft.title}</h2>
                <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                  <div className="d-flex align-items-center gap-4 single__nft__seen">
                    <span>
                      <i class="ri-eye-line"> 234</i>
                    </span>
                    <span>
                      <i class="ri-heart-line"></i>
                    </span>
                  </div>

                  <div className="d-flex align-items-center gap-4 single__nft__more">
                    <span>
                      <i class="ri-send-plane-line"></i>
                    </span>
                    <span>
                      <i class="ri-more-2-line"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="nft__creator d-flex gap-3 align-items-center ">
                <div className="creator__img">
                  <img src={singleNft.creatorImg} alt="" className="w-100" />
                </div>

                <div className="creator__detail">
                  <p>Created By</p>
                  <h6>{singleNft.creator}</h6>
                </div>
              </div>

              <p className="my-4">{singleNft.desc}</p>
              <button className="singleNft-btn  d-flex  align-items-center gap-2 w-100">
                <i class="ri-shopping-bag-line"></i>
                <Link to="/wallet">place a Bid</Link>
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      <LiveAction />
    </>
  );
};

export default NftDetails;
