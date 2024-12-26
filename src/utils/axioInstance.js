import axios from "axios";
import { toast } from "react-toastify";
import ERROR_MESSAGES from "../config/ERROR_MESSAGES";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    let message = ERROR_MESSAGES.GENERIC_ERROR;

    if (error.response) {
      const { status } = error.response;
      message = ERROR_MESSAGES[status] || ERROR_MESSAGES.GENERIC_ERROR;
    } else {
      message = ERROR_MESSAGES.NETWORK_ERROR;
    }

    toast.error(message);
    return Promise.reject(new Error(message));
  }
);
export default axiosInstance;
