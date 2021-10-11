import React, { Component } from 'react';
import './MenuItem.scss'

export default class Menu extends Component {

  render() {
    return (
      <li className="menu__item">
        {this.props.children}
      </li>
    )
  }
}