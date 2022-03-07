import { GET_PRODUCTS, GET_PRODUCT_BY_ID, GET_BY_NAME } from "../actions/types";

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

    case GET_BY_NAME:
      let searched = state.allProducts.filter(el => el.brand.toLowerCase().includes(payload.toLowerCase()));
      console.log(searched)
      return {
        ...state,
        products: searched,
      }

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
