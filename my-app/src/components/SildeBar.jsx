import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByBrand, filterByByGender,filterByByColor, getProducts } from "../actions/creates";
import "../css/SlideBar.css";
import { Select } from '@chakra-ui/react'


function SildeBar() {
  const dispatch = useDispatch();
  
  const products = useSelector((s) => s.allProducts);
  const colors = products.map((p) => p.color);
  
 
  const handlefilterByBrand = (e) => {
    e.preventDefault();
    dispatch(filterByBrand(e.target.value));
  };

  const handlefilterByGender = (e) => {
    e.preventDefault();
    dispatch(filterByByGender(e.target.value));
  };


  return (
    <div className="bar">
      <button onClick={() => dispatch(getProducts())}>Clean Filters</button>
      <div>
        <Select placeholder='Brands' onChange={(e) => handlefilterByBrand(e)}>
         <option value ="all">All</option>
         <option value ="Nike">Nike</option>
         <option value ="Reebok">Reebok</option>
         <option value ="Adidas">Adidas</option>
         <option value ="Puma">Puma</option>
        </Select>
      </div>
      
      <div>
        <Select placeholder="Gender" onChange={(e) => handlefilterByGender(e)}>
          <option value='all'>All</option>
          <option value='Men'>Male</option>
          <option value='Women'>Female</option>
          <option value='unisex'>Unisex</option>
        </Select>
      </div>

    </div>
  );
}

export default SildeBar;
