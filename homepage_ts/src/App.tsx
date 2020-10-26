import React from 'react';
import Router from './routers/mainrouter'
import Home from './home'
import Order from './routers/how_to_order_router/how_to_order'
import Seshop from './routers/shop_router/shop'
import './App.scss';
import { Switch,Route, Redirect } from 'react-router-dom';

const App: React.FC = () => {
  return (
      <div >
        <Switch>
        <Route path='/about_us' component ={Router}></Route>
        <Route path='/how_to_order' component ={Order}></Route>
        <Route path='/shop' component ={Seshop}></Route>
        <Route exact path="/homepage"  component={Home} />
        <Redirect to='/homepage'></Redirect>
        </Switch>
      </div>
  );
}

export default App;
