import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import City from './components/City';
import CityToProductList from './components/CityToProductList';
import Product from './components/Product';
import ProductDetailsList from './components/ProductDetailsList';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/city">City</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/city" component={City} />
          <Route exact path="/city/:cityId" component={CityToProductList}></Route>
          <Route exact path="/product/:productId" component={ProductDetailsList}></Route>
          <Route exact path="/product" component={Product} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}