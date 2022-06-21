import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "./components/ScrollToTop";
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
import AddProductHide from "./pages/AddProductHide";
import WishListPage from "./pages/WishListPage";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <ScrollToTop/>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <LoginPage />}
            ></Route>
            <Route path="/wishlist" element={<WishListPage/>}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/blog/:id" element={<SingleBlogPage />}></Route>
            <Route path="/blog" element={<BlogsPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/add-product" 
                element={!user ? <Navigate to="/" /> : <AddProductHide />}
            ></Route>
            <Route path="/completed" element={<CartCompleted />}></Route>
            <Route path="/cart" element={<ShoppingCart />}></Route>
            <Route path="/shop" element={<ShopPage />}></Route>
            <Route path="/search" element={<SearchListPage />}></Route>
            <Route path="/products/:id" element={<ProductDetailPage />}></Route>
            <Route
              path="/products"
              element={<ShopPage title="Producs List" />}
            ></Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="*" element={<NotFoundPages />}></Route>
          </Route>
          ;
        </Routes>
 
    </Router>
  );
};

export default App;
