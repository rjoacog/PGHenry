import axios from "axios";
import { GET_PRODUCTS, GET_PRODUCT_BY_ID, GET_BY_NAME } from "./types";

export function getProducts() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:4000/products");
    return dispatch({
      type: GET_PRODUCTS,
      payload: json.data,
    });
  };
}

export function getProductByID(id){
    return async function(dispatch){
        const json = await axios.get("http://localhost:4000/products/" + id);
        return dispatch({
            type: GET_PRODUCT_BY_ID,
            payload: json.data
        })
    }
}

export function getProductByName(payload) {
    return {
      type: GET_BY_NAME,
      payload,
    }
}
