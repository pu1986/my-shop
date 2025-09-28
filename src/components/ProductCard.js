import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    // optional: check product.stock before dispatching
    dispatch(addToCart(product));
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
      <img src={product.image} alt={product.title} style={{ width: "100%", height: 140, objectFit: "cover" }} />
      <h4>{product.title}</h4>
      <p style={{ height: 40, overflow: "hidden" }}>{product.description}</p>
      <p><strong>₹{product.price}</strong></p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
