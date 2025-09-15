import { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Back To School Bag",
    price: 499.0,
    image: "src/assets/img/pexels-jibarofoto-3731256.jpg",
  },
  {
    id: 2,
    name: "Fujifilm Camera",
    price: 499.0,
    image: "src/assets/img/pexels-madebymath-90946.jpg",
  },
  {
    id: 3,
    name: "Sony Camera",
    price: 499.0,
    image: "src/assets/img/pexels-olenkabohovyk-3693700.jpg",
  },
  {
    id: 4,
    name: "Apple Macbook",
    price: 499.0,
    image: "src/assets/img/pexels-pixabay-4158.jpg",
  },
  {
    id: 5,
    name: "Hp Laptop",
    price: 499.0,
    image: "src/assets/img/pexels-artempodrez-4884122.jpg",
  },
  {
    id: 6,
    name: "Nikon Camera",
    price: 499.0,
    image: "src/assets/img/pexels-alexazabache-3907507.jpg",
  },
];

function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(product) {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }
  function handleCheckOut() {
    alert("Order Placed Successfully");
    setCart([]);
  }

  return (
    <>
      <div className="nav">
        <a href="#" className="logo">
          ecommerce
        </a>
        <input type="search" className="nav-search" placeholder="Search..." />
        <a href="#" className="account">
          Account
        </a>
        <a href="#" className="orders">
          Orders
        </a>
        <a href="#" className="cart">
          Cart ({cart.length})
        </a>
      </div>

      <div className="App">
        {/* Product list */}
        <div className="product-list">
          <h2 className="head-s">Products</h2>
          <div className="products">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div>
                  <h3>{product.name}</h3>
                  <p>${product.price.toFixed(2)}</p>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="head-s">Shopping Cart</h2>
          <section className="cart-section">
            <div className="cart-s">
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cart.map((item, index) => (
                  <div className="cart-item" key={index}>
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <p>{item.name}</p>
                      <p>${item.price.toFixed(2)}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="summary">
              <h3>Order Summary </h3>
              <h4 className="summary-item">
                Total: $
                {cart
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </h4>
              <button className="checkout-btn" onClick={handleCheckOut}>
                Checkout
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
