import React from 'react';
import ModalModule from '../ModalModule';
import Button from '../Button';
import PropTypes from 'prop-types';
import './ProductCard.scss';

const ProductCard = ({product, onFavoritesClick, onProductBtnHandleClick, isFavoriteButton, btnText, modalHeader}) => {
  const {name, price, url, reference, color, isFavorite} = product;

  let colorFavorite = 'black';
  
  if (isFavorite) {
    colorFavorite = 'yellow'
  }
  
  return (
    <>
      <div className="main-list__item">
        <div className="item__image">
        <img src={url} alt={name} />
        </div>          
        <p className="main-item-margin">Мышь {name} {color}</p>
        <p className="main-item-margin">{reference}</p>
        {isFavoriteButton && <Button
        btnText={<i className='fa fa-star'></i>}
        backgroundColor='white'
        color={colorFavorite}
        onClick={onFavoritesClick} />}
        <p className="main-item-margin">Price: {price} uah</p>
        <ModalModule
          btnText={btnText}
          backgroundColor='#e83283'
          modalHeader={modalHeader}
          modalText={
            <>
              <div className="item__image">
              <img src={url} alt={name} />
              </div>          
              <p className="main-item-margin">Мышь {name} {color}</p>
              <p className="main-item-margin">Ref: {reference}</p>
              <p className="main-item-margin">Price: {price} uah</p>
            </>
          }
          modalBtnText={{ok: "ok", cancel: "cancel"}}
          onProductBtnHandleClick={onProductBtnHandleClick}
        /> 
      </div>
    </>      
  )
}

ProductCard.defaultProps = {
  product: {
    name: 'n/a', 
    price: 'n/a', 
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZDEHae7TZLIJB4l1N0NGYuTej2MaieCXQg&usqp=CAU',
    reference: 'n/a', 
    color: 'n/a', 
    isFavorite: false    
  },
  isFavoriteButton: true,
  btnText: 'Add to cart',
  modalHeader: 'Do you want to add this product to the cart?'
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    url: PropTypes.string,
    reference: PropTypes.string,
    color: PropTypes.string,
    isFavorite: PropTypes.bool,    
  }),
  isFavoriteButton: PropTypes.bool,
  onFavoritesClick: PropTypes.func,
  onProductBtnHandleClick: PropTypes.func,
  btnText: PropTypes.string,
  modalHeader: PropTypes.string
}

export default ProductCard