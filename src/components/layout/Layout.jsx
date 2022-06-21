import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";

import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  const topRef = useRef();
  const isSticky = (e) => {
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? topRef.current.classList.add("is-sticky")
      : topRef.current.classList.remove("is-sticky");
  };
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  return (
    <>
      <ToastContainer />
      <div ref={topRef}>
        <Header></Header>
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Layout;
