import React from 'react';
import ProductCard from '../../ProductCard';
import './Favorites.scss';
import { useSelector } from 'react-redux';


const Favorites = () => {
  let productsList = "No Item Here";
  const favoriteProducts = useSelector(({favorites}) => favorites)
  if (favoriteProducts.length) {
    productsList = favoriteProducts.map((favoriteProduct) => {
      return (
        <ProductCard
         key={favoriteProduct.id}
         product={favoriteProduct}/>
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

export default Favorites