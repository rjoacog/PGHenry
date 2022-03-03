import { GET_PRODUCTS } from "../actions/types";

const initialState = {
    allProducts=[], //estado constante q no se modifica 
    products=[] // auxiliar que se ve modificado al necesitar un  filter o un sort
}


function rootReducer(state = initialState, {type, payload}) {
    switch(type){
        case GET_PRODUCTS:
            return{
                ...state,
                allProducts: payload,
                products: payload
            }
    }
}


export default rootReducer;