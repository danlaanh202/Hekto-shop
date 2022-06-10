import React from "react";

import Banner from "../components/modules/home/banner/Banner";
import BannerAdvertise from "../components/modules/home/banner/BannerAdvertise";
import BannerBottom from "../components/modules/home/banner/BannerBottom";
import DiscountItem from "../components/modules/home/discount/DiscountItem";
import Feature from "../components/modules/home/feature/Feature";
import Latest from "../components/modules/home/latest/Latest";
import LatestBlog from "../components/modules/home/latestBlog/LatestBlog";
import ShopexOffer from "../components/modules/home/shopex/ShopexOffer";
import TopCategories from "../components/modules/home/topCategory/TopCategories";
import SaleCollection from "../components/modules/home/saleCollection/SaleCollection";

import Sponsor from "../components/sponsor/Sponsor";

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
      <LatestBlog></LatestBlog>
      <div className="container">
        <Sponsor></Sponsor>
      </div>
    </>
  );
};

export default HomePage;
