import React, { Component }from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends Component {

    handleClick = () => {
    this.props.onClick()
  }

  render() {
    const {btnText, backgroundColor, color, ...attrs} = this.props;
    return (
        <button 
        className='btn'
        onClick={this.handleClick}
        style={{backgroundColor: backgroundColor,
        color: color}}
        {...attrs}
        >
          {btnText}
        </button>
    )
  }

}

Button.defaultProps = {
  btnText: 'Default button',
  onClick: () => {},
  backgroundColor: '#2064EE',
  color: 'white'
}

Button.propTypes = {
  btnText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  backgroundColor: PropTypes.string,
  color: PropTypes.string
}

export default Button;