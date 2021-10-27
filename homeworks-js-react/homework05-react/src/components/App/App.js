import React, { useEffect } from 'react';
import { Switch, Route, Redirect} from 'react-router';
import './App.scss';
import Header from '../Pages/Header';
import Main from '../Pages/Main';
import Favorites from '../Pages/Favorites';
import Cart from '../Pages/Cart';
import NotFound from '../Pages/NotFound';
import { useDispatch } from 'react-redux';
import { fetchProductsList } from '../../store/productsList/actions';
import { addFavoritesList } from '../../store/favorites/actions';
import { addCartList } from '../../store/cart/actions';

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductsList())
    dispatch(addFavoritesList())
    dispatch(addCartList())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Redirect to='/all goods'/>          
        </Route>
        <Route exact path='/all goods'>
        <Main/>
        </Route>
        <Route exact path='/favorites'>
          <Favorites/>
        </Route>
        <Route exact path='/cart'>
          <Cart/>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      
    </>
  )
}

export default App;
