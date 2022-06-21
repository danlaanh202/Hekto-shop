import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BannerTitle from "../components/banner-title/BannerTitle";
import ListShopItem from "../components/modules/shop/listView/ListShopItem";
const WishListPageStyles = styled.div`
  .container {
    .empty {
      margin-top: 120px;
      font-size: 26px;
      line-height: 1.2;
      text-align: center;
    }
  }
`;
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
        {(wishlistData.length === 0 || !wishlistData) && (
          <div className="empty">
            Wishlist is empty, back to <Link to="/">Home</Link>
          </div>
        )}
        {wishlistData.length >= 1 &&
          wishlistData.map((item, index) => (
            <ListShopItem isWishlist={true} data={item} />
          ))}
      </div>
    </WishListPageStyles>
  );
};

export default WishListPage;
