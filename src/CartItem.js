import React from 'react';
export default class CartItem extends React.Component {

  //Called in Checkout.js - gathers name and price of each item in Cart
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="collection-item avatar">

        <span className="title">{this.props.name}</span>
        <p>${this.props.price}

        </p>

        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
      </li>
    );
  }
}

