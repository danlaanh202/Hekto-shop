import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import PrimaryButton from "../button/PrimaryButton";

const LeftStyles = styled.div`
  .left {
    ${mobile({
      display: "flex",
      flexDirection: "column-reverse",
      alignItems: "center",
      margin: "0 12px",
    })}
    .contact {
    }
    .address {
      margin: 10px 0;
    }
    .logo {
      font-family: "Josefin Sans";
      font-size: 38px;
      line-height: 45px;
      ${mobile({
        textAlign: "center",
      })}
    }
    .input-container {
      position: relative;
      margin: 40px 0;
      width: 370px;
      border-radius: 4px;

      input {
        border-radius: inherit;
        width: 100%;
        height: 50px;
        padding: 10px 150px 10px 10px;

        border: none;
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        &:focus {
          border: 1px solid #93c5fd;
        }
      }
      .input-signup {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        padding: 10px 0;
        width: 130px;
      }
    }
  }
`;
const Left = () => {
  return (
    <LeftStyles>
      <div className="left">
        <h2 className="logo">Hekto</h2>
        <div className="input-container">
          <input type="text" placeholder="Enter Email Address" />
          <PrimaryButton className="input-signup">Sign Up</PrimaryButton>
        </div>
        <div>
          <span className="gray-text contact">Contact Info</span>
          <p className="gray-text address">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>
      </div>
    </LeftStyles>
  );
};

export default Left;
