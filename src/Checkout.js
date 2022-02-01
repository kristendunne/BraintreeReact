import CheckoutForm from './CheckoutForm'
import CartItem from './CartItem'
export default function Checkout() {

  let cart = localStorage.getItem("cart")
  if (cart == null) {
    localStorage.setItem("cart", "[]")
  }
  let items = JSON.parse(localStorage.getItem("cart"))
  console.log(items)
  const listItems = items.map((item) =>
    <CartItem key={item} name={item.item} price={item.price} />
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
      <ul className="collection">
        {listItems}
      </ul>

      <h5>Total: ${sum}</h5>
      <CheckoutForm />
    </div>
  );
}

