import React from "react";
import styled from "styled-components";
import { StarIcon } from "../../icons";
const StarContainerStyles = styled.div``;
const StarContainer = ({ star = 4 }) => {
  return (
    <div className="">
      {new Array(5).fill(0).map((item, index) => {
        return index <= star - 1 ? (
          <StarIcon key={"star" + index} isGolden={true}></StarIcon>
        ) : (
          <StarIcon key={"star" + index}></StarIcon>
        );
      })}
    </div>
  );
};

export default StarContainer;
