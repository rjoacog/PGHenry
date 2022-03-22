import React from "react";
import { useDispatch } from "react-redux";
import { filterByBrand, filterByByGender,filterByByColor, getProducts } from "../actions/creates";
import "../css/SlideBar.css";
import { Select } from '@chakra-ui/react'


function SildeBar() {
  const dispatch = useDispatch();
  
  const handlefilterByBrand = (e) => {
    e.preventDefault();
    dispatch(filterByBrand(e.target.value));
  };

  const handlefilterByGender = (e) => {
    e.preventDefault();
    dispatch(filterByByGender(e.target.value));
  };

  const handlefilterByColor = (e) => {
    e.preventDefault();
    dispatch(filterByByColor(e.target.value));
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
          {/* <option value='unisex'>Unisex</option> */}
        </Select>
      </div>

      <div>
        <Select placeholder="Colors" onChange={(e) => handlefilterByColor(e)}>
          <option value='all'>All</option>
          <option value='white'>White</option>
          <option value='black'>Black</option>
          <option value='blue'>Blue</option>
          <option value='red'>Red</option>
          <option value='yellow'>Yellow</option>
          <option value='light-blue'>Light-blue</option>
          <option value='orange'>Orange</option>
          <option value='grey'>Grey</option>
          <option value='beige'>Beige</option>
          <option value='pink'>Pink</option>
          <option value='green'>Green</option>
          <option value='violet'>Violet</option>
        </Select>
      </div>
    </div>
  );
}

export default SildeBar;
