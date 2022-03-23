import React from "react";
import "../css/Card.css";

function Card({ img, brand,name, price, _id, addToCart }) {
  return (
    <div className="containerCard">

      <div className="card">
        <img src={img} alt="img not found" />
        <div className="detailCardHome">
          <h2>
            {brand} {name}
          </h2>
          <h3>${price}</h3>
        </div>
      </div>      
          <button className="btn"
          >
            <i className="fa-solid fa-heart"></i>
          </button>
    </div>
  );
}

export default Card;
