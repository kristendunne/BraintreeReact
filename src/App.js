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
      cartCount: this.getCartCount()
    };
    this.updateCartCount = this.updateCartCount.bind(this);
  }

  //Gathers count of items in cart
  getCartCount() {
    let cart = localStorage.getItem("cart")
    if (cart == null) {
      localStorage.setItem("cart", "[]")
    }
    return JSON.parse(localStorage.getItem("cart")).length
  }

  //Updates count of number of items in cart
  updateCartCount() {
    this.setState({
      cartCount: this.getCartCount()
    });
  }

  //Display cart count on all pages
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

//http://localhost:3000
//http://localhost:3000/checkout
//http://localhost:3000/items