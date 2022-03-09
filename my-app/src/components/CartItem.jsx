import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Card.css";

export default function CartItem({img, brand, model, color, price, _id, quantity, delFromCart}) {
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
          <h3>${price} x {quantity} = $ {price * quantity} </h3>
        </div>
        <button onClick={() => delFromCart(_id, true)}>Eliminar Uno</button>
        <button onClick={() => delFromCart(_id)}>Eliminar Todos</button>
      </div>
      </div>
  )
}
