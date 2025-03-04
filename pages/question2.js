// 2. Shopping cart (3p)
// Visa innehållet i shoppingCart genom att rendera en komponent ShoppingItem
// för varje objekt i shoppingCart.
// ShoppingItem ska visa namnet och priset på varan. amount (antal) ska visas i ett
// input-fält. När man ändrar värdet i input-fältet ska shoppingCart uppdateras
// med det nya värdet.
// Under shoppinglistan ska det stå total price, med det totala priset för alla
// varor i shoppingCart.

import { useState } from "react";

const initialShoppingCart = [
  { name: "Apple", price: 3, amount: 1, id: 1 },
  { name: "Banana", price: 2, amount: 1, id: 2 },
  { name: "Cherry", price: 3, amount: 1, id: 3 },
  { name: "Durian", price: 4, amount: 1, id: 4 },
  { name: "Eggplant", price: 5, amount: 1, id: 5 },
];

export default function Question2() {
  const [shoppingCart, setShoppingCart] = useState(initialShoppingCart);
  const [price, setPrice] = useState(5);
  //const [amount, setAmount] = useState(1)

  function setAmount(value, item) {
    const elem = shoppingCart.find(({ name }) => name === item);
    if (elem) elem.price = value;
    totalPrice();
  }

  function totalPrice() {
    let totprice = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
      totprice = totprice + shoppingCart[i].price;
    }
    setPrice(totprice);
  }

  function ShoppingItem(item) {
    console.log("item" + item.name);
    return (
      <div>
        <div>
          {item.name} {item.price}
        </div>
        <input
          type="text"
          value={item.amount}
          onChange={(e) => setAmount(e, item.name)}
        ></input>
      </div>
    );
  }
  return (
    <div>
      <h1>Question 2</h1>
      {console.log("cart" + shoppingCart)}
      {shoppingCart.map((cartItem, index) => (
        <ShoppingItem item={cartItem} key={index} />
      ))}
      <div>{price}</div>
    </div>
  );
}
