import React from "react";
import { Link } from "react-router-dom";
import "../css/CardCarry.css";
import { DeleteIcon } from "@chakra-ui/icons";

import { Text } from "@chakra-ui/react";

export default function CartItem({
  img,
  brand,
  name,
  price,
  _id,
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
          <Text fontSize="2xl">
            ${price} x {quantity} = $ {price * quantity}{" "}
          </Text>
        </div>
        <br />
        <div className="removeCarry">
          <div id='deleteOne'>
            <button onClick={() => delFromCart(_id, true)} >
            Delete One 
            <br/>
            <DeleteIcon/>
            </button>
          </div>

          <div id='deleteAll'>
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
