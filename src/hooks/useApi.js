import { useState } from "react";

const useApi = (serviceFunction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (...args) => {
    setLoading(true);
    setError(null);
    try {
      const response = await serviceFunction(...args);
      setData(response.data);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, request };
};

export default useApi;
