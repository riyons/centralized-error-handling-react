const express = require("express");
const cors = require("cors");
const app = express();

// Enable CORS
app.use(cors());

// Dummy products data
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    description: "A great product",
    inStock: true,
  },
  {
    id: 2,
    name: "Product 2",
    price: 14.99,
    description: "Another great product",
  },
  {
    id: 3,
    name: "Product 3",
    price: 5.0,
    description: "Budget friendly product",
    inStock: true,
  },
  { id: 4, name: "Product 4", price: 19.99, description: "Top rated product" },
  { id: 5, name: "Product 5", price: 9.99, description: "Value for money" },
  {
    id: 6,
    name: "Product 6",
    price: 24.99,
    description: "Premium quality product",
  },
  {
    id: 7,
    name: "Product 7",
    price: 7.5,
    description: "Affordable yet durable",
    inStock: true,
  },
  { id: 8, name: "Product 8", price: 12.0, description: "All-season product" },
  {
    id: 9,
    name: "Product 9",
    price: 3.49,
    description: "Basic everyday product",
    inStock: true,
  },
  {
    id: 10,
    name: "Product 10",
    price: 29.99,
    description: "High-end latest product",
  },
];

// Dummy categories data
const categories = [
  { id: 1, name: "Electronics", description: "Gadgets and devices" },
  { id: 2, name: "Home Appliances", description: "Appliances for your home" },
  { id: 3, name: "Books", description: "Printed and digital books" },
  { id: 4, name: "Clothing", description: "Men, women, and kids apparel" },
  { id: 5, name: "Groceries", description: "Daily essentials and food items" },
  { id: 6, name: "Toys", description: "Fun and games for all ages" },
  { id: 7, name: "Furniture", description: "Home and office furnishings" },
  {
    id: 8,
    name: "Sporting Goods",
    description: "Gear for all kinds of sports",
  },
  { id: 9, name: "Beauty", description: "Cosmetics and skincare products" },
  { id: 10, name: "Automotive", description: "Car parts and accessories" },
];

// Route to return the dummy products
app.get("/products", (req, res) => {
  res.status(200).json(products);
});

// Route to return the dummy categories
app.get("/categories", (req, res) => {
  res.json(categories);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
