import React, { useEffect } from "react";
import useApi from "../hooks/useApi";
import productServices from "../services/productServices";

export default function ProductsList() {

  const {data: products, loading, error, request} = useApi(productServices.getProducts)

  useEffect(() => {
    request()
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
