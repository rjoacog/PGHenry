import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts, orderByPrice, addCart } from "../actions/creates";
import Card from "./Card";
import "../css/Home.css";
import { Select } from '@chakra-ui/react'
import Paginado from './Paginado'

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart)
  const [price, setPrice] = useState("")
 

  
  const addToCart = (payload) => {
    console.log(payload)
     dispatch(addCart(payload))
  }


  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);
  const indexOfLastProduct = currentPage * productsPerPage 
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage 
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

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

      <div className="containerPaginadoAndFilters">

        <div className='selectPrice'>
          <Select placeholder='Ordenar' width="150px" mt={"10"} mb="10" ml={"10"} onChange={handlePrice}>
              <option value='+P'>Mayor Precio</option>
              <option value='-P'>Menor Precio</option>
          </Select>
        </div>

        <div className="paginado">
          <Paginado
            productsPerPage={productsPerPage}
            allProducts={products.length}
            paginado={paginado}
            />
        </div>
      </div>


      <div className="cards">        
        {products ? (
          currentProducts.map((p) => {
            return (
              <div key={p._id}>
                <Card
                  img={p.image}
                  brand={p.brand}
                  model={p.model}
                  color={p.color}
                  price={p.price}
                  _id={p._id}
                  addToCart={addToCart}
                />
              </div>
            );
          })
        ) : (
          <h1>Products not found</h1>
        )}
      </div>

    </div>
  )
}

export default Home;
