import { GET_PRODUCTS } from "../actions/types";

const initialState = {
  allProducts: [],
  products: [],
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: payload,
        products: payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
