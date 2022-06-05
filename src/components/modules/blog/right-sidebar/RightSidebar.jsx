import React from "react";
import styled from "styled-components";
import CategoriesPart from "./CategoriesPart";
import Follow from "./Follow";
import OfferProducts from "./OfferProducts";
import RecentPost from "./RecentPost";
import SearchSidebar from "./SearchSidebar";
import Tags from "./Tags";
const RightSidebarStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 50px 0;
  width: 100%;
  .title {
    font-size: 22px;
    line-height: 26px;
    color: ${(props) => props.theme.purpleHeading};
    margin-bottom: 24px;
  }
`;
const RightSidebar = () => {
  return (
    <RightSidebarStyles>
      <SearchSidebar />
      <CategoriesPart />
      <RecentPost />
      <OfferProducts />
      <Follow />
      <Tags />
    </RightSidebarStyles>
  );
};

export default RightSidebar;
