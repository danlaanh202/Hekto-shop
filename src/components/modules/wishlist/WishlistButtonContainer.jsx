import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addProduct } from "../../../redux/cartRedux";
import { removeFromWishlist } from "../../../redux/wishlistRedux";
import { notify } from "../../../utils/notify";
import PrimaryButton from "../../button/PrimaryButton";
const WishlistButtonContainerStyles = styled.div`
  display: flex;
  gap: 20px;
  .wishlist-btn {
    width: unset;
    max-width: 300px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;
const WishlistButtonContainer = ({ data = {} }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addProduct({ _id: data._id, price: data.price, amount: 1 }));
    dispatch(removeFromWishlist({ _id: data._id }));
  };
  const removeFromWishList = () => {
    dispatch(removeFromWishlist({ _id: data._id }));
    notify("Product has been removed from wishlist");
  };
  return (
    <WishlistButtonContainerStyles>
      <PrimaryButton onClick={addToCart}>Add to cart</PrimaryButton>
      <PrimaryButton onClick={removeFromWishList} className="wishlist-btn">
        Remove from wishlist
      </PrimaryButton>
    </WishlistButtonContainerStyles>
  );
};

export default WishlistButtonContainer;
