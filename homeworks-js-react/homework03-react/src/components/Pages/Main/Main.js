import React from 'react';
import ProductCard from '../../ProductCard';
import PropTypes from 'prop-types';
import './Main.scss';

const Main = ({products, onFavoritesClick, onProductBtnHandleClick}) => {
    
  const productsList = products.map((product) => {
    return (
      <ProductCard
       key={product.id}
       product={product}
       onFavoritesClick={() => onFavoritesClick(product.id)}
       onProductBtnHandleClick={() => onProductBtnHandleClick(product.id)}/>
    )
  });

  return (
    <main className="main">
      <div className="container main__container">
        { productsList }
      </div>
    </main>
  )
}

Main.propTypes = {
  products: PropTypes.array.isRequired,
  onFavoritesClick: PropTypes.func,
  onProductBtnHandleClick: PropTypes.func
}

export default Main