import React from "react";
import styled from "styled-components";

import SidebarFilter from "./SidebarFilter";
const LeftSidebarStyles = styled.div`
  width: 200px;
`;
const LeftSidebar = ({ categories = [] }) => {
  return (
    <LeftSidebarStyles>
      <SidebarFilter type="Product Brands"></SidebarFilter>
      <SidebarFilter
        type="Discount Offer"
        unCheckColor="#FF3EB2"
        checkColor="#FFDBF1"
        backgroundCheck="#FF3EB2"
        background="#FFDBF1"
      ></SidebarFilter>
      <SidebarFilter
        type="Rating Item"
        isRating={true}
        unCheckColor="#FFCC2E"
        checkColor="#FFF6DA"
        backgroundCheck="#FFCC2E"
        background="#FFF6DA"
      ></SidebarFilter>
      <SidebarFilter
        type="Categories"
        unCheckColor="#FF3EB2"
        checkColor="#FFDBF1"
        backgroundCheck="#FF3EB2"
        background="#FFDBF1"
        categories={categories}
      ></SidebarFilter>
    </LeftSidebarStyles>
  );
};

export default LeftSidebar;
