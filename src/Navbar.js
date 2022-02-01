import React from 'react';
import { Link } from "react-router-dom";
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (<nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Cupcake's Coffees</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/items">Menu</Link></li>
          <li><Link to="/checkout">Cart ({this.props.cartCount})</Link></li>
        </ul>
      </div>
    </nav>
    )
  }
}




