import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CartIcon from "../../icons/CartIcon";
import HeartIcon from "../../icons/HeartIcon";
import SearchPlus from "../../icons/SearchPlus";
import { addProduct } from "../../redux/cartRedux";
import { addWishlist } from "../../redux/wishlistRedux";
import { mobile } from "../../responsive";
import { ToastContainer, toast } from "react-toastify";
const ProductIconHoverStyles = styled.div`
  display: flex;
  gap: 10px;

  .product-icon {
    z-index: 100;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    ${mobile({
      width: "15px",
      height: "15px",
    })}

    path {
      fill: #1389ff;
    }
    :hover {
      background-color: ${(props) => props.background || "#eeeffb"};
      path {
        fill: #2f1ac4;
      }
    }
  }
`;
const ProductIconHover = ({
  isHorizontal = false,
  className,
  background = "",
  productId = "20",
  price = 40,
}) => {
  const notify = (content) => toast(content);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addProduct({ _id: productId, price: price, amount: 1 }));
    notify("Product is added to cart");
  };
  const addToWishlist = () => {
    dispatch(addWishlist({ _id: productId }));
    notify("Product is added to wishlist");
  };
  return (
    <ProductIconHoverStyles
      background={background}
      style={
        !isHorizontal ? { flexDirection: "column" } : { flexDirection: "row" }
      }
    >
      <CartIcon className="product-icon " onClick={addToCart}></CartIcon>
      <HeartIcon className="product-icon" onClick={addToWishlist}></HeartIcon>
      <SearchPlus
        onClick={() => navigate(`/products/${productId}`)}
        className="product-icon "
      ></SearchPlus>
    </ProductIconHoverStyles>
  );
};

export default ProductIconHover;
