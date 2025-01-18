import React from "react";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const { name, description, price, inStock } = product;

  return (
    <div className="product-card">
      <div className="product-content">
        <div className="product-header">
          <span className="product-category">Category</span>
          <span
            className={`product-status ${
              inStock ? "in-stock" : "out-of-stock"
            }`}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <h2 className="product-title">{name}</h2>
        <p className="product-description">{description}</p>
        <div className="product-price">${price.toFixed(2)}</div>
        <button className="product-button" disabled={!inStock}>
          {inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inStock: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ProductCard;
