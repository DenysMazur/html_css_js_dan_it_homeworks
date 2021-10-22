import { getProducts } from '../../api/products'
import { SET_PRODUCTS_LIST } from '../types'

const setProductsList = (productsArray) => {
  return {
      type: SET_PRODUCTS_LIST,
      payload: productsArray
  }
}


export const fetchProductsList = () => async (dispatch, getState) => {
  const data = await getProducts()
  const {products} = data
  
  dispatch(setProductsList(products))
}