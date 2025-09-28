import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], // { id, title, price, image, quantity }
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.cartItems.find((it) => it.id === product.id);

      if (existing) {
        // optional: check stock if product.stock exists
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalAmount += Number(product.price);
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existing = state.cartItems.find((it) => it.id === id);
      if (!existing) return;

      if (existing.quantity > 1) {
        existing.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= Number(existing.price);
      } else {
        state.cartItems = state.cartItems.filter((it) => it.id !== id);
        state.totalQuantity -= 1;
        state.totalAmount -= Number(existing.price);
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existing = state.cartItems.find((it) => it.id === id);
      if (!existing) return;
      state.totalQuantity -= existing.quantity;
      state.totalAmount -= existing.quantity * Number(existing.price);
      state.cartItems = state.cartItems.filter((it) => it.id !== id);
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
