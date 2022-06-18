import React from "react";
import styled from "styled-components";
import { mobile } from "../../../../responsive";
import GridShopItem from "./GridShopItem";
const GridViewStyles = styled.div`
  ${mobile({
    margin: "0 8px",
  })}
  .spinner {
      margin-left: auto;
      margin-right: auto;
      width: 100px;
      height: 100px;
      border: 3px solid black;
      border-right: 3px solid transparent;
    }
  .container {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 52px;
    
    ${mobile({
      gridTemplateColumns: "repeat(2, minmax(0,1fr))",
      gap: "12px",
    })}
  }
`;
const GridView = ({ data, loading }) => {
  return (
    <GridViewStyles>
      <div className="container">
        {!loading && data.map((item, index) => (
          <GridShopItem key={item._id} data={data[index]} />
          ))}
      </div>
      {loading && <div className="spinner animate-spin"></div> }
    </GridViewStyles>
  );
};

export default GridView;
