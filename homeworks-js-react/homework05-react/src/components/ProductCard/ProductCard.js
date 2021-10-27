import React from 'react';
import ModalModule from '../ModalModule';
import Button from '../Button';
import PropTypes from 'prop-types';
import './ProductCard.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../../store/favorites/actions'
import { setCloseModal, setOpenModal } from '../../store/modal/actions';
import { addProductToCart, removeProductFromCart } from '../../store/cart/actions';


const ProductCard = ({product, isFavoriteButton, btnText, modalHeader, removeFromCart}) => {
  const {name, price, url, reference, color, id} = product;
  const favorites = useSelector(({favorites}) => favorites);
  const cart = useSelector(({cart}) => cart);
  const dispatch = useDispatch();
  const isFavorite = favorites.some(favoriteProduct => favoriteProduct.id === id);
  const notFavoriteColor = 'black';
  const favoriteColor = 'yellow';
  

  const onFavoritesClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(product))
      return;
    }
    dispatch(addToFavorite(product))
  }

  const onOpenModalButtonClick = () => {
    dispatch(setOpenModal(id))
  }
  
  const handleSubmit = () => {
    dispatch(setCloseModal());
    if (removeFromCart) {
      dispatch(removeProductFromCart(product))
      return;
    }
    const productInCart = cart.some(product => product.id === id);
    
    if (!productInCart) {
      dispatch(addProductToCart(product))
    }
            
  }

  const handleCancel = () => {
    dispatch(setCloseModal());
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
        color={isFavorite ? favoriteColor : notFavoriteColor}
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
          onOpenModalButtonClick={onOpenModalButtonClick}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          id={id}
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
  modalHeader: 'Do you want to add this product to the cart?',
  removeFromCart: false
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    url: PropTypes.string,
    reference: PropTypes.string,
    color: PropTypes.string,
    id: PropTypes.number
  }),
  isFavoriteButton: PropTypes.bool,
  btnText: PropTypes.string,
  modalHeader: PropTypes.string,
  removeFromCart: PropTypes.bool
}

export default ProductCard