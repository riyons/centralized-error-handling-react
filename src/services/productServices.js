import axiosInstance from "../utils/axioInstance";

const getProducts = (params) => {
  return axiosInstance.get("/products", { params });
};

const getCategories = (params) => {
  return axiosInstance.get("/categories", { params });
};

export default {
  getProducts,
  getCategories,
};
