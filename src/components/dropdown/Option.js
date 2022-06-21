import React from "react";
import styled from "styled-components";
import { useDropdown } from "./dropdown-context";
const OptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  cursor: pointer;
  :hover {
    background-color: rgb(243 244 246);
  }
`;
const Option = ({ onClick, ...props }) => {
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <OptionDiv className="option-div" onClick={handleClick}>
      {props.children}
    </OptionDiv>
  );
};

export default Option;
