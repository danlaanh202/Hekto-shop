import React from "react";
import styled from "styled-components";
import BannerTitle from "../components/banner-title/BannerTitle";
import AdditionalDetail from "../components/modules/productDetail/AdditionalDetail";
import PrimaryDetail from "../components/modules/productDetail/PrimaryDetail";
import RelatedProducts from "../components/modules/productDetail/RelatedProducts";
import Sponsor from "../components/sponsor/Sponsor";

const ProductDetailPageStyles = styled.div`
  .sponsor {
  }
`;
const ProductDetailPage = () => {
  return (
    <ProductDetailPageStyles>
      <BannerTitle title="Product Details" />
      <PrimaryDetail></PrimaryDetail>
      <AdditionalDetail />
      <RelatedProducts />
      <Sponsor className="sponsor-container" />
    </ProductDetailPageStyles>
  );
};

export default ProductDetailPage;
