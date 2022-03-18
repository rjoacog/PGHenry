
import { clienteAxios } from "../config/clienteAxios";
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
  UPDATE_USER,
  ADD_TO_WISHLIST,
  GET_WISHLIST,
  REMOVE_FROM_WISHLIST,
  SAVE_WISHLIST,
} from "./types";

export function getProducts() {
    return async function (dispatch) {
        const json = await clienteAxios("/products");
        return dispatch({
            type: GET_PRODUCTS,
            payload: json.data,
        });
    };
}

export function getProductByID(id) {
    return async function (dispatch) {
        const json = await clienteAxios("/products/" + id);
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
  };
}

export function orderByPrice(payload) {
  return {
    type: ORDER_BY_PRICE,
    payload,
  };
}

export function addCart(_id) {
  return {
    type: ADD_TO_CART,
    payload: _id,
  };
}

export function clearAllCart() {
  return {
    type: CLEAR_CART,
  };
}

export function delOneCart(_id) {
  return {
    type: REMOVE_ONE_FROM_CART,
    payload: _id,
  };
}

export function delAllCart(_id) {
  return {
    type: REMOVE_ALL_FROM_CART,
    payload: _id,
  };
}

export function filterByBrand(brand) {
  return {
    type: FILTER_BY_BRAND,
    payload: brand,
  };
}

export function filterByByGender(gender) {
  return {
    type: FILTER_BY_GENDER,
    payload: gender,
  };
}

export function filterByByColor(color) {
  return {
    type: FILTER_BY_COLOR,
    payload: color,
  };
}

export function getAllUsers() {
    return async function(dispatch) {
      const json = await clienteAxios("/user");
      // console.log(json.data);
      return dispatch({
        type: GET_ALL_USERS,
        payload: json.data,
      })
    }
  }
  
  export function newUser(payload) {
    return async function(dispatch) {
      const json = await  clienteAxios.post("/user", payload);
      return dispatch({
        type: NEW_USER,
        payload: json.data,
      })
    }
  }
  
  export function updateUser(id, payload) {
    return async function(dispatch) {
      const json = await clienteAxios.put(`/user/${id}`, payload);
      console.log(json.data);
      return dispatch({
        type: UPDATE_USER,
        payload: json.data,
      })
    }
  }
  
  export function addWishlist(_id) {
      return {
          type: ADD_TO_WISHLIST,
          payload: _id,
      }
  }
  
  export function getWishlist(payload) {
    return async function(dispatch) {
        const json = await clienteAxios("/user/wish/list", payload);
        console.log(json);
        return dispatch({
            type: GET_WISHLIST,
            payload: json.data,
        })
    }
  }
  
  export function removeWishlist(_id) {
      return {
          type: REMOVE_FROM_WISHLIST,
          payload: _id,
      }
  }
  
  export function saveWishlist(payload) {
    return async function(dispatch) {
      const json = await clienteAxios.post("/user/wish", payload);
      return dispatch({
        type: SAVE_WISHLIST,
        payload: json.data,
      })
    }
  }
  