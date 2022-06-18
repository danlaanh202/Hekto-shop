import React from "react";
import styled from "styled-components";
import ListShopItem from "./ListShopItem";
const ListViewStyles = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  .spinner {
      margin-left: auto;
      margin-right: auto;
      width: 100px;
      height: 100px;
      border: 3px solid black;
      border-right: 3px solid transparent;
    }
`;

const ListView = ({ data, loading }) => {
  return (
    <ListViewStyles className="container">
       {loading && <div className="spinner animate-spin"></div> }
      {!loading &&  data.map((item, index) => (
        <ListShopItem key={item._id} data={data[index]}></ListShopItem>
      ))}
    </ListViewStyles>
  );
};

export default ListView;
