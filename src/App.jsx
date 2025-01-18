import "./App.css";
import { ToastContainer } from "react-toastify";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <div className="App">
      <ProductsPage />
      <ToastContainer />
    </div>
  );
}

export default App;
