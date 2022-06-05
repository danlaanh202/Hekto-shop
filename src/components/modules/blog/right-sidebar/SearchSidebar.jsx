import React from "react";
import styled from "styled-components";
const SearchSidebarStyles = styled.div`
  .search-input-container {
    .search-input {
      width: 100%;
      padding: 12px 50px 12px 12px;
      outline: none;
      border: 1px solid #bdbdd8;
      border-radius: 2px;
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: rgba(21, 24, 117, 1);
      ::placeholder {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: rgba(21, 24, 117, 0.6);
      }
    }
  }
`;
const SearchSidebar = () => {
  return (
    <SearchSidebarStyles>
      <h3 className="title">Search</h3>
      <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search For Posts"
        />
      </div>
    </SearchSidebarStyles>
  );
};

export default SearchSidebar;
