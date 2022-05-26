import React from "react";
import styled from "styled-components";
const FooterTitleStyles = styled.h3`
  font-family: "Josefin Sans";
  font-size: 22px;
  line-height: 26px;
`;
const FooterTitle = ({ children }) => {
  return <FooterTitleStyles>{children}</FooterTitleStyles>;
};

export default FooterTitle;
