import React from "react";
import styled from "styled-components";
import { mobile } from "../../../../responsive";
import GridShopItem from "./GridShopItem";
const GridViewStyles = styled.div`
  ${mobile({
    margin: "0 8px",
  })}
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
const GridView = ({ data }) => {
  return (
    <GridViewStyles>
      <div className="container">
        {data.map((item, index) => (
          <GridShopItem key={item._id} data={data[index]} />
        ))}
      </div>
    </GridViewStyles>
  );
};

export default GridView;
