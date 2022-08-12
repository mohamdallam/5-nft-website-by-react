import "./create.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommonSection from "../components/Ui/Common-section/CommonSection";
import NftCard from "../components/Ui/Nft-card/NftCard";
import img from "../assets/images/img-01.jpg";
import avatar from "../assets/images/ava-01.png";

const item = {
  id: "04",
  title: "Guard",
  desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad id aliquid et molestiae nisi sit culpa autem nulla similique magni cumque, dolorem exercitationem est illum vero repudiandae illo itaque.",
  imgUrl: img,
  creator: "Mohamed Allam",
  creatorImg: avatar,
  currentBid: 7.89,
};

const Create = () => {
  return (
    <>
      <CommonSection title="Create Item" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <h5 className="mb-4 text-light">Preview Item</h5>
              <NftCard items={item} />
            </Col>

            <Col lg="9" md="8" sm="6">
              <div className="create__item">
                <form>
                  <div className="form__input">
                    <label htmlFor="">Upload File</label>
                    <input type="file" className="upload__input" />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Price</label>
                    <input
                      type="number"
                      placeholder="Enter Pricer For One Item (ETH)"
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Minimum Bid</label>
                    <input type="number" placeholder="Enter Minimum bid" />
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <div className="form__input w-50">
                      <label htmlFor="">Starting Data</label>
                      <input type="date" />
                    </div>

                    <div className="form__input w-50">
                      <label htmlFor="">Expiration Date</label>
                      <input type="date" />
                    </div>
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder="Enter Title" />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Description</label>
                    <textarea
                      name=""
                      id=""
                      rows="7"
                      placeholder="Enter Description"
                      className="w-100"
                    ></textarea>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Create;
