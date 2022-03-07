import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../actions/creates";
import Card from "./Card";
import "../css/Home.css";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (   
    <div className="containerHome">
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
