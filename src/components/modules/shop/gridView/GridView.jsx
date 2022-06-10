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
  console.log(data);
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
