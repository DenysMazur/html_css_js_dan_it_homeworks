import { ADD_PRODUCT_TO_CART, CLEAN_CART, REMOVE_PRODUCT_FROM_CART, SET_CART_LIST } from '../types';

const getCartFromLS = () => {
  let cart = [];
  if (JSON.parse(localStorage.getItem('cart'))) {
    return cart = JSON.parse(localStorage.getItem('cart'))
  }
  return cart;
}

const setCartList = (cartArray) => {
  return {
      type: SET_CART_LIST,
      payload: cartArray
  }
}

export const addProductToCart = (product) => {
  return {
      type: ADD_PRODUCT_TO_CART,
      payload: product
  }
}

export const removeProductFromCart = (product) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: product
  }
}


export const addCartList = () => (dispatch) => {
  const cartArray = getCartFromLS()
  dispatch(setCartList(cartArray))
}

export const cleanCart = () => {
  return {
    type: CLEAN_CART
  }
}
