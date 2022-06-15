import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BannerTitle from "../components/banner-title/BannerTitle";
import FilterCat from "../components/filter/FilterCat";
import LeftSidebar from "../components/modules/listSearch/LeftSidebar";
import ListShopItem from "../components/modules/shop/listView/ListShopItem";
import axios from "axios";
import { useSelector } from "react-redux";
const SearchListPageStyles = styled.div`
  .content-container {
    display: flex;
  }
`;
const SearchListPage = () => {
  const [searchData, setSearchData] = useState([]);
  const searchQ = useSelector((state) => state.search.searchQuery);
  useEffect(() => {
    const getSearchData = async () => {
      await axios
        .get(
          `${process.env.REACT_APP_API_URL}/search/get-search-products?search=${searchQ}`
        )
        .then((response) => {
          setSearchData(response.data);
        });
    };
    getSearchData();
  }, [searchQ]);
  return (
    <SearchListPageStyles>
      <BannerTitle title="Search query" />
      <FilterCat showViewSelect={false} />
      <div className="content-container container">
        <LeftSidebar />
        <div className="list-items">
          {searchData &&
            searchData?.length > 0 &&
            searchData.map((item, index) => (
              <ListShopItem key={item._id} data={item} />
            ))}
        </div>
      </div>
    </SearchListPageStyles>
  );
};

export default SearchListPage;
