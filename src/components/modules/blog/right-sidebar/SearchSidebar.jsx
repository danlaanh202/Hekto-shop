import React from "react";
import styled from "styled-components";
const SearchSidebarStyles = styled.div`
  .search-title {
    font-size: 22px;
    line-height: 26px;
    color: ${(props) => props.theme.purpleHeading};
  }
`;
const SearchSidebar = () => {
  return (
    <SearchSidebarStyles>
      <h3 className="search-title">Search</h3>
      <div className="search-input-container"></div>
    </SearchSidebarStyles>
  );
};

export default SearchSidebar;
