import React from "react";
import "../css/Card.css";

function Card({ img, brand, model, color, price }) {
  return (
    <div className="containerCard">
      <div className="card">
        <img src={img} alt="img not found" />
        
        <div className="detailCardHome">
          <h3>{color} colors</h3>
          <h2>
            {brand} {model}
          </h2>
          <h3>${price}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
