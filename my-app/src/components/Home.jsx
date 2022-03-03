import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import getProducts from '../actions/creates'

function Home() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() =>{
    dispatch(getProducts())
  },[dispatch])


  return (
    <div>
      {products.map((p) => {
        return (
          <div key={p.id}>
            <Link to={"/products/" + p.id}>
              <Card
                img={p.img}
                brand={p.brand}
                model={p.model}
                color={p.color.length}
                price={p.price}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
