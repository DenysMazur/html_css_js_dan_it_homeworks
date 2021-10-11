import React, { Component }from 'react';
import Menu from '../Menu';
import './Header.scss';

export default class Header extends Component {
  menuOptionsList = ['All goods', 'Favorites', 'Cart'];
  render() {
    return (
      <header className='header'>
        <div className='container'>
          <nav>
              <Menu 
              options={this.menuOptionsList}
              />
          </nav>
        </div>        
      </header>
    )
  }
}