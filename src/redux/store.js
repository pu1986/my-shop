import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const loadFromLocalStorage = () => {
  try {
    const s = localStorage.getItem("cartState");
    if (!s) return undefined;
    return { cart: JSON.parse(s) };
  } catch {
    return undefined;
  }
};

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("cartState", JSON.stringify(state.cart));
  } catch {}
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
