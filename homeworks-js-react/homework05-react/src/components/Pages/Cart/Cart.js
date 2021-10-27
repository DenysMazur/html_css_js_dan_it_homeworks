import React from "react";
import { useSelector } from 'react-redux';
import CartForm from '../../CartForm/CartForm';
import ProductCard from '../../ProductCard';
import './Cart.scss';

const Cart = () => {
  let productsList = "No Item Here";
  const cartProducts = useSelector(({cart}) => cart)

  if (cartProducts.length) {
    productsList = cartProducts.map((cartProduct) => {
      return (
        <ProductCard
         key={cartProduct.id}
         product={cartProduct}
         isFavoriteButton={false}
         removeFromCart={true}
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
      {productsList !== "No Item Here" && <CartForm/>}      
    </main>
  )

}

export default Cart;