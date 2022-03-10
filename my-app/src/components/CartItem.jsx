import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Card.css";
import {DeleteIcon} from "@chakra-ui/icons"
import {Text} from "@chakra-ui/react"


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
          <Text fontSize='2xl'>${price} x {quantity} = $ {price * quantity} </Text>
        </div>
        <br />
        <DeleteIcon as='button' cursor={"pointer"} onClick={() => delFromCart(_id, true)}></DeleteIcon><h1>Eliminar Uno</h1>
        <DeleteIcon as='button' cursor={"pointer"} onClick={() => delFromCart(_id)}></DeleteIcon><h1>Eliminar Todos</h1>
      </div>
      <br />
      </div>
  )
}
