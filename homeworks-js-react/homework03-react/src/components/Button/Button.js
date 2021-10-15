import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({btnText, backgroundColor, color, onClick, ...attrs}) => {
  const handleClick = () => {
      onClick()
  }
  return (
      <button 
      className='btn'
      onClick={handleClick}
      style={{backgroundColor: backgroundColor,
      color: color}}
      {...attrs}
      >
        {btnText}
      </button>
  )
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