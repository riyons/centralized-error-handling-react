# Centralized Error Handling in React 🚀

**A Scalable, Modular Approach to Managing API Calls and Errors in React Applications**

This repository contains the source code for my tutorial on building a centralized error-handling system in React using **Axios**, **custom hooks** (`useApi`), and **service modules**. The goal is to simplify error management, improve maintainability, and provide a seamless user experience.

# Learn Robust Frontend Error Handling with React

📺 **Watch the YouTube Tutorial**:  
[**Simplifying React Error Handling: Build a Robust Frontend System**](https://www.youtube.com/watch?v=qa996Dh0TNo)

🎓 **Free Udemy Course**:  
[**Master Centralized Error Handling in React**](https://www.udemy.com/course/master-react-error-handling-with-axios-and-hooks)

## ✍️ Detailed Article on Dev.to

Looking for a deeper dive into the topic?  
👉 [**Read my in-depth article here**](https://dev.to/riyon_sebastian/building-a-robust-frontend-error-handling-system-with-axios-and-custom-hooks-27k3) to learn about building a robust frontend error handling system with Axios and custom hooks.

---

## 🔥 Features

- **Centralized Axios Instance**: Avoid repetitive configuration and simplify API requests.
- **Global Error Management**: Handle all errors consistently using Axios interceptors.
- **Reusable Service Modules**: Keep API logic modular and organized.
- **Custom `useApi` Hook**: Simplify state management for API calls (data, loading, error).
- **Scalable Architecture**: A solid foundation for adding advanced features in the future.

---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/riyons/centralized-error-handling-react.git
cd centralized-error-handling-react
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Environment Variables

Create a `.env.local` file in the root directory:

```env
REACT_APP_API_BASE_URL=http://localhost:3000
```

### 4. Run the Application

```bash
npm start
```

---

## 🧩 Backend Setup (Dummy API Server)

A simple Node.js server is included in the `backend` folder to simulate API responses.

### Steps to Set Up:

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node app.js
   ```

The server will run on `http://localhost:3000`. Update the `REACT_APP_API_BASE_URL` in the `.env.local` file to point to this URL for local development.

---

## 📖 Key Concepts

### 1. Centralized Axios Instance

- **Purpose**: Manages base URL, headers, and global error handling.
- **Code**: See `/utils/axiosInstance.js`.

### 2. Global Error Handling with Interceptors

- **Purpose**: Parse errors and display user-friendly messages using `react-toastify`.
- **Enhancements**: Redirect unauthorized users, categorize errors, and log them efficiently.

### 3. Reusable Service Modules

- **Purpose**: Keep API logic modular and separate from components.
- **Code**: See `/services/productService.js` for examples like `getProducts` and `createProduct`.

### 4. Custom `useApi` Hook

- **Purpose**: Simplify API calls with centralized state management for `loading`, `error`, and `data`.
- **Code**: See `/hooks/useApi.js`.

---

## 🌟 Highlights from the Tutorial

1. **Centralized Error Parsing**

   - Custom error messages defined in `/config/ERROR_MESSAGES.js`.
   - Example:
     ```javascript
     const ERROR_MESSAGES = {
       401: "Unauthorized. Please log in.",
       500: "Server error. Try again later.",
       NETWORK_ERROR: "Check your internet connection.",
     };
     ```

2. **User-Friendly Notifications**
   - Display actionable messages using `react-toastify`.

---

## 🗂️ Architecture Overview

### Core Components and Their Interactions

1. **Axios Instance (`axiosInstance.js`)**

   - Centralizes API configuration and error handling
   - Implements interceptors for global error management
   - Example usage:

   ```javascript
   // Intercepts all responses and handles errors globally
   axiosInstance.interceptors.response.use(
     (response) => response,
     (error) => {
       // Converts technical errors into user-friendly messages
       const message =
         ERROR_MESSAGES[error.response?.status] || ERROR_MESSAGES.GENERIC_ERROR;
       toast.error(message);
       return Promise.reject(new Error(message));
     }
   );
   ```

2. **Service Layer (`productServices.js`)**

   - Abstracts API calls from components
   - Provides reusable service functions
   - Example:

   ```javascript
   const getProducts = (params) => axiosInstance.get("/products", { params });
   const getCategories = (params) =>
     axiosInstance.get("/categories", { params });
   ```

3. **Custom Hook (`useApi.js`)**

   - Manages API call states (loading, error, data)
   - Provides consistent error handling
   - Usage example:

   ```javascript
   const { data, loading, error, request } = useApi(
     productServices.getProducts
   );
   // request() triggers the API call and manages all states automatically
   ```

4. **Page Components (`ProductsPage.jsx`)**

   - Implements the actual UI logic
   - Uses the custom hook for data fetching
   - Handles loading and error states
   - Example:

   ```javascript
   const ProductsPage = () => {
     const {
       data: products,
       loading,
       error,
     } = useApi(productServices.getProducts);

     if (loading) return <LoadingMessage />;
     if (error) return <ErrorMessage error={error} />;

     return <ProductsList products={products} />;
   };
   ```

## 🔄 Data Flow

1. Component calls `useApi` hook
2. Hook triggers service function
3. Service uses `axiosInstance`
4. Axios interceptors handle errors
5. Error messages from `ERROR_MESSAGES.js` are displayed

## 🎯 Error Handling Strategy

### Error Categories (`ERROR_MESSAGES.js`)

---

## 📂 Future Enhancements

I'm planning to expand the system with additional features, including:

- **Retry Mechanism**: Implement custom retry logic with exponential backoff to enhance reliability.
- **Advanced Error Categorization**: Improve error parsing for specific use cases, such as validation or server errors.
- **Request Cancellation**: Use Axios cancel tokens to prevent memory leaks on component unmounts.

---

## 📂 Related Resources

- [**YouTube Tutorial**](https://www.youtube.com/watch?v=qa996Dh0TNo)
- [**Free Udemy Course**](https://www.udemy.com/course/master-react-error-handling-with-axios-and-hooks)
- [**Axios Interceptors Documentation**](https://axios-http.com/docs/interceptors)
- [**React-Toastify Documentation**](https://fkhadra.github.io/react-toastify/introduction)

---

## 🤝 Contribute

Have suggestions or found a bug?  
Feel free to open an issue or create a pull request on [GitHub](https://github.com/riyons/centralized-error-handling-react).

---

## 💬 Feedback

Did you find this helpful?

- 🌟 Star the repository!
- 💬 Share your feedback in the [YouTube comments](https://www.youtube.com/watch?v=qa996Dh0TNo).

Happy coding! 🚀
