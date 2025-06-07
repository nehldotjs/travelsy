import React from "react";
import "../customs/testimonnialcards.css";

function TestimonialCards({ id, img, name, header, comment }) {
  return (
    <div className="card-container" key={id}>
      <h3 className="card-header">{header}</h3>
      <p className="card-comment">{comment}</p>
      <div className="card-image-wrapper">
        <div className="card-image-container">
          <img src={img} alt="" className="cardimage" />
        </div>
        <p className="card-username">{name}</p>
      </div>
    </div>
  );
}

export default TestimonialCards;
