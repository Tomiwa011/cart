import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import ProductsPage from "./ProductsPage";
import CartPage from "./CartPage";

function App() {
  const [cart, setCart] = useState([]);
  function handleAddToCart(product, variation = null) {
    const existingItem = cart.find(
      (item) => item.id === product.id && item.variation === variation
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id && item.variation === variation
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          variation,
          variationImage: product.variations?.find((v) => v.color === variation)
            ?.image,
          quantity: 1,
        },
      ]);
    }
  }

  function handleRemoveFromCart(index) {
    setCart(cart.filter((_, i) => i !== index));
  }

  return (
    <Router>
      <nav className="nav">
        <Link to="/" className="logo">
          ecommerce
        </Link>

        <input type="search" name="" id="" className="nav-search" />
        <Link to="/" className="account">
          Account
        </Link>
        <Link to="/" className="orders">
          Orders
        </Link>

        <Link to="/cart" className="cart">
          Cart ({cart.length})
        </Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<ProductsPage handleAddToCart={handleAddToCart} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
