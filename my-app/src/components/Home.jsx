import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts, orderByPrice } from "../actions/creates";
import Card from "./Card";
import "../css/Home.css";
import { Select } from '@chakra-ui/react'

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const[price, setPrice] = useState("")

  function handlePrice(e) {
    e.preventDefault(e);
    dispatch(orderByPrice(e.target.value));
    setPrice(`Ordenado ${e.target.value}`);
}

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="containerHome">
      <Select placeholder='Ordenar' width="150px" mt={"10"} mb="10" ml={"10"} onChange={handlePrice}>
          <option value='+P'>Mayor Precio</option>
          <option value='-P'>Menor Precio</option>
        </Select>
      <div className="cards">        
        {products ? (
          products.map((p) => {
            return (
              <div key={p._id}>
                <Link
                  to={"/" + p._id}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    img={p.image}
                    brand={p.brand}
                    model={p.model}
                    color={p.color}
                    price={p.price}
                  />
                </Link>
              </div>
            );
          })
        ) : (
          <h1>Products not found</h1>
        )}
      </div>
    </div>
  );
}

export default Home;
