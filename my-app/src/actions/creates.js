import { GET_PRODUCTS } from "./types";

export function getProducts(){
    return async function(dispatch){
        const json = await axios.get("http://localhost:3001/products");
        return dispatch({
            type: GET_PRODUCTS,
            payload: json.data
        })
    }
}