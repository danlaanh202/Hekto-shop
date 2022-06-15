import React from "react";
import styled from "styled-components";
import Categories from "./Categories";
import CustomerCare from "./CustomerCare";
import Left from "./Left";
import Pages from "./Pages";
import { isMobile } from "react-device-detect";

const FooterStyles = styled.div`
  margin-top: 100px;
  .gray-text {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    /* sub text color */

    color: #8a8fb9;
  }
  background: ${(props) => props.theme.footerBackground};
  padding: 94px 0;
  .container {
    display: flex;
    gap: 70px;
  }
`;
const Footer = () => {
  return (
    <FooterStyles>
      <div className="container">
        <Left></Left>
        {!isMobile && (
          <>
            <Categories></Categories>
            <CustomerCare></CustomerCare>
            <Pages></Pages>
          </>
        )}
      </div>
    </FooterStyles>
  );
};

export default Footer;
