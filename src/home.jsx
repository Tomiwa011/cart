import { useState } from "react";
import products from "./productsData";
import ProductPopup from "./ProductDetailsPage";

function home({ handleAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="product-list">
      <h2 className="head-s">Products</h2>

      <div className="products">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={
                product.variations ? product.variations[0].image : product.image
              }
              alt={product.name}
            />

            <div>
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button
                className="add-to-cart-btn"
                onClick={(e) => {
                  e.stopPropagation(); // prevent popup
                  handleAddToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductPopup
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          handleAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}

export default ProductsPage;
