import React, { Component} from 'react';
import MenuItem from '../MenuItem';
import './Menu.scss';

export default class Menu extends Component {

  render() {
    const {options} = this.props;
    const itemList = options.map((option) => {      
      return <MenuItem key={option}>{option}</MenuItem>
    })

    return (
      <ul className="menu">        
        {itemList}
      </ul>
    )
  }
}