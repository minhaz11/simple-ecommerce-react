import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Header from './components/header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
<Header></Header>
      <Router>
        <Switch>
          <Route path ="/shop">
          <Shop></Shop>
          </Route>
          <Route path ="/review">
            <Review></Review>
          </Route>
          <Route path ="/manage">
            <Inventory></Inventory>
          </Route>
          <Route exact path = "/">
            <Shop></Shop>
          </Route>
          <Route path="/:key">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path = "*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
