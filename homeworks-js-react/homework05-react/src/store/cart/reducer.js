import { ADD_PRODUCT_TO_CART, CLEAN_CART, REMOVE_PRODUCT_FROM_CART, SET_CART_LIST } from '../types';

const initialState = []

export const cartReducer = ((state = initialState, action) => {
  switch (action.type) {
    case SET_CART_LIST:
        return action.payload;

    case ADD_PRODUCT_TO_CART:
      return [...state, action.payload];
    
    case REMOVE_PRODUCT_FROM_CART:
      return state.filter(({id}) => id !== action.payload.id);
    
    case CLEAN_CART:
      return initialState;

    default:
        return state;
  }
})