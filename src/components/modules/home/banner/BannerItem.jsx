import React from "react";
import PrimaryButton from "../../../button/PrimaryButton";

const BannerItem = () => {
  return (
    <>
      <div className="container">
        <img srcSet="image/lamb-image.png" alt="" className="lamb-deco" />
        <div className="banner-container">
          <h3>Best Furniture For Your Castle...</h3>
          <h1>New Furniture Collection Trends in 2020</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis a
            consequatur recusandae repudiandae assumenda doloribus commodi ipsa
            eaque vero laborum eos error veniam illum, quae dolores, soluta id
            magnam nulla?
          </p>
          <PrimaryButton>Shop now</PrimaryButton>
        </div>
        <div className="banner-img">
          <img
            srcSet="image/chair-left-banner.png"
            alt=""
            className="banner-img-primary"
          />
        </div>
      </div>
    </>
  );
};

export default BannerItem;
