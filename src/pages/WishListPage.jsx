import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BannerTitle from "../components/banner-title/BannerTitle";
import ListShopItem from "../components/modules/shop/listView/ListShopItem";
const WishListPageStyles = styled.div``;
const WishListPage = () => {
  const productIds = useSelector((state) => state.wishlist.productIds);
  const [wishlistData, setWishlistData] = useState([]);
  useEffect(() => {
    const getDataByProductIds = async () => {
      try {
        await axios
          .post(`${process.env.REACT_APP_API_URL}/product/get-product-by-ids`, {
            productIds: productIds,
          })
          .then((response) => {
            setWishlistData(response.data);
          });
      } catch (err) {
        console.log(err);
      } finally {
      }
    };
    getDataByProductIds();
  }, [productIds]);
  return (
    <WishListPageStyles>
      <BannerTitle title="Wishlist"></BannerTitle>
      <div className="container">
        {wishlistData.length >= 1 &&
          wishlistData.map((item, index) => (
            <ListShopItem isWishlist={true} data={item} />
          ))}
      </div>
    </WishListPageStyles>
  );
};

export default WishListPage;
