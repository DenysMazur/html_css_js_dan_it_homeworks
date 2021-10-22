import React from 'react';
import Menu from '../../Menu';
import './Header.scss';


const Header = () => {
  const menuOptionsList = ['all goods', 'favorites', 'cart'];
  return (
    <header className='header'>
      <div className='container'>
        <nav>
            <Menu 
            options={menuOptionsList}
            />
        </nav>
      </div>        
    </header>
  )
}

export default Header;