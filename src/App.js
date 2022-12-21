import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import ProductList from "./component/pages/ProductList";
import Wishlist from "./component/pages/Wishlist";
import Error from "./component/pages/Error";
import Product from "./component/pages/Product";
import Login from "./component/pages/Login";
import ShopingCart from "./component/pages/ShopingCart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<ShopingCart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
