import React from 'react';
import MenuItem from '../MenuItem';
import { NavLink } from 'react-router-dom'
import './Menu.scss';


const Menu = ({options}) => {
  const itemList = options.map((option) => {      
    return <MenuItem key={option}><NavLink className="menu__item-link" to={option} activeClassName="menu__selected">{option}</NavLink></MenuItem>
  });

  return (
    <ul className="menu">        
      {itemList}
    </ul>
  )
}

export default Menu;