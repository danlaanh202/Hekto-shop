import React from "react";
import styled from "styled-components";
const OfferProductsStyles = styled.div`
  .products-container {
    display: flex;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 10px;
    .item {
      width: calc(50% - 10px);
      &-image-container {
      }
      &-title {
        text-align: center;
        font-family: "Lato";
        font-style: normal;
        font-weight: 600;
        color: #151875;
        margin: 5px 0;
      }
      &-price {
        font-family: "Lato";
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: #8a8fb9;
      }
    }
  }
`;
const OfferProducts = () => {
  return (
    <OfferProductsStyles>
      <h3 className="title">Offer Product</h3>
      <div className="products-container">
        <div className="item">
          <div className="item-image-container">
            <img srcSet="/image/offer-image-1.png" alt="" className="" />
          </div>
          <h4 className="item-title text-base">Duis lectus est.</h4>
          <div className="item-price ">$12.00 - $15.00</div>
        </div>
        <div className="item">
          <div className="item-image-container">
            <img srcSet="/image/offer-image-1.png" alt="" className="" />
          </div>
          <h4 className="item-title text-base">Duis lectus est.</h4>
          <div className="item-price ">$12.00 - $15.00</div>
        </div>
        <div className="item">
          <div className="item-image-container">
            <img srcSet="/image/offer-image-1.png" alt="" className="" />
          </div>
          <h4 className="item-title text-base">Duis lectus est.</h4>
          <div className="item-price ">$12.00 - $15.00</div>
        </div>
        <div className="item">
          <div className="item-image-container">
            <img srcSet="/image/offer-image-1.png" alt="" className="" />
          </div>
          <h4 className="item-title text-base">Duis lectus est.</h4>
          <div className="item-price ">$12.00 - $15.00</div>
        </div>
        <div className="item">
          <div className="item-image-container">
            <img srcSet="/image/offer-image-1.png" alt="" className="" />
          </div>
          <h4 className="item-title text-base">Duis lectus est.</h4>
          <div className="item-price ">$12.00 - $15.00</div>
        </div>
      </div>
    </OfferProductsStyles>
  );
};

export default OfferProducts;
