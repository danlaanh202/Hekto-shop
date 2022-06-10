import React from "react";
import styled from "styled-components";
import BannerTitle from "../components/banner-title/BannerTitle";
import PrimaryButton from "../components/button/PrimaryButton";
import CartItem from "../components/modules/cart/CartItem";
import CartTotal from "../components/modules/cart/CartTotal";
import { useDispatch, useSelector } from "react-redux";

const ShoppingCartStyles = styled.div`
  .cart-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
  .cart-container {
    margin: 100px auto;
    display: flex;
    gap: 80px;
    .cart-items {
      width: 720px;
      .clear-btn {
        margin-top: 28px;
        padding: 12px 0;
      }
      .cart-heading {
        .cart-heading-item {
          margin-bottom: 40px;
          font-size: 20px;
          line-height: 23px;
          color: #1d3178;
        }
      }
    }
  }
`;
const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <ShoppingCartStyles>
      <BannerTitle title="Shoping Cart"></BannerTitle>
      <div className="cart-container container">
        <div className="cart-items">
          <div className="cart-heading cart-grid">
            <h3 className="cart-heading-item">Product</h3>
            <h3 className="cart-heading-item">Price</h3>
            <h3 className="cart-heading-item">Quantity</h3>
            <h3 className="cart-heading-item">Total</h3>
          </div>
          {cartItems.products.map((item, index) => (
            <CartItem
              productId={item._id}
              amount={item.amount}
              price={item.price}
              key={item._id}
            />
          ))}
          <PrimaryButton className="clear-btn">Clear Cart</PrimaryButton>
        </div>
        <CartTotal total={cartItems.total} />
      </div>
    </ShoppingCartStyles>
  );
};

export default ShoppingCart;
