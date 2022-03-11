import React from "react";
import "../css/Card.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from "react-router-dom"

function Card({ img, brand,name, price, _id, addToCart }) {
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
          <h2>
            {brand} {name}
          </h2>
          <h3>${price}</h3>
        </div>
      </div>
      <br />
      <button onClick={() => addToCart(_id)}>
        <AddShoppingCartIcon />
      </button>
    </div>
  );
}

export default Card;
