import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeFromWishlist } from "../../../redux/wishlistRedux";
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
  const removeFromWishList = () => {
    console.log(data._id);
    dispatch(removeFromWishlist({ _id: data._id }));
  };
  return (
    <WishlistButtonContainerStyles>
      <PrimaryButton>Add to cart</PrimaryButton>
      <PrimaryButton onClick={removeFromWishList} className="wishlist-btn">
        Remove from wishlist
      </PrimaryButton>
    </WishlistButtonContainerStyles>
  );
};

export default WishlistButtonContainer;
