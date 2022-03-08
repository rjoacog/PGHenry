import { GET_PRODUCTS, GET_PRODUCT_BY_ID, GET_BY_NAME, ORDER_BY_PRICE } from "../actions/types";

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
      return {
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

    case ORDER_BY_PRICE:
      if (!state.allProducts.length) {
        let priceArr = payload === "+P" ?
          state.products.sort(function (a, b) {
            if (a.price > b.price) {
              return -1
            }
            if (b.price > a.price) {
              return 1
            }
            return 0
          }) : state.products.sort(function (a, b) {
            if (a.price > b.price) {
              return 1
            }
            if (b.price > a.price) {
              return -1
            }
            return 0
          });
        return {
          ...state,
          products: priceArr
        }
      } else {
        let priceArr = payload === "+P" ?
          state.allProducts.sort(function (a, b) {
            if (a.price > b.price) {
              return -1
            }
            if (b.price > a.price) {
              return 1
            }
            return 0
          }) : state.allProducts.sort(function (a, b) {
            if (a.price > b.price) {
              return 1
            }
            if (b.price > a.price) {
              return -1
            }
            return 0
          });
        return {
          ...state,
          products: priceArr
        }
      }

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
