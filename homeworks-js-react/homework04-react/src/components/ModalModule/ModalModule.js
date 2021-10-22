import React from "react";
import Button from "../Button";
import PropTypes from 'prop-types';
import Modal from "../Modal";
import { useSelector } from 'react-redux';



const ModalModule = ({onOpenModalButtonClick, btnText, backgroundColor, modalHeader, closeButton, alert, modalText, modalBtnText: {ok, cancel}, id, handleSubmit, handleCancel}) => {

  const storeId = useSelector(({modal}) => modal.id)
  let isOpen = false
  if (storeId === id) {
    isOpen = true;
  }

  return (
    <>
      <Button
        btnText={btnText}
        backgroundColor={backgroundColor}
        onClick={onOpenModalButtonClick}
      >
      </Button>
      <Modal
        title={modalHeader}
        modalText={modalText}
        closeButton={closeButton}
        onCancel={handleCancel}
        actions={
        <>
          <Button btnText={ok} backgroundColor={backgroundColor} onClick={handleSubmit}/>
          <Button btnText={cancel} backgroundColor={backgroundColor} onClick={handleCancel}/>
        </>}
        alert={alert}
        isOpen={isOpen}          
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
  },
  id: null
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
  modalBtnText: PropTypes.object,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default ModalModule;