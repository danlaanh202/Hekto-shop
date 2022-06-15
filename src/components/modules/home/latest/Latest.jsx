import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../../../../responsive";
import Title from "../../../title/Title";
import LatestProduct from "./LatestProduct";

const latestTypes = [
  {
    query: "new",
    type: "New Arrival",
    id: 1,
  },
  {
    query: "best-seller",
    type: "Best Seller",
    id: 2,
  },
  {
    query: "featured",
    type: "Featured",
    id: 3,
  },
  {
    query: "special",
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
    ${mobile({
      justifyContent: "space-between",
      gap: 0,
      marginLeft: "16px",
      marginRight: "16px",
    })}
    .latest-type {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.2;
      color: ${(props) => props.theme.latestType};
      cursor: pointer;
      ${mobile({
        fontSize: "10px",
        textAlign: "center",
        fontWeight: 500,
      })}
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
    ${mobile({
      gap: "15px",
    })}
  }
`;
const Latest = () => {
  const [typeId, setTypeId] = useState(1);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const getDataFromApi = async () => {
      try {
        await axios
          .get(
            `${process.env.REACT_APP_API_URL}/product/get-product-query?q=${query}`
          )
          .then((response) => {
            setData(response.data);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getDataFromApi();
    console.log(data);
  }, []);

  return (
    <LatestStyles>
      <div className="container">
        <Title className="latest-title" center={true}>
          Latest Products
        </Title>
        <div className="latest-types">
          {latestTypes.map((item, index) => (
            <span
              onClick={() => {
                //setQuery = something to call api
                setTypeId(index + 1);
              }}
              className={`latest-type ${index + 1 === typeId ? "active" : ""}`}
            >
              {item.type}
            </span>
          ))}
        </div>
        <div className="latest-products">
          {data?.length > 0 &&
            data.map((item, index) => <LatestProduct data={item} />)}
        </div>
      </div>
    </LatestStyles>
  );
};

export default Latest;
