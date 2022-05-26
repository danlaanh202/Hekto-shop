import React from "react";
import styled from "styled-components";
import BannerTitle from "../components/banner-title/BannerTitle";
import FilterCat from "../components/filter/FilterCat";
import LeftSidebar from "../components/modules/listSearch/LeftSidebar";
import ListShopItem from "../components/modules/shop/listView/ListShopItem";
const SearchListPageStyles = styled.div`
  .content-container {
    display: flex;
  }
`;
const SearchListPage = () => {
  return (
    <SearchListPageStyles>
      <BannerTitle title="Search query" />
      <FilterCat showViewSelect={false} />
      <div className="content-container container">
        <LeftSidebar />
        <div className="list-items">
          <ListShopItem></ListShopItem>
          <ListShopItem></ListShopItem>
          <ListShopItem></ListShopItem>
          <ListShopItem></ListShopItem>
          <ListShopItem></ListShopItem>
          <ListShopItem></ListShopItem>
          <ListShopItem></ListShopItem>
          <ListShopItem></ListShopItem>
        </div>
      </div>
    </SearchListPageStyles>
  );
};

export default SearchListPage;
