import React from "react";
import styled from "styled-components";
import StarContainer from "../../star/StarContainer";
import CustomCheckbox from "./CustomCheckbox";
const SidebarFilterStyles = styled.div`
  .product-type {
    &-title {
      span {
        font-size: 20px;
        line-height: 30px;
        color: ${(props) => props.theme.purpleHeading};
        border-bottom: 1px solid ${(props) => props.theme.purpleHeading};
        font-weight: 600;
      }
    }
    &-items {
      display: flex;
      flex-direction: column;
      margin: 15px 0;
      gap: 8px;
      .item-container {
        display: flex;
        gap: 10px;
        align-items: center;
      }
      .item {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        color: #7e81a2;
      }
    }
  }
`;
const SidebarFilter = ({
  type = "",
  background = "#E5E0FC",
  backgroundCheck = "#603EFF",
  checkColor = "#E5E0FC",
  unCheckColor = "#603EFF",
  isRating = false,
  isUnique = false,
}) => {
  return (
    <SidebarFilterStyles>
      <div className="product-type">
        <div className="product-type-title">
          <span>{type}</span>
        </div>
        <div className="product-type-items">
          {isRating
            ? new Array(5).fill(0).map((item, index) => (
                <div className="item-container">
                  <CustomCheckbox
                    background={background}
                    backgroundCheck={backgroundCheck}
                    checkColor={checkColor}
                    unCheckColor={unCheckColor}
                  />
                  <StarContainer star={5 - index} />
                </div>
              ))
            : new Array(5).fill(0).map((item, index) => (
                <div className="item-container">
                  <CustomCheckbox
                    background={background}
                    backgroundCheck={backgroundCheck}
                    checkColor={checkColor}
                    unCheckColor={unCheckColor}
                  />
                  <span className="item">Coaster Furniture</span>
                </div>
              ))}
        </div>
      </div>
    </SidebarFilterStyles>
  );
};

export default SidebarFilter;
