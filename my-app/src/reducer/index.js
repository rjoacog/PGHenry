import { GET_PRODUCTS, GET_PRODUCT_BY_ID, GET_BY_NAME, ORDER_BY_PRICE, ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../actions/types";

const initialState = {
  allProducts: [],
  products: [],
  detail: [],
  cart: []
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

    case ADD_TO_CART:
      let newItem = state.products.find(product => product._id === payload)

      let itemInCart = state.cart.find(item => item._id === newItem._id)

      return itemInCart
        ? {
          ...state,
          cart: state.cart.map(item => item._id === newItem._id ? { ...item, quantity: item.quantity + 1 } : item)
        } :
        {
          ...state,
          cart: [...state.cart, { ...newItem, quantity: 1 }]
        }

    case CLEAR_CART:
      return state.cart

    case REMOVE_ONE_FROM_CART:
      let itemToDelete = state.cart.find(item => item._id === payload)

      return itemToDelete.quantity > 1 ? {
        ...state,
        cart: state.cart.map(item => item._id === payload ? { ...item, quantity: item.quantity - 1 } : item)
      } : {
        ...state,
        cart: state.cart.filter(item => item._id !== payload)
      }

    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item._id !== payload)
      }


    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
