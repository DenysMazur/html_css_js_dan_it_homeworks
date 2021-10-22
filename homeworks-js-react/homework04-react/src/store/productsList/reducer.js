import { SET_PRODUCTS_LIST } from '../types';


export const productsListReducer = ((state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS_LIST:
        return action.payload;
    default:
        return state;
}
})