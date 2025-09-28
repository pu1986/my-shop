import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreaseQuantity, addToCart, removeFromCart, clearCart } from "../redux/cartSlice";

const Cart = () => {
  const { cartItems, totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid #eee", padding: 12, borderRadius: 8 }}>
      <h2>Cart</h2>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      {cartItems.length === 0 && <p>Cart is empty</p>}
      {cartItems.map((item) => (
        <div key={item.id} style={{ borderBottom: "1px solid #eee", padding: 8 }}>
          <h4>{item.title}</h4>
          <p>₹{item.price} × {item.quantity}</p>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <button onClick={() => dispatch(addToCart(item))}>+</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <hr />
      <h3>Total Items: {totalQuantity}</h3>
      <h3>Total: ₹{Number(totalAmount).toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
