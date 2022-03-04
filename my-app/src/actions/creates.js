import axios from 'axios';
import { GET_PRODUCTS } from "./types";

export function getProducts(){
    return async function(dispatch){
        const json = await axios.get("http://localhost:4000/products");
        console.log(json.data)
        return dispatch({
            type: GET_PRODUCTS,
            payload: json.data
        })
    }
}