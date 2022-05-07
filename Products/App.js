import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import "./App.css";
import { Navbar } from "./containers/Navbar";
import { CategoryCard } from "./containers/CategoryCard";
import { Cart } from "./containers/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/products/:sweets" element={<CategoryCard />} />
          <Route path="/products/:sauces" element={<CategoryCard />} />
          <Route path="/products/:butter" element={<CategoryCard />} />
          <Route path="/cart" element={<Cart />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
