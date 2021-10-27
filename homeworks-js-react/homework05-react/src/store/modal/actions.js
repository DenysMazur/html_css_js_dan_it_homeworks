import { SET_OPEN_MODAL, SET_CLOSE_MODAL } from '../types';

export const setOpenModal = (id) => {
  return {
    type: SET_OPEN_MODAL,
    payload: id
  }
}

export const setCloseModal = () => {
  return {
    type: SET_CLOSE_MODAL
  }
}