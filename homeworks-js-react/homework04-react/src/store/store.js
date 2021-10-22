import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { ADD_PRODUCT_TO_CART, ADD_TO_FAVORITES_LIST, REMOVE_FROM_FAVORITES_LIST, REMOVE_PRODUCT_FROM_CART } from './types';

const favoriteSyncMiddleware = store => next => action => {
  const result = next(action)
  if ([ADD_TO_FAVORITES_LIST, REMOVE_FROM_FAVORITES_LIST].includes(action.type)) {
      const { favorites } = store.getState()
      localStorage.setItem('favorites', JSON.stringify(favorites))
  }
  return result
}

const cartSyncMiddleware = store => next => action => {
  const result = next(action)
  if ([ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART].includes(action.type)) {
      const { cart } = store.getState()
      localStorage.setItem('cart', JSON.stringify(cart))
  }
  return result
}


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (args) => args

const store = createStore(rootReducer, compose(applyMiddleware(thunk, favoriteSyncMiddleware, cartSyncMiddleware), devTools));
export default store;