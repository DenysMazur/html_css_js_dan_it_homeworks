import React, { Component }from 'react';
import ModalModule from '../ModalModule';
import './Header.scss';

export default class Header extends Component {

  render() {
    return (
      <header className='header'>
        <ModalModule 
        btnText='Open first modal'
        backgroundColor='#28a745'
        modalHeader='Are you ready to start?'
        closeButton={false}
        modalText='Click "OK" if you want to join us. Choice your action'
        modalBtnText={{ok: "Yes, I want", cancel: "No, I don't want"}}
        />

        <ModalModule 
        btnText='Open second modal'
        backgroundColor='#dc3545'
        modalHeader='Do you want to delete this file?'
        alert={true}
        modalText='Once you delete this file, it won’t be possible to undo this action. 
        Are you sure you want to delete it?'
        modalBtnText={{ok: "ok", cancel: "cancel"}}
        />
      </header>
    )
  }
}