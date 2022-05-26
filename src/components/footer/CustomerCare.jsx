import React from "react";
import styled from "styled-components";
import FooterTitle from "./FooterTitle";
const CustomerCareStyles = styled.div`
  .customer-care-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 60px 0;
  }
`;
const customerCares = [
  "My Account",
  "Discount",
  "Returns",
  "Orders History",
  "Order Tracking",
];
const CustomerCare = () => {
  return (
    <CustomerCareStyles>
      <FooterTitle>Customer Care</FooterTitle>
      <div className="customer-care-container">
        {customerCares.map((item) => (
          <span key={item} className="gray-text">
            {item}
          </span>
        ))}
      </div>
    </CustomerCareStyles>
  );
};

export default CustomerCare;
