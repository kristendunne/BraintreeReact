import MySillyCheckoutForm from './MySillyCheckoutForm'
import CartItem from './CartItem'
// import Items from './Items';
export default function Checkout() {
  let cart = localStorage.getItem("cart")
      if (cart == null){
        localStorage.setItem("cart", "[]")
      }
      let items = JSON.parse(localStorage.getItem("cart"))
      console.log(items)
const listItems = items.map((item) =>
  <CartItem key={item} name={item.item} price={item.price}/>
);
const array = items.map((item) => item.price);

let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);
    return (
      <div style={{ padding: "1rem 0" }}>
        <h3>Cart</h3>
        {/* {localStorage.getItem("cart")} */}
        {/* <CartItem /> */}
        <ul className="collection">
          {listItems}
          {/* {this.localStorage.getItem("cart").map} */}
        </ul>
        
        <h5>Total: ${sum}</h5>
        <MySillyCheckoutForm />
      </div>
    );
  }

  