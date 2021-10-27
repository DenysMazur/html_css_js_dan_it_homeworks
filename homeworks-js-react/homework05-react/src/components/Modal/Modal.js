import React from 'react';
import Portal from '../Portal';
import PropTypes from 'prop-types';
import './Modal.scss';
import { useDispatch} from 'react-redux';
import { setCloseModal } from '../../store/modal/actions';

const Modal = ({title, modalText, closeButton, onCancel, actions, alert, isOpen}) => {
  
  const dispatch = useDispatch()  
  const handleClick = (event) => {
    if (event.target.classList.contains('modalOverlay')) {
      dispatch(setCloseModal());
    }
  }
  let modalWindowClass = 'modalWindow';

  if (alert) {
    modalWindowClass = `${modalWindowClass} alert`
  }
  
  return (
    <>
      { isOpen &&
        <Portal>
          <div className="modalOverlay" onClick={(event) => handleClick(event)}>
            <div className={modalWindowClass}>
              <div className="modalHeader">
                <div className="modalTitle">{title}</div>
                {closeButton && 
                  <button className="modalClose" onClick={onCancel}>X</button>}
              </div>
              <div className="modalBody">
                {modalText}
              </div>
              <div className="modalFooter">
                {actions}
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
  
}

Modal.defaultProps = {
  title: 'Some text', 
  modalText: "Some text", 
  isOpen: false, 
  closeButton: true,
  actions: '', 
  alert: 'false'
}

Modal.propTypes = {
  title: PropTypes.string, 
  modalText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]), 
  isOpen: PropTypes.bool, 
  closeButton: PropTypes.bool,  
  onCancel: PropTypes.func, 
  actions: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  alert: PropTypes.bool
}

export default Modal