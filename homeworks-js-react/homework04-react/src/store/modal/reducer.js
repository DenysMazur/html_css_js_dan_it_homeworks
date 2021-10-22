import { SET_CLOSE_MODAL, SET_OPEN_MODAL } from '../types';

const initialState = {
  id: null,
  isOpen: false
}

export const modalReducer = ((state = initialState, action) => {
  switch (action.type) {
    case SET_OPEN_MODAL:
        return {
          isOpen: true,
          id: action.payload
        }
    case SET_CLOSE_MODAL:
      return {
        isOpen: false,
        id: null
      }

    default:
        return state;
  }
})