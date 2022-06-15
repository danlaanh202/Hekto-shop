import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
const SponsorS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 96px;
  ${mobile({
    width: "90vw",
    marginLeft: "auto",
    marginRight: "auto",
  })}
  .sponsor {
    ${mobile({
      width: "100%",
    })}
  }
`;
const Sponsor = ({ className }) => {
  return (
    <SponsorS className={`shadow-lg ${className}`}>
      <img srcSet="/image/sponsor.png" className="sponsor" alt="" />
    </SponsorS>
  );
};

export default Sponsor;
