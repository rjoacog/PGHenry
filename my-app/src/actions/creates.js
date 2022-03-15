import axios from "axios";
import { GET_PRODUCTS, GET_PRODUCT_BY_ID, GET_BY_NAME, ORDER_BY_PRICE, ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART, FILTER_BY_BRAND, FILTER_BY_GENDER, FILTER_BY_COLOR } from "./types";

export function getProducts() {
    return async function (dispatch) {
        const json = await axios.get("pfhenrygrupo13.herokuapp.com/products");
        return dispatch({
            type: GET_PRODUCTS,
            payload: json.data,
        });
    };
}

export function getProductByID(id) {
    return async function (dispatch) {
        const json = await axios.get("pfhenrygrupo13.herokuapp.com/products/" + id);
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

export function addCart(_id) {
    return {
        type: ADD_TO_CART,
        payload: _id
    }
}

export function clearAllCart () {
    return {
        type: CLEAR_CART,
    }
}

export function delOneCart(_id) {
    return {
        type: REMOVE_ONE_FROM_CART,
        payload: _id
    }
}

export function delAllCart(_id) {
    return {
        type: REMOVE_ALL_FROM_CART,
        payload: _id
    }
}

export function filterByBrand(brand){
    return{
        type: FILTER_BY_BRAND,
        payload: brand
    }
}

export function filterByByGender(gender){
    return{
        type: FILTER_BY_GENDER,
        payload: gender
    }
}

export function filterByByColor(color){
    return{
        type: FILTER_BY_COLOR,
        payload: color
    }
}