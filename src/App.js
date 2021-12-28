import './App.css';
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.components';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
