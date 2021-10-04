import React, { Component } from "react";
import Button from "../Button";
import Modal from "../Modal";

class ModalModule extends Component {
  state = {
    isOpen: false,
  }

  openModal = () => {
    this.setState({ isOpen: true });
  }

  handleSubmit = () => {
    this.setState({ isOpen: false });
  }

  handleCancel = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const{
      btnText,
      backgroundColor,
      modalHeader,
      closeButton,
      alert,
      modalText,
      modalBtnText: {ok, cancel}} = this.props;
    return (
      <>
        <Button
          btnText={btnText}
          backgroundColor={backgroundColor}
          onClick={this.openModal}
        >
        </Button>
        <Modal
          title={modalHeader}
          modalText={modalText}
          isOpen={this.state.isOpen}
          closeButton={closeButton}
          onCancel={this.handleCancel}
          actions={
          <>
            <Button btnText={ok} backgroundColor={backgroundColor} onClick={this.handleSubmit}/>
            <Button btnText={cancel} backgroundColor={backgroundColor} onClick={this.handleCancel}/>
          </>}
          alert={alert}          
        >
        </Modal>
      </>
    );
  }
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

export default ModalModule;