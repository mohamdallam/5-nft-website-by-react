import "./contact.css";
import React, { useRef } from "react";
import { Container, Col, Row } from "react-bootstrap";
import CommonSection from "../components/Ui/Common-section/CommonSection";

const Contacts = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const subjectRef = useRef("");
  const messageRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <CommonSection title="Contact" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" className="m-auto text-center">
              <h2>Drop a Message</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis inventore magnam iusto unde cumque, omnis sed incidunt
              </p>
              <div className="contact mt-4">
                <form onSubmit={handleSubmit}>
                  <div className="form__input">
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      ref={nameRef}
                    />
                  </div>

                  <div className="form__input">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      ref={emailRef}
                    />
                  </div>

                  <div className="form__input">
                    <input
                      type="text"
                      placeholder="Enter Subject"
                      ref={subjectRef}
                    />
                  </div>

                  <div className="form__input">
                    <textarea
                      rows="7"
                      placeholder="Write message"
                      ref={messageRef}
                    ></textarea>
                  </div>

                  <button className="send__btn">Send a Message</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contacts;
