import React from "react";
import styled from "styled-components";
import PrimaryButton from "../button/PrimaryButton";
const InputContainerStyles = styled.div`
  .input-item {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.01em;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #8a8fb9;
    margin: 16px 0;
    ::placeholder {
      color: #8a8fb9;
    }
  }
  .input-container {
    display: flex;
    gap: 24px;
    .input-item {
      width: calc(50% - 12px);
    }
  }
  .input-container-1 {
    .input-item {
      width: 100%;
    }
    .input-item-msg {
      min-height: 166px;
      resize: vertical;
    }
  }
  .btn {
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
    font-weight: 400;
  }
`;
const InputContainer = () => {
  return (
    <InputContainerStyles>
      <div className="input-container">
        <input type="text" className="input-item" placeholder="Your Name*" />
        <input type="text" className="input-item" placeholder="Your Email*" />
      </div>
      <div className="input-container-1">
        <input type="text" className="input-item" placeholder="Subject*" />
      </div>
      <div className="input-container-1">
        <textarea
          type="text"
          className="input-item input-item-msg"
          placeholder="Type Your Messege*"
        />
      </div>
      <PrimaryButton className="btn">Send Mail</PrimaryButton>
    </InputContainerStyles>
  );
};

export default InputContainer;
