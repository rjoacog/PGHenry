import React from "react";
import "../css/Card.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from "react-router-dom"

function Card({ img, brand, model, color, price, _id, addToCart }) {
  return (
    <div className="containerCard">
      <div className="card">
      <Link
                  to={"/" + _id}
                  style={{ textDecoration: "none" }}
                >
        <img src={img} alt="img not found" />
      </Link>
        <div className="detailCardHome">
          <h3>{color} colors</h3>
          <h2>
            {brand} {model}
          </h2>
          <h3>${price}</h3>
        </div>
      </div>
      <button onClick={() => addToCart(_id)}>
        <AddShoppingCartIcon />
      </button>
    </div>
  );
}

export default Card;
