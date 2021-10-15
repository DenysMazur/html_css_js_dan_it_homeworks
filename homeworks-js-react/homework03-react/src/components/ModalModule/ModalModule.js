import React, { useState } from "react";
import Button from "../Button";
import PropTypes from 'prop-types';
import Modal from "../Modal";


const ModalModule = ({onProductBtnHandleClick, btnText, backgroundColor, modalHeader, closeButton,  alert,  modalText, modalBtnText: {ok, cancel}}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const handleSubmit = () => {
    setIsOpen(false);
    onProductBtnHandleClick();
  }

  const handleCancel = () => {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        btnText={btnText}
        backgroundColor={backgroundColor}
        onClick={openModal}
      >
      </Button>
      <Modal
        title={modalHeader}
        modalText={modalText}
        isOpen={isOpen}
        closeButton={closeButton}
        onCancel={handleCancel}
        actions={
        <>
          <Button btnText={ok} backgroundColor={backgroundColor} onClick={handleSubmit}/>
          <Button btnText={cancel} backgroundColor={backgroundColor} onClick={handleCancel}/>
        </>}
        alert={alert}          
      >
      </Modal>
    </>
  );
}


ModalModule.defaultProps = {
  btnText: 'Default btn',
  backgroundColor: '#007bff',
  modalHeader: 'Modal Title',
  closeButton: true,
  alert: false,
  modalText: 'Some text',
  modalBtnText: {
    ok: 'Ok',
    cancel: 'Cancel'
  }
}

ModalModule.propTypes = {
  btnText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  backgroundColor: PropTypes.string,
  modalHeader: PropTypes.string,
  closeButton: PropTypes.bool,
  alert: PropTypes.bool,
  modalText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  modalBtnText: PropTypes.object
}

export default ModalModule;