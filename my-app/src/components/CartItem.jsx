import React from "react";
import { Link } from "react-router-dom";
import "../css/CardCarry.css";
import { DeleteIcon } from "@chakra-ui/icons";


export default function CartItem({
  img,
  brand,
  name,
  price,
  _id,
  size,
  quantity,
  delFromCart,
}) {
  return (
    <div className="containerCardCarry">
      <div className="cardCarry">
        <Link to={"/" + _id} style={{ textDecoration: "none" }}>
          <img src={img} alt="img not found" />
        </Link>

        <div className="detailCardCarry">
          <h2>
            {brand} {name}
          </h2>
          <h2>
            Size: {size}
          </h2>
          <h2>
            Price: u$d {price}
          </h2>
          <h2>
            Total x{quantity}: u$d {price * quantity}
          </h2>
        </div>
        <br />
        <div className="removeCarry">
          <div className="deleteOne">
            <button onClick={() => delFromCart(_id, true)} >
            Delete One 
            <br/>
            <DeleteIcon/>
            </button>
          </div>

          <div className="deleteAll">
            <button onClick={() => delFromCart(_id)}>
            Delete All 
            <br/>
            <DeleteIcon/>
            </button>
          </div>  
        </div>
      </div>

    </div>
  );
}
