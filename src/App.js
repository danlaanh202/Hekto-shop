import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { navLink } from "./components/navbar/path";
import {
  BlogsPage,
  CartCompleted,
  HomePage,
  LoginPage,
  NotFoundPages,
  ProductDetailPage,
  RegisterPage,
  SearchListPage,
  ShopPage,
  ShoppingCart,
  SingleBlogPage,
  ContactPage,
} from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/blog/:id" element={<SingleBlogPage />}></Route>
          <Route path="/blog" element={<BlogsPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/completed" element={<CartCompleted />}></Route>
          <Route path="/cart" element={<ShoppingCart />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
          <Route path="/search" element={<SearchListPage />}></Route>
          <Route path="/products" element={<ProductDetailPage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="*" element={<NotFoundPages />}></Route>
        </Route>
        ;
      </Routes>
    </Router>
  );
};

export default App;
