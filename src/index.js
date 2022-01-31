import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Checkout from './Checkout';
import Items from './Items';
import { Link } from "react-router-dom";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


<html>
  <head>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

  
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>

  <body>

  
    <script type="text/javascript" src="js/materialize.min.js"></script>
  </body>
</html>

ReactDOM.render(
  <BrowserRouter>
   <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/items">Items</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>
    </div>
  </nav>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="items" element={<Items />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



