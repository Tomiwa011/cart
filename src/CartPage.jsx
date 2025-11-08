function CartPage({ cart, handleRemoveFromCart }) {
  function handleCheckout() {
    alert("Order Placed Successfully");
    setCart([]);
  }

  return (
    <div className="cart-page">
      <h2 className="head-s">Shopping Cart</h2>

      <div className="cart-s">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                {/* If the product has variations, show the right variation image */}
                <img
                  src={item.variation ? item.variationImage : item.image}
                  alt={item.name}
                />
                <div className="item-details">
                  <p>
                    {item.name}{" "}
                    {item.variation && (
                      <span className="variation">— {item.variation}</span>
                    )}
                  </p>
                  <p>${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="remove-item">
                  <button onClick={() => handleRemoveFromCart(index)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="summary">
            <h3>Order Summary</h3>
            <h4 className="summary-item">
              Total:{" "}
              <span>
                $
                {cart
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </span>
            </h4>
            <button className="checkout-btn" onClick={() => handleCheckout()}>
              Checkout
            </button>
          </div>
        )}
      </div>

      {/* Order Summary */}
    </div>
  );
}

export default CartPage;
