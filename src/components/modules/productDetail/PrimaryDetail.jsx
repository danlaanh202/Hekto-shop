import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  FacebookIconShare,
  InstagramIconShare,
  TwitterIconShare,
} from "../../../icons";
import { addProduct } from "../../../redux/cartRedux";
import { addWishlist, removeFromWishlist } from "../../../redux/wishlistRedux";
import { notify } from "../../../utils/notify";
import PrimaryButton from "../../button/PrimaryButton";
import StarContainer from "../../star/StarContainer";
const PrimaryDetailStyles = styled.div`
  margin: 120px auto;
  height: 510px;
  display: flex;
  .small-img-container {
    flex-direction: column;
    width: 380px;
    height: 490px;
    .small-img {
      display: block;
      object-fit: cover;
      margin: 13px;
      height: 100%;
    }
  }
  .big-img-container {
    width: 380px;
    height: 490px;
    display: flex;
    justify-content: center;
    align-items: center;

    .big-img {
      object-fit: cover;
      width: 75%;
      margin: 13px;
    }
  }
  .detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    margin-left: 40px;
    &-title {
      font-size: 36px;
      line-height: 42px;
      color: ${(props) => props.theme.purpleHeading};
    }
    .star-container {
      display: flex;
    }
    .price-container {
      display: flex;
      gap: 16px;
      .price {
        font-size: 16px;
        line-height: 29px;
      }
      .current-price {
        color: ${(props) => props.theme.purpleHeading};
      }
      .old-price {
        color: ${(props) => props.theme.pinkSecondary};
      }
    }
    .description-container {
      font-size: 16px;
      line-height: 29px;
      p {
        color: #a9acc6;
      }
    }
    .button-container {
      display: flex;
      gap: 20px;
    }
    .more {
      &-item {
        display: flex;
        align-items: center;
        gap: 10px;
        .icon-container {
          display: flex;
          gap: 10px;
          align-items: center;
        }
      }
      &-name {
        margin: 5px;
        font-size: 16px;
        line-height: 29px;
        color: ${(props) => props.theme.purpleHeading};
      }
    }
  }
`;
const PrimaryDetail = ({ data = {} }) => {
  const dispatch = useDispatch();

  return (
    <PrimaryDetailStyles className="container shadow-sm">
      {/* <div className="small-img-container">
        <img
          srcSet="/image/small-img-detail-1.png"
          alt=""
          className="small-img"
        />
        <img
          srcSet="/image/small-img-detail-2.png"
          alt=""
          className="small-img"
        />
        <img
          srcSet="/image/small-img-detail-3.png"
          alt=""
          className="small-img"
        />
      </div> */}
      <div className="big-img-container">
        <img src={data?.productImage} alt="" className="big-img" />
      </div>
      <div className="detail">
        <h3 className="detail-title">{data?.productName}</h3>
        <div className="star-container">
          <StarContainer />
          <span className="star-amount">(22)</span>
        </div>
        <div className="price-container">
          <span className="current-price price">
            ${data?.price?.toFixed(2)}
          </span>
          <span className="old-price price">
            ${(data?.price + 10).toFixed(2)}
          </span>
        </div>
        <div className="description-container">
          <p>{data?.description}</p>
        </div>
        <div className="button-container">
          <PrimaryButton
            onClick={() => {
              dispatch(
                addProduct({ _id: data?._id, price: data?.price, amount: 1 })
              );
              notify("This product has been added to cart");
            }}
          >
            Add to cart
          </PrimaryButton>
          <PrimaryButton
            onClick={() => {
              dispatch(addWishlist({ _id: data?._id }));
              notify("This product has been added to wishlist");
            }}
          >
            Add to wishlist
          </PrimaryButton>
        </div>
        <div className="more">
          <div className="more-item">
            <span className="more-name">Categories: </span>
            <span className="more-list">{data?.categories?.category}</span>
          </div>
          <div className="more-item">
            <span className="more-name">Tags: </span>
            <span className="more-list">Bag</span>
          </div>
          <div className="more-item">
            <span className="more-name">Share</span>
            <div className="more-list icon-container">
              <FacebookIconShare></FacebookIconShare>
              <InstagramIconShare />
              <TwitterIconShare />
            </div>
          </div>
        </div>
      </div>
    </PrimaryDetailStyles>
  );
};

export default PrimaryDetail;
