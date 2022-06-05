import React from "react";
import styled from "styled-components";
import BannerTitle from "../components/banner-title/BannerTitle";
import InputContainer from "../components/msg-mail/InputContainer";
const ContactPageStyles = styled.div`
  .contact-container {
    margin: 120px auto;
    display: flex;
    .title {
      font-size: 36px;
      line-height: 48px;
      color: #151875;
      margin-bottom: 12px;
    }
    .description {
      font-family: "Lato";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 26px;
      color: #8a8fb9;
    }

    .left-container {
      width: 550px;
      display: flex;
      flex-direction: column;
      gap: 120px;
      .left-item {
      }
    }
    .right-container {
      .right-item {
        margin-left: 100px;
        .right-contact-way {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          row-gap: 56px;
          column-gap: 28px;
          .right-contact-item {
            display: flex;
            align-items: center;
            gap: 10px;
            .circle {
              width: 45px;
              height: 45px;
              border-radius: 100%;
              background: #5726df;
            }
            .right-contact-content {
              display: flex;
              flex-direction: column;
              span {
                font-family: "Lato";
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 26px;
                color: #8a8fb9;
              }
            }
          }
        }
      }
      .right-image-container {
        margin-top: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 80%;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
  }
`;
const ContactPage = () => {
  return (
    <ContactPageStyles>
      <BannerTitle title="Contact Us" />
      <div className="contact-container container">
        <div className="left-container">
          <div className="left-item">
            <h2 className="title">Information About us</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
          </div>
          <div className="left-item">
            <h2 className="title">Get In Touch</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            <InputContainer />
          </div>
        </div>
        <div className="right-container">
          <div className="right-item">
            <h2 className="title">Contact Way</h2>
            <div className="right-contact-way">
              <div className="right-contact-item">
                <div className="circle"></div>
                <div className="right-contact-content">
                  <span>Tel: 877-67-88-99</span>
                  <span>E-Mail: shop@store.com</span>
                </div>
              </div>
              <div className="right-contact-item">
                <div className="circle"></div>
                <div className="right-contact-content">
                  <span>Tel: 877-67-88-99</span>
                  <span>E-Mail: shop@store.com</span>
                </div>
              </div>
              <div className="right-contact-item">
                <div className="circle"></div>
                <div className="right-contact-content">
                  <span>Tel: 877-67-88-99</span>
                  <span>E-Mail: shop@store.com</span>
                </div>
              </div>
              <div className="right-contact-item">
                <div className="circle"></div>
                <div className="right-contact-content">
                  <span>Tel: 877-67-88-99</span>
                  <span>E-Mail: shop@store.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right-image-container">
            <img srcSet="/image/contact-back.png" alt="" className="" />
          </div>
        </div>
      </div>
    </ContactPageStyles>
  );
};

export default ContactPage;
