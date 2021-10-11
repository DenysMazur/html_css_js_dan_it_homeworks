import React, { Component }from 'react';
import ModalModule from '../ModalModule';
import Button from '../Button';
import PropTypes from 'prop-types';
import './ProductCard.scss';

class ProductCard extends Component {
  
  render() {
    const {product, onFavoritesClick, onCartAddHandleClick} = this.props
    const {name, price, url, reference, color, isFavorite} = product
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
          <Button
          btnText={<i className='fa fa-star'></i>}
          backgroundColor='white'
          color={colorFavorite}
          onClick={onFavoritesClick}
          >                
          </Button>
          <p className="main-item-margin">Price: {price} uah</p>
          <ModalModule
            btnText='Add to cart'
            backgroundColor='#e83283'
            modalHeader='Do you want to add this product to the cart?'
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
            onCartAddHandleClick={onCartAddHandleClick}
          /> 
        </div>
      </>      
    )
  }
}

ProductCard.defaultProps = {
  product: {
    name: 'n/a', 
    price: 'n/a', 
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZDEHae7TZLIJB4l1N0NGYuTej2MaieCXQg&usqp=CAU',
    reference: 'n/a', 
    color: 'n/a', 
    isFavorite: 'false'
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    url: PropTypes.string,
    reference: PropTypes.string,
    color: PropTypes.string,
    isFavorite: PropTypes.bool
  }),
  onFavoritesClick: PropTypes.func,
  onCartAddHandleClick: PropTypes.func
}

export default ProductCard