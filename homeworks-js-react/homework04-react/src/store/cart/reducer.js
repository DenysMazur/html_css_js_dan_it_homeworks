import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, SET_CART_LIST } from '../types';

export const cartReducer = ((state = [], action) => {
  switch (action.type) {
    case SET_CART_LIST:
        return action.payload;

    case ADD_PRODUCT_TO_CART:
      return [...state, action.payload];
    
      case REMOVE_PRODUCT_FROM_CART:
        return state.filter(({id}) => id !== action.payload.id);

    default:
        return state;
  }
})