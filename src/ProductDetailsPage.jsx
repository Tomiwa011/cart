import { useState, useEffect } from "react";

function ProductPopup({ product, onClose, handleAddToCart }) {
  const [selectedVariation, setSelectedVariation] = useState(null);

  // Set default variation when popup opens
  useEffect(() => {
    if (product.variations && product.variations.length > 0) {
      setSelectedVariation(product.variations[0]); // pick the first one
    }
  }, [product]);

  const displayImage =
    selectedVariation?.image ||
    (Array.isArray(product.image) ? product.image[0] : product.image);

  return (
    <div className="product-popup" onClick={onClose}>
      <div
        className="product-popup-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main image */}
        <img src={displayImage} alt={product.name} className="popup-image" />

        <h2>{product.name}</h2>
        <p className="popup-price">${product.price.toFixed(2)}</p>
        <p className="popup-description">
          {product.description || "No description available."}
        </p>

        {/* Variations */}
        {product.variations && (
          <div className="variation-options">
            <p>Select Color:</p>
            <div className="variation-thumbnails">
              {product.variations.map((variation, index) => (
                <img
                  key={index}
                  src={variation.image}
                  alt={variation.color}
                  className={`variation-thumb ${
                    selectedVariation?.color === variation.color ? "active" : ""
                  }`}
                  onClick={() => setSelectedVariation(variation)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart */}
        <button
          className="add-to-cart-btn"
          onClick={() => {
            handleAddToCart(product, selectedVariation?.color || null);
            onClose();
          }}
        >
          Add to Cart
        </button>

        {/* Close */}
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ProductPopup;
