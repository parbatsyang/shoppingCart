import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Carts from "./components/Carts";
import CartItem from "./components/CartItem";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Carts />} />
        <Route path="/item" element={<CartItem />} />
      </Routes>
    </div>
  );
}

export default App;
