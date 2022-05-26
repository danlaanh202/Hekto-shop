import React from "react";
import styled from "styled-components";

const TitleH1 = styled.h1`
  color: ${(props) => props.theme.purpleHeading};
  font-weight: 700;
  font-size: 42px;
  line-height: 49px;
  text-align: ${(props) => (props.center ? "center" : "")};
  margin: 50px;
`;

const Title = ({ children, className, center = true }) => {
  return (
    <TitleH1 className={className} center={center}>
      {children}
    </TitleH1>
  );
};

export default Title;
