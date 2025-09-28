import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>My Shop</h1>

      {/* Top Add to Cart button */}
      <div style={{ marginBottom: 20, textAlign: "center" }}>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => alert("Add to Cart clicked!")} // Replace with Redux action
        >
          Add to Cart
        </button>
      </div>

      {/* Responsive layout */}
      <div style={styles.flexContainer}>
        <div style={styles.left}>
          <ProductList />
        </div>
        <div style={styles.right}>
          <Cart />
        </div>
      </div>
    </div>
  );
}

const styles = {
  flexContainer: {
    display: "flex",
    gap: 20,
    flexWrap: "wrap", // important for responsiveness
  },
  left: {
    flex: "2 1 300px", // grow 2, shrink 1, min-width 300px
    minWidth: 300,
  },
  right: {
    flex: "1 1 200px", // grow 1, shrink 1, min-width 200px
    minWidth: 200,
  },
};

export default App;
