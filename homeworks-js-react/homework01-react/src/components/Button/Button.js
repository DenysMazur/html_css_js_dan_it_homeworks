import React, { Component }from 'react';
import './Button.scss';

class Button extends Component {

  handleClick = () => {
    this.props.onClick()
  }

  render() {
    const {btnText, backgroundColor, ...attrs} = this.props;
    return (
        <button 
        className='btn'
        onClick={this.handleClick}
        style={{backgroundColor: backgroundColor}}
        {...attrs}
        >
          {btnText}
        </button>
    )
  }

}

Button.defaultProps = {
  text: 'Default button',
  onClick: () => {},
  backgroundColor: '#2064EE'
}

export default Button;