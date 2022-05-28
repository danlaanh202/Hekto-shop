import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { navLink } from "./components/navbar/path";
import BlogsPage from "./pages/BlogsPage";
import CartCompleted from "./pages/CartCompleted";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPages from "./pages/NotFoundPages";
import ProductDetailPage from "./pages/ProductDetailPage";
import RegisterPage from "./pages/RegisterPage";
import SearchListPage from "./pages/SearchListPage";
import ShopPage from "./pages/ShopPage";
import ShoppingCart from "./pages/ShoppingCart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/blog" element={<BlogsPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/completed" element={<CartCompleted />}></Route>
          <Route path="/cart" element={<ShoppingCart />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
          <Route path="/search" element={<SearchListPage />}></Route>
          <Route path="/products" element={<ProductDetailPage />}></Route>
          <Route path="*" element={<NotFoundPages />}></Route>
        </Route>
        ;
      </Routes>
    </Router>
  );
};

export default App;
