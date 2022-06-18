import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [detailProduct, setDetailProduct] = useState("");
  const productId =
    window.location.href.split("products/")[1] || "62a2e0149436b8d6f59064be";
  useEffect(() => {
    const getItem = async (productId) => {
      try {
        await axios
          .get(
            `${process.env.REACT_APP_API_URL}/product/get-product/${productId}`
          )
          .then((response) => {
            setDetailProduct(response.data);
            console.log(productId);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getItem(productId);
    console.log(detailProduct);
  }, [productId]);

  return (
    <ProductDetailPageStyles>
      <BannerTitle title="Product Details" />
      <PrimaryDetail
        productName={detailProduct?.productName}
        productImage={detailProduct?.productImage}
        price={detailProduct?.price}
        description={detailProduct?.description}
      />
      <AdditionalDetail />
      <RelatedProducts />
      <Sponsor className="sponsor-container" />
    </ProductDetailPageStyles>
  );
};

export default ProductDetailPage;
