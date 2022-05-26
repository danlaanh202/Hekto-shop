import React from "react";
import styled from "styled-components";
import ListShopItem from "./ListShopItem";
const ListViewStyles = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
`;

const ListView = ({ data }) => {
  return (
    <ListViewStyles className="container">
      <ListShopItem></ListShopItem>
      <ListShopItem></ListShopItem>
      <ListShopItem></ListShopItem>
      <ListShopItem></ListShopItem>
      <ListShopItem></ListShopItem>
      <ListShopItem></ListShopItem>
    </ListViewStyles>
  );
};

export default ListView;
