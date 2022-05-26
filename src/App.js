import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { navLink } from "./components/navbar/path";
import HomePage from "./pages/HomePage";
import NotFoundPages from "./pages/NotFoundPages";
import ProductDetailPage from "./pages/ProductDetailPage";
import SearchListPage from "./pages/SearchListPage";
import ShopPage from "./pages/ShopPage";

const App = () => {
  console.log(navLink);
  return (
    <Router>
      <Routes>
        {/* {navLink.map((item) => {
          <Route path={item.to} key={item.to} element={<Layout />}></Route>;
        })} */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
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
