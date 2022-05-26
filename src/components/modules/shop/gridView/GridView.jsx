import React from "react";
import styled from "styled-components";
import GridShopItem from "./GridShopItem";
const GridViewStyles = styled.div`
  .container {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 52px;
  }
`;
const GridView = ({ data }) => {
  return (
    <GridViewStyles>
      <div className="container">
        <GridShopItem />
        <GridShopItem />
        <GridShopItem />
        <GridShopItem />
        <GridShopItem />
      </div>
    </GridViewStyles>
  );
};

export default GridView;
