import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  // console.log(cart);
  // const total = cart.reduce((acc, curr) => (acc = acc + curr.price), 0);
  let totalquantity = 0;
  let total = 0;
  for (const product of cart) {
    // console.log(product.quantity);
    // product.quantity = !product.quantity?1: product.quantity
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalquantity = totalquantity + product.quantity;
  }
  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) / 100;
  const grandTotal = total + shipping + tax;
  // let total = 0;
  // for (const product of cart) {
  //   total = total + product.price;
  // }
  return (
    <div>
      <h3>Order sumary</h3>
      <h5>Items Ordered: {totalquantity}</h5>
      <br />
      <p>Total: {total.toFixed(2)}</p>
      <p>Shipping: {shipping}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <p>Grand Total {grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
