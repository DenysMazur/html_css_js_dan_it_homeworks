import { ADD_TO_FAVORITES_LIST, REMOVE_FROM_FAVORITES_LIST, SET_FAVORITES_LIST } from '../types';

export const favoritesReducer = ((state = [], action) => {
  switch (action.type) {
    case SET_FAVORITES_LIST:
        return action.payload;

    case ADD_TO_FAVORITES_LIST:
      return [...state, action.payload];

    case REMOVE_FROM_FAVORITES_LIST:      
    return state.filter(({id}) => id !== action.payload.id);

    default:
        return state;
  }
})