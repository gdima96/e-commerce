import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        <div className="descriptionbox-description">
          <p>An e-commerce website is an online platform...</p>
          <p>E-commerce websites typically display products ...</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
