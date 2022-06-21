import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BannerTitle from "../components/banner-title/BannerTitle";
import FilterCat from "../components/filter/FilterCat";
import LeftSidebar from "../components/modules/listSearch/LeftSidebar";
import ListShopItem from "../components/modules/shop/listView/ListShopItem";
import axios from "axios";

const SearchListPageStyles = styled.div`
  .content-container {
    display: flex;

    .list-items {
      width: 100%;
      .spinner {
        margin-top: 100px;
        margin-left: auto;
        margin-right: auto;
        width: 100px;
        height: 100px;
        border: 2px solid ${(props) => props.theme.pinkSecondary};
        border-right: 2px solid transparent;
      }
    }
  }
`;
const SearchListPage = () => {
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getSearchData = async () => {
      try {
        await axios
          .get(
            searchInput
              ? `${process.env.REACT_APP_API_URL}/search/get-search-products?search=${searchInput}`
              : `${process.env.REACT_APP_API_URL}/product/get-product`
          )
          .then((response) => {
            setSearchData(response.data);
          });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getSearchData();
  }, [searchInput]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        axios
          .get(`${process.env.REACT_APP_API_URL}/category/get-categories`)
          .then((response) => {
            setCategories(response.data);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);
  return (
    <SearchListPageStyles>
      <BannerTitle title="Search query" />
      <FilterCat
        showViewSelect={false}
        setLoading={setLoading}
        setSearchInput={setSearchInput}
      />
      <div className="content-container container">
        <LeftSidebar categories={categories} />
        <div className="list-items">
          {loading && <div className="spinner animate-spin"></div>}
          {!loading &&
            searchData &&
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
