import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_BY_NAME,
  ORDER_BY_PRICE,
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
  FILTER_BY_BRAND,
  FILTER_BY_GENDER,
  FILTER_BY_COLOR,
  GET_ALL_USERS,
  NEW_USER,
  GET_WISHLIST,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  SAVE_WISHLIST,
} from "../actions/types";

const initialState = {
  allProducts: [],
  products: localStorage.allProduct?.length > 0 ? JSON.parse(localStorage.getItem('allProduct')) : [],
  detail: [],
  cart: localStorage.items?.length > 0 ? JSON.parse(localStorage.getItem('items')) : [],
  allUsers: [],
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: payload,
        products: payload,
      };

    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        detail: payload,
      };

    case GET_BY_NAME:
      let searched = state.allProducts.filter((el) =>
        el.brand.toLowerCase().includes(payload.toLowerCase())
      );
      return {
        ...state,
        products: searched,
      };
    
    case FILTER_BY_BRAND:
      const product2 = state.allProducts
      const brands = payload === "all" ? product2 : product2.filter(p => p.brand === payload)
      return{
        ...state,
        products: brands
      };

    case FILTER_BY_GENDER:
      const product =  state.allProducts
      if(payload === 'all') return {...state, products: product}
      const gender = payload === 'unisex' ? product : product.filter(p => p.gender === payload)
      return{
        ...state,
        products: gender
      }

    case FILTER_BY_COLOR:
      const product1 =  state.allProducts
      if(payload === 'all') return {...state, products: product1}
      const color = product1.filter(p => p.color[0] === payload)
      return{
        ...state,
        products: color
      }

    case ORDER_BY_PRICE:
      if (!state.allProducts.length) {
        let priceArr =
          payload === "+P"
            ? state.products.sort(function (a, b) {
                if (a.price > b.price) {
                  return -1;
                }
                if (b.price > a.price) {
                  return 1;
                }
                return 0;
              })
            : state.products.sort(function (a, b) {
                if (a.price > b.price) {
                  return 1;
                }
                if (b.price > a.price) {
                  return -1;
                }
                return 0;
              });
        return {
          ...state,
          products: priceArr,
        };
      } else {
        let priceArr =
          payload === "+P"
            ? state.allProducts.sort(function (a, b) {
                if (a.price > b.price) {
                  return -1;
                }
                if (b.price > a.price) {
                  return 1;
                }
                return 0;
              })
            : state.allProducts.sort(function (a, b) {
                if (a.price > b.price) {
                  return 1;
                }
                if (b.price > a.price) {
                  return -1;
                }
                return 0;
              });
        return {
          ...state,
          products: priceArr,
        };
      }

    case ADD_TO_CART:
      let newItem = state.products.find(product => product._id === payload);
      let itemInCart = state.cart.find((item) => item._id === payload ? true: false);

      return {
            ...state,
            cart: itemInCart ?  
              state.cart.map((item) => item._id === payload
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
            : [...state.cart, { ...newItem, quantity: 1 }]
          }
          case CLEAR_CART:
            return {
              ...state,
              cart: []
            };

    case REMOVE_ONE_FROM_CART:
      let itemToDelete = state.cart.find((item) => item._id === payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item._id === payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item._id !== payload),
          };

    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== payload),
      };
      case GET_ALL_USERS:
        return {
          ...state,
          allUsers: payload,
        }
      case NEW_USER:
        return {
          ...state,
        };
      case GET_WISHLIST:
        let list = state.products.filter((item) => item._id)
        return {
          ...state,
          wishlist: payload,
        };
      case ADD_TO_WISHLIST:
        let add = state.products.find((item) => item === payload);
        return {
          ...state,
          wishlist: [...state.wishlist, add],
        };
      case REMOVE_FROM_WISHLIST:
        return {
          ...state,
          wishlist: state.wishlist.filter((item) => item._id !== payload),
        };
      case SAVE_WISHLIST:
        return {
          ...state,
        }
  

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
