import React from "react";
import styled from "styled-components";
const PrimaryButtonStyles = styled.button`
  background: ${(props) => props.theme.pinkSecondary};
  border-radius: 2px;
  border: none;
  border-radius: 2px;
  font-family: "Josefin Sans";
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.02em;
  /* padding: 16px 40px; */
  width: 160px;
  padding: 16px 0;
  color: #ffffff;
  max-width: 165px;
  cursor: pointer;
`;
const PrimaryButton = ({ children, className }) => {
  return (
    <PrimaryButtonStyles className={className}>{children}</PrimaryButtonStyles>
  );
};

export default PrimaryButton;
