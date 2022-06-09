import React from "react";
import styled from "styled-components";
import { useDropdown } from "./dropdown-context";
const OptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  cursor: pointer;
`;
const Option = ({ onClick, ...props }) => {
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <OptionDiv className=" hover:bg-gray-100" onClick={handleClick}>
      {props.children}
    </OptionDiv>
  );
};

export default Option;
