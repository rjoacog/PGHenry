import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, orderByPrice, addCart } from "../actions/creates";
import Card from "./Card";
import SildeBar from "./SildeBar";
import "../css/Home.css";
import { Select } from '@chakra-ui/react'
import Paginado from './Paginado'
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [price, setPrice] = useState("")
  
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);
  const indexOfLastProduct = currentPage * productsPerPage 
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage 
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
  
  useEffect(() => {
    dispatch(getProducts());
    localStorage.setItem("allProduct", JSON.stringify(products))
  }, [dispatch, products]);

  const addToCart = (payload) => {
    dispatch(addCart(payload))
  }
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  function handlePrice(e) {
    e.preventDefault(e);
    dispatch(orderByPrice(e.target.value));
    setPrice(`Ordenado ${e.target.value}`);
  }



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

      <div style={{display:'flex', flexDirection:'row'}}>
        <SildeBar/>
        
        <div className="cards">        
          {products ? (
            currentProducts.map((p) => {
              return (
                <div key={p._id}>
                  <Link to={'/'+ p._id} style={{textDecoration:'none'}}>
                    <Card
                        img={p.image}
                        brand={p.brand}
                        name={p.name}
                        color={p.color}
                        price={p.price}
                        _id={p._id}
                        addToCart={addToCart}
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

    </div>
  )
}

export default Home;


