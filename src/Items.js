import React from 'react';
export default class Items extends React.Component {

  constructor(props) {
    super(props);
  }

  //adds item to cart
  addToCart(item) {
    console.log(item)
    let cart = localStorage.getItem("cart")
    if (cart == null) {
      localStorage.setItem("cart", "[]")
    }
    let cartItems = JSON.parse(localStorage.getItem("cart"))
    console.log(cartItems)
    cartItems.push(item)
    localStorage.setItem("cart", JSON.stringify(cartItems))

    //notify parent (app.js) that a change to cart has been made
    this.props.onCartCountChange();
  }

  //create cards for each item
  render() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <div className="container">
          <div className="row">
            <div className="col s4">
              <div className="card">
                <div className="card-image">
                  <img src="https://res.cloudinary.com/dh7gi8p79/image/upload/v1643575370/zquurosbqpswmq9mqxhq.jpg" />
                  <span className="card-title">Cafe Latte</span>
                  <a onClick={() => this.addToCart({ item: "Cafe Latte", price: 5.00 })} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                </div>
                <div className="card-content">
                  <p><strong>$5.00</strong> - Espresso mixed with hot or steamed milk - heaven in a cup.</p>
                </div>
              </div>
            </div>
            <div className="col s4">
              <div className="card">
                <div className="card-image">
                  <img src="https://res.cloudinary.com/dh7gi8p79/image/upload/v1643575380/fy0lzsxgqteheavnqyav.png" />
                  <span className="card-title">Iced Coffee</span>
                  <a onClick={() => this.addToCart({ item: "Iced Coffee", price: 3.50 })} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                </div>
                <div className="card-content">
                  <p><strong>$3.50</strong> - Coffee over ice - will get you through any day.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

