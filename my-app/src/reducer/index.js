import { GET_PRODUCTS, GET_PRODUCT_BY_ID } from "../actions/types";

const initialState = {
  allProducts: [],
  products: [],
  detail: [],
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: payload,
        products: payload,
      }

    case GET_PRODUCT_BY_ID:
      return{
        ...state,
        detail: payload
      }

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
