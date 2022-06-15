import React from "react";
import styled from "styled-components";
import DownIcon from "../../icons/DownIcon";
import { mobile } from "../../responsive";

const CustomDropdownStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .dropdown {
    display: flex;
    align-items: center;
    width: 96px;
    height: 28px;
    border: 1px solid ${(props) => props.theme.grayBorder};
    padding: 5px;
    justify-content: space-between;
    cursor: pointer;
    ${mobile({
      width: "100%",
    })}
    span {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 1.5;
      color: ${(props) => props.theme.graySubText};
      ${mobile({
        fontSize: "8px",
      })}
    }
  }
`;
const listSort = [
  {
    id: 1,
    type: "des",
  },
  { id: 2, type: "inc" },
];
const CustomDropdown = () => {
  return (
    <CustomDropdownStyles>
      <div className="title">Sort By: </div>
      <div className="dropdown">
        <span>Best match</span>
        <DownIcon stroke="#8A8FB9" />
        <div className="dropdown-list"></div>
      </div>
    </CustomDropdownStyles>
  );
};

export default CustomDropdown;
