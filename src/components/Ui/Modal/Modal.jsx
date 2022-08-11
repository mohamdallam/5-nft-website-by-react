import "./modal.css";
import React from "react";

const Modal = ({ ShowModal }) => {
  return (
    <div className="model__wrapper">
      <div className="single__model">
        <span className="close__modal">
          <i class="ri-close-line" onClick={() => ShowModal(false)}></i>
        </span>

        <h6 className="text-center text-light">Place a Bid</h6>
        <p className="text-center text-light">
          You must bit a least <span className="money">5 ETH</span>
        </p>

        <div className="input__item mb-4">
          <input type="number" placeholder="00:00 ETH" />
        </div>

        <div className="input__item mb-3">
          <h6>Enter Qunatity , 7 Available</h6>
          <input type="number" placeholder="Enter Quantity" />
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <p>You must bid at least</p>
          <span className="money">5 ETH</span>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <p>Service Fee</p>
          <span className="money">1 ETH</span>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <p>Total Bid Amount</p>
          <span className="money">3 ETH</span>
        </div>

        <button className="place__bid-btn">place a Bid</button>
      </div>
    </div>
  );
};

export default Modal;
