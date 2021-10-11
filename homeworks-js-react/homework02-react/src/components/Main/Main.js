import React, { Component }from 'react';
import ProductCard from '../ProductCard';
import PropTypes from 'prop-types';
import './Main.scss';

class Main extends Component {
  
  render() {
    const {products, onFavoritesClick, onCartAddHandleClick} = this.props;
    const productsList = products.map((product) => {
      return (
        <ProductCard
         key={product.id}
         product={product}
         onFavoritesClick={() => onFavoritesClick(product.id)}
         onCartAddHandleClick={() => onCartAddHandleClick(product.id)}/>
      )
    })
    return (
      <main className="main">
        <div className="container main__container">
          { productsList }
        </div>
      </main>
    )
  }
}

Main.propTypes = {
  products: PropTypes.array.isRequired,
  onFavoritesClick: PropTypes.func,
  onCartAddHandleClick: PropTypes.func
}

export default Main