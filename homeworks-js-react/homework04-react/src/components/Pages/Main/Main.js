import React from 'react';
import ProductCard from '../../ProductCard';
import './Main.scss';
import { useSelector } from 'react-redux';



const Main = () => {
  const products = useSelector(({products}) => products)  
  const productsList = products.map((product) => {
    return (
      <ProductCard
       key={product.id}
       product={product}
      />
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

export default Main