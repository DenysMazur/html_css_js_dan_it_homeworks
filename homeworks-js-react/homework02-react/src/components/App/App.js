import React, { Component } from 'react';
import './App.scss';
import Header from '../Header';
import Main from '../Main';


export default class App extends Component {
  state = {
    products: [],
    favorites: [],
    cart: [],
  }

  componentDidMount = async () => {
    const response = await fetch('/products.json')
    const data = await response.json();

    this.setState(() => {
      if (JSON.parse(localStorage.getItem('favorites')) && JSON.parse(localStorage.getItem('cart'))) {
        return {
          favorites: [...JSON.parse(localStorage.getItem('favorites'))],
          cart: [...JSON.parse(localStorage.getItem('cart'))]
        }
      }
    })
    
    this.setState(({favorites}) => {
      const productsArray = data.products.map(product =>{
        let isFavorite = false;
        favorites.forEach(element => {
          if (element.id === product.id) {
            isFavorite = true
          }
        });
        return {...product, isFavorite};
      })
      return {products: [...productsArray]}
    })


  }

  componentDidUpdate = () => { 
    localStorage.setItem('favorites', JSON.stringify(this.state.favorites))
    localStorage.setItem('cart', JSON.stringify(this.state.cart))
  }

  onCartAddHandleClick = (id) => {
    this.setState(({cart}) => {
      const product = this.state.products.filter(product => {
        return product.id === id
      })

      const isCartData = this.state.cart.some(product => product.id === id)
      if (isCartData) {
        return {
          cart: cart
        }
      } else {
        return {
          cart: [...cart, ...product]
        }
      }
    })
  }

  onFavoritesClickHandle = (id) => {

    const product = this.state.favorites.filter(product => {
      return product.id === id
    })

    if (product.length === 0) {
      const product = this.state.products.filter(product => {
        return product.id === id
      })
      this.setState(({products, favorites}) => {
        const newArrayFavorites = [...favorites, ...product]
        const newArrayProducts = products.map((product) => {
          if (product.id === id) {
            product.isFavorite = !product.isFavorite;
          }  
          return product
        })
        return {
          favorites: newArrayFavorites,
          products: newArrayProducts
        }
      }
        )
    } else {
      this.setState(({products, favorites}) => {
        const newArrayFavorites = favorites.filter((favorite) => {
          return favorite.id !== id;
        })
        const newArrayProducts = products.map((product) => {
          if (product.id === id) {
            product.isFavorite = !product.isFavorite;
          }  
          return product
        })
        return {
          favorites: newArrayFavorites,
          products: newArrayProducts
        }
      })
      
    }
  }

  render() {
    return (
      <>
        <Header />
        <Main
         products={this.state.products}
         onFavoritesClick={this.onFavoritesClickHandle}
         onCartAddHandleClick={this.onCartAddHandleClick}
         />
      </>
    )
  }
}

