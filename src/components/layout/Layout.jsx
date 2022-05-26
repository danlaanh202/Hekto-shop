import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../header/Header";
import Navbar from "../navbar/Navbar";

import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Outlet></Outlet>

      <Footer></Footer>
    </>
  );
};

export default Layout;
