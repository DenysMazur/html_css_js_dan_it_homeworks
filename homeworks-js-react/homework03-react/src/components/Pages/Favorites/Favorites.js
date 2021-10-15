import React from 'react';
import ProductCard from '../../ProductCard';
import PropTypes from 'prop-types';
import './Favorites.scss';


const Favorites = ({products, onFavoritesClick, onProductBtnHandleClick}) => {
  let productsList = "No Item Here";
  if (products.length !== 0) {
    productsList = products.map((product) => {
      return (
        <ProductCard
         key={product.id}
         product={product}
         onFavoritesClick={() => onFavoritesClick(product.id)}
         onProductBtnHandleClick={() => onProductBtnHandleClick(product.id)}/>
      )
    })
  };

  return (
    <main className="favorites">
      <div className="container favorites__container">
        { productsList }
      </div>
    </main>
  )

}


Favorites.propTypes = {
  products: PropTypes.array.isRequired,
  onFavoritesClick: PropTypes.func,
  onProductBtnHandleClick: PropTypes.func
}

export default Favorites