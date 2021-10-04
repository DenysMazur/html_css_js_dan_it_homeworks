import React, { Component } from 'react';
import Portal from '../Portal';
import './Modal.scss';

export default class Modal extends Component {

  handleClick = (event) => {
    if (event.target.classList.contains('modalOverlay')) {
      this.props.onCancel();
    }
  }

  render() {
    const { title, modalText, isOpen, closeButton, onCancel, actions, alert} = this.props;
    let modalWindowClass = 'modalWindow';
    if(alert) {
      modalWindowClass = `${modalWindowClass} alert`
    }
    return (
      <>
        { isOpen &&
          <Portal>
            <div className="modalOverlay" onClick={this.handleClick}>
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
}