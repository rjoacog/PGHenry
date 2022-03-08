import axios from "axios";
import { GET_PRODUCTS, GET_PRODUCT_BY_ID, GET_BY_NAME, GET_BY_BRAND, ORDER_BY_PRICE } from "./types";

export function getProducts() {
    return async function (dispatch) {
        const json = await axios.get("http://localhost:4000/products");
        return dispatch({
            type: GET_PRODUCTS,
            payload: json.data,
        });
    };
}

export function getProductByID(id) {
    return async function (dispatch) {
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


export function orderByPrice(payload){
    return {
        type: ORDER_BY_PRICE,
        payload
    }
}