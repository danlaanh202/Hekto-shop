import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";

const TitleH1 = styled.h1`
  color: ${(props) => props.theme.purpleHeading};
  font-weight: 700;
  font-size: 42px;
  line-height: 1.16;
  text-align: ${(props) => (props.center ? "center" : "")};
  margin: 50px;
  position: relative;
  /* ::before {
    content: "";
    position: absolute;
    height: 1px;
    background: ${(props) => props.theme.purpleHeading};
    width: 50%;
    top: 50%;
    left: auto;
    right: -30%;
  }
  ::after {
    content: "";
    position: absolute;
    height: 1px;
    background: ${(props) => props.theme.purpleHeading};
    width: 50%;
    top: 50%;
    right: auto;
    left: -30%;
  } */
  ${mobile({
    fontSize: "24px",
    margin: "30px",
    // textAlign: "left",
    // margin: "10px",
  })}
`;

const Title = ({ children, className, center = true }) => {
  return (
    <>
      <TitleH1 className={className} center={center}>
        {children}
      </TitleH1>
    </>
  );
};

export default Title;
