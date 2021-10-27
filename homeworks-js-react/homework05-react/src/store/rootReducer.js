import { combineReducers } from 'redux';
import { favoritesReducer } from './favorites/reducer';
import { productsListReducer } from './productsList/reducer';
import { cartReducer } from './cart/reducer'
import { modalReducer } from './modal/reducer';

const rootReducer = combineReducers({
  products: productsListReducer,
  favorites: favoritesReducer,
  cart: cartReducer,
  modal: modalReducer
})

export default rootReducer