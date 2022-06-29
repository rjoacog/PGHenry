import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, orderByPrice, addCart, getAllUsers, userData } from "../actions/creates";
import { clienteAxios } from "../config/clienteAxios";
import Card from "./Card";
import SildeBar from "./SildeBar";
import "../css/Home.css";
import { Select, Flex, Box, GridItem, Grid } from '@chakra-ui/react';
import Paginado from './Paginado'
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const users = useSelector((state) => state.allUsers);
  const [price, setPrice] = useState("");
  const { user, isAuthenticated } = useAuth0();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);
  const indexOfLastProduct = currentPage * productsPerPage 
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage 
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  if(isAuthenticated) {
    try {
      const currentUser = users.filter((el) => el.email === user.email);
      if(currentUser.length === 0) {
        clienteAxios.post("/user", {
          email: user.email
        })
      }
    }
    catch(error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    dispatch(getProducts());
    localStorage.setItem("allProduct", JSON.stringify(products));
    dispatch(getAllUsers());
    
  }, [dispatch]);

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

      <Grid templateColumns='repeat(2, 1fr)' >

        <GridItem >
          <Select placeholder='Ordenar' className="orderButton" width="110px" mt={"8"} mb="4" ml={"4"} variant="filled" onChange={handlePrice}>
              <option value='+P'>Mayor Precio</option>
              <option value='-P'>Menor Precio</option>
          </Select>
        </GridItem>
        <GridItem >
          <Paginado
            productsPerPage={productsPerPage}
            allProducts={products.length}
            paginado={paginado}
            currentPage={currentPage}
          />
        </GridItem>
      </Grid>

      <div style={{display:'flex', flexDirection:'row',}}>
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


