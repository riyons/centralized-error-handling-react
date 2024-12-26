import "./App.css";
import { ToastContainer } from "react-toastify";
import ProductsList from "./components/productsList";

function App() {
  return (
    <div className="App">
      <ProductsList />
      <ToastContainer />
    </div>
  );
}

export default App;
