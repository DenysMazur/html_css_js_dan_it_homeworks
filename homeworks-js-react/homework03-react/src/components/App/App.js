import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect} from 'react-router';
import './App.scss';
import Header from '../Pages/Header';
import Main from '../Pages/Main';
import Favorites from '../Pages/Favorites';
import Cart from '../Pages/Cart';
import NotFound from '../Pages/NotFound';

const getFavoritesFromLS = () => {
  let favorites = [];
  if (JSON.parse(localStorage.getItem('favorites'))) {
    return favorites = JSON.parse(localStorage.getItem('favorites'))
  }
  return favorites;
}

const getCartFromLS = () => {
  let cart = [];
  if (JSON.parse(localStorage.getItem('cart'))) {
    return cart = JSON.parse(localStorage.getItem('cart'))
  }
  return cart;
}

const App = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState(getFavoritesFromLS());
  const [cart, setCart] = useState(getCartFromLS());

  useEffect(() => {
    (async () => {
      const response = await fetch('/products.json');
      const data = await response.json();
      const productsArray = data.products.map(product =>{
          let isFavorite = false;
          favorites.forEach(element => {
            if (element.id === product.id) {
            isFavorite = true
            }
          });
          return {...product, isFavorite};
        })
        setProducts(productsArray)
    })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [favorites, cart]);

  const onCartAddHandleClick = (id) => {
    const product = products.filter(product => {
      return product.id === id
    })

    const isCartData = cart.some(product => product.id === id)

    if (!isCartData) {
      setCart([...cart, ...product]);      
    }

  }

  const onCartDeleteHandleClick = (id) => {
    const cartArray = cart.filter(product => {
      return product.id !== id
    })
      setCart(cartArray);      
    
  }

  const onFavoritesClickHandle = (id) => {

    const product = favorites.filter(product => {
      return product.id === id
    })

    if (product.length === 0) {
      const product = products.filter(product => {
        return product.id === id
      })

      const newArrayFavorites = [...favorites, ...product];
      const newArrayProducts = products.map((product) => {
        if (product.id === id) {
          product.isFavorite = !product.isFavorite;
        }  
        return product
      })

      setFavorites(newArrayFavorites);
      setProducts(newArrayProducts);

    } else {
      const newArrayFavorites = favorites.filter((favorite) => {
        return favorite.id !== id;
      })
      const newArrayProducts = products.map((product) => {
        if (product.id === id) {
          product.isFavorite = !product.isFavorite;
        }  
        return product
      })
      setFavorites(newArrayFavorites);
      setProducts(newArrayProducts);
      
    }
  }
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Redirect to='/all goods'/>          
        </Route>
        <Route exact path='/all goods'>
        <Main
          products={products}
          onFavoritesClick={onFavoritesClickHandle}
          onProductBtnHandleClick={onCartAddHandleClick}
          />
        </Route>
        <Route exact path='/favorites'>
          <Favorites
          products={favorites}
          onFavoritesClick={onFavoritesClickHandle}
          onProductBtnHandleClick={onCartAddHandleClick} 
          />
        </Route>
        <Route exact path='/cart'>
          <Cart
          products={cart}
          onFavoritesClick={onFavoritesClickHandle}
          onProductBtnHandleClick={onCartDeleteHandleClick}
          />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      
    </>
  )
}

export default App;
