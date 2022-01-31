import './App.css';
import Checkout from './Checkout';
import Items from './Items';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Navbar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0
    };
    // this.getCartCount = this.getCartCount.bind(this);
    this.updateCartCount = this.updateCartCount.bind(this);
  }

  updateCartCount() {
    let cart = localStorage.getItem("cart");
    if (cart == null){
      localStorage.setItem("cart", "[]");
    }
    let cartCount = JSON.parse(localStorage.getItem("cart")).length;

    this.setState({
      cartCount: cartCount
    });
  }

  render() {
    return (
      <BrowserRouter>
      <Navbar cartCount={this.state.cartCount} />
        <Routes>
          <Route path="/" element={<Items onCartCountChange={this.updateCartCount} />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="items" element={<Items onCartCountChange={this.updateCartCount} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

