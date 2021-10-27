import React from 'react';
import './MenuItem.scss'

const Menu = ({children}) => {
  return (
    <li className="menu__item">
      {children}
    </li>
  )
}

export default Menu