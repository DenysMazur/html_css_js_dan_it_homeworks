import React from "react";
import ProductCard from '../../ProductCard';
import PropTypes from 'prop-types';
import './Cart.scss';

const Cart = ({products, onFavoritesClick, onProductBtnHandleClick}) => {
  let productsList = "No Item Here";

  if (products.length !== 0) {
    productsList = products.map((product) => {
      return (
        <ProductCard
         key={product.id}
         product={product}
         onFavoritesClick={() => onFavoritesClick(product.id)}
         onProductBtnHandleClick={() => onProductBtnHandleClick(product.id)}
         isFavoriteButton={false}
         btnText='Delete'
         modalHeader='Do you want to delete this product from the cart?'
         />
      )
    })
  };


  return (
    <main className="cart">
      <div className="container cart__container">
        { productsList }
      </div>
    </main>
  )

}


Cart.propTypes = {
  products: PropTypes.array.isRequired,
  onFavoritesClick: PropTypes.func,
  onProductBtnHandleClick: PropTypes.func
}

export default Cart;