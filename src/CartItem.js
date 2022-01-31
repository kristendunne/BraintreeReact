import React from 'react';
export default class CartItem extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <li className="collection-item avatar">

          {/* <img src="images/yuna.jpg" alt="" className="circle" /> */}
          <span className="title">{this.props.name}</span>
          <p>${this.props.price}
             
          </p>

          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
      );
    }
  }
  
  