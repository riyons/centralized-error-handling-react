import React, { useEffect } from "react";
import useApi from "../hooks/useApi";
import productServices from "../services/productServices";
import LoadingMessage from "../components/LoadingMessage";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const {
    data: products,
    loading,
    error,
    request,
  } = useApi(productServices.getProducts);

  useEffect(() => {
    request();
  }, []);

  if (loading) return <LoadingMessage title="Loading products..." />;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="products-container">
      <div className="products-grid">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
