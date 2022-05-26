import React from "react";
import styled from "styled-components";
const SponsorS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 96px;
  .sponsor {
  }
`;
const Sponsor = () => {
  return (
    <SponsorS>
      <img srcSet="/image/sponsor.png" className="sponsor" alt="" />
    </SponsorS>
  );
};

export default Sponsor;
