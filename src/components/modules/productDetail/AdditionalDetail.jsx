import React from "react";
import styled from "styled-components";
import { RightArrow } from "../../../icons";
const AdditionalDetailStyles = styled.div`
  .purple-heading {
    font-size: 22px;
    line-height: 26px;
    margin: 20px 0;
    color: #151875;
  }
  .description {
    font-size: 16px;
    line-height: 29px;
    color: #a9acc6;
  }
  .nav {
    margin: 50px 0;
    span {
      font-size: 24px;
      line-height: 28px;
      color: ${(props) => props.theme.purpleHeading};
      margin-right: 84px;
      cursor: pointer;
    }
    .active {
      text-decoration: underline;
    }
  }
  .information {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .more-details-item {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`;
const AdditionalDetail = () => {
  return (
    <AdditionalDetailStyles className="container">
      <div className="nav">
        <span className="active">Description</span>
        <span>Additional Info</span>
        <span>Reviews</span>
        <span>Video</span>
      </div>
      <div className="information">
        <h3 className="name purple-heading">Varius tempor.</h3>
        <p className="description">
          Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
          ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
          varius ac est bibendum. Scelerisque a, risus ac ante. Velit
          consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
          consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
          tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
          lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
          massa viverr .
        </p>
        <h3 className="more-details  purple-heading">More details</h3>
        <div className="more-details-item">
          <RightArrow />
          <p className="description">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p>
        </div>
        <div className="more-details-item">
          <RightArrow />
          <p className="description">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p>
        </div>
        <div className="more-details-item">
          <RightArrow />
          <p className="description">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p>
        </div>
        <div className="more-details-item">
          <RightArrow />
          <p className="description">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p>
        </div>
      </div>
    </AdditionalDetailStyles>
  );
};

export default AdditionalDetail;
