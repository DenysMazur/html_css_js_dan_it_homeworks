import React from 'react';
import Portal from '../Portal';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({title, modalText, isOpen, closeButton, onCancel, actions, alert}) => {
  const handleClick = (event) => {
    if (event.target.classList.contains('modalOverlay')) {
      onCancel();
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