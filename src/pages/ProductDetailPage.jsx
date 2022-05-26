import React from "react";
import styled from "styled-components";
import BannerTitle from "../components/banner-title/BannerTitle";
import StarContainer from "../components/star/StarContainer";
import {
  FacebookIconShare,
  InstagramIconShare,
  TwiiterIconShare,
} from "../icons";
const ProductDetailPageStyles = styled.div`
  .primary {
    margin: 120px auto;
    height: 510px;
    display: flex;
    .small-img-container {
      flex-direction: column;
      .small-img {
        display: block;
        object-fit: cover;
        margin: 13px;
      }
    }
    .big-img-container {
      .big-img {
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
  }
`;
const ProductDetailPage = () => {
  return (
    <ProductDetailPageStyles>
      <BannerTitle title="Product Details" />
      <div className="primary container shadow-sm">
        <div className="small-img-container">
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
        </div>
        <div className="big-img-container">
          <img srcSet="/image/big-img-detail.png" alt="" className="big-img" />
        </div>
        <div className="detail">
          <h3 className="detail-title">Playwood Arm Chair</h3>
          <div className="star-container">
            <StarContainer />
            <span className="star-amount">(22)</span>
          </div>
          <div className="price-container">
            <span className="current-price price">$26.00</span>
            <span className="old-price price">$52.00</span>
          </div>
          <div className="description-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus porttitor purus, et volutpat sit.
            </p>
          </div>
          <div className="more">
            <div className="more-item">
              <span className="more-name">Categories: </span>
              <span className="more-list">Bag</span>
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
                <TwiiterIconShare />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductDetailPageStyles>
  );
};

export default ProductDetailPage;
