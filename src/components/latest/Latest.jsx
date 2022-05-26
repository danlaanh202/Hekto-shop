import React, { useState } from "react";
import styled from "styled-components";
import Title from "../title/Title";
import LatestProduct from "./LatestProduct";

const latestTypes = [
  {
    type: "New Arrival",
    id: 1,
  },
  {
    type: "Best Seller",
    id: 2,
  },
  {
    type: "Featured",
    id: 3,
  },
  {
    type: "Special Offer",
    id: 4,
  },
];
const LatestStyles = styled.div`
  .latest-title {
  }
  .latest-types {
    display: flex;
    justify-content: center;
    gap: 58px;
    margin-bottom: 58px;
    .latest-type {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: ${(props) => props.theme.latestType};
      cursor: pointer;
    }
    .active {
      color: ${(props) => props.theme.latestTypeActive};
      border-bottom: 1px solid ${(props) => props.theme.latestTypeActive};
      padding-bottom: 2px;
    }
  }
  .latest-products {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const Latest = () => {
  const [typeId, setTypeId] = useState(1);
  return (
    <LatestStyles>
      <div className="container">
        <Title className="latest-title" center={true}>
          Latest Products
        </Title>
        <div className="latest-types">
          {latestTypes.map((item, index) => (
            <span
              onClick={() => setTypeId(index + 1)}
              className={`latest-type ${index + 1 === typeId ? "active" : ""}`}
            >
              {item.type}
            </span>
          ))}
        </div>
        <div className="latest-products">
          <LatestProduct></LatestProduct>
          <LatestProduct isSale={true}></LatestProduct>
          <LatestProduct></LatestProduct>
          <LatestProduct></LatestProduct>
          <LatestProduct></LatestProduct>
          <LatestProduct></LatestProduct>
        </div>
      </div>
    </LatestStyles>
  );
};

export default Latest;
