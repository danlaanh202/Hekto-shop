import React from "react";
import Banner from "../components/banner/Banner";
import BannerAdvertise from "../components/banner/BannerAdvertise";
import BannerBottom from "../components/banner/BannerBottom";
import DiscountItem from "../components/discount/DiscountItem";
import Feature from "../components/feature/Feature";
import Latest from "../components/latest/Latest";
import LatestBlog from "../components/latestBlog/LatestBlog";
import SaleCollection from "../components/saleCollection/SaleCollection";
import ShopexOffer from "../components/shopex/ShopexOffer";
import Sponsor from "../components/sponsor/Sponsor";
import TopCategories from "../components/topCategory/TopCategories";

const HomePage = () => {
  return (
    <>
      <Banner></Banner>
      <Feature></Feature>
      <Latest></Latest>
      <ShopexOffer></ShopexOffer>
      <BannerAdvertise></BannerAdvertise>
      <Feature></Feature>
      <SaleCollection></SaleCollection>
      <DiscountItem></DiscountItem>
      <TopCategories></TopCategories>
      <BannerBottom></BannerBottom>
      <Sponsor></Sponsor>
      <LatestBlog></LatestBlog>
    </>
  );
};

export default HomePage;
