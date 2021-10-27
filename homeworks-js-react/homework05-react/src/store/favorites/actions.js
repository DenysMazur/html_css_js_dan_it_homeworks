import { ADD_TO_FAVORITES_LIST, REMOVE_FROM_FAVORITES_LIST, SET_FAVORITES_LIST } from '../types';

const getFavoritesFromLS = () => {
  let favorites = [];
  if (JSON.parse(localStorage.getItem('favorites'))) {
    return favorites = JSON.parse(localStorage.getItem('favorites'))
  }
  return favorites;
}

const setFavoritesList = (favoritesArray) => {
  return {
      type: SET_FAVORITES_LIST,
      payload: favoritesArray
  }
}

export const addFavoritesList = () => (dispatch) => {
  const favoritesArray = getFavoritesFromLS()
  dispatch(setFavoritesList(favoritesArray))
}

export const addToFavorite = (favoriteProduct) => {
  return {
    type: ADD_TO_FAVORITES_LIST,
    payload: favoriteProduct
  }
}

export const removeFromFavorite = (favoriteProduct) => {
  return {
    type: REMOVE_FROM_FAVORITES_LIST,
    payload: favoriteProduct
  }
}

