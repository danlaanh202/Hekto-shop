import React from "react";

const SmallSaleProduct = () => {
  return (
    <div className="small-sale-product">
      <div className="small-sale-product-image">
        <img srcSet="/image/small-chair.png" alt="" />
      </div>
      <div className="small-sale-product-about">
        <h3>Executive Seat chair</h3>
        <span>$32.00</span>
      </div>
    </div>
  );
};

export default SmallSaleProduct;
