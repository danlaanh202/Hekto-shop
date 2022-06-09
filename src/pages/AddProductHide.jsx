import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BannerTitle from "../components/banner-title/BannerTitle";
import ImageUpload from "../components/image/ImageUpload";
import CategoryDropdown from "../components/modules/add-product/CategoryDropdown";
import useImageUpload from "../hooks/useImageUpload";
const AddProductHideStyles = styled.div`
  form {
    margin-top: 80px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    .input-container {
      display: flex;
      flex-direction: column;
      .product-input {
        border: 1px solid rgb(229, 231, 235);
        height: 56px;
        padding: 4px 10px;
        background: #e7ecf3;
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        margin: 10px 0;
      }
      .description-input {
        min-height: 100px;
        resize: vertical;
        padding: 10px;
      }
    }
    .image-input-container {
      position: relative;
      .delete-btn {
        z-index: 10;
        position: absolute;
        top: 20px;
        right: 20px;
        width: 64px;
        height: 64px;
        color: rgb(239 68 68);
        background: white;
        border-radius: 100rem;
        opacity: 100;
        cursor: pointer;
      }
    }

    label {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 20px;

      color: #444858;
    }
    .submit-btn {
      width: 100%;
      padding: 16px 0;
      background: #fb2e86;
      border-radius: 3px;
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
      line-height: 20px;
      color: #ffffff;
      margin-top: 20px;
    }
    .two-items {
      flex-direction: row;
      justify-content: space-between;

      &-item {
        width: 380px;
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
const AddProductHide = () => {
  const user = useSelector((state) => state.user.currentUser);

  const [categories, setCategories] = useState([]); //List categories from API
  const [selectCategories, setSelectCategories] = useState([]); //change when clicked on dropdown
  const {
    control,
    register,
    watch,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {},
  });
  const {
    handleFileInputChange,
    uploadImage,
    fileInputState,
    handleDeleteImage,
    previewSource,
  } = useImageUpload();
  const onAddPostHandler = (data) => {
    if (!isValid) {
      return;
    }
    console.log(data);
  };
  return (
    <AddProductHideStyles>
      <BannerTitle title="Add Product" />
      <div className="container">
        <form onSubmit={handleSubmit(onAddPostHandler)}>
          <div className="input-container two-items">
            <div className="two-items-item">
              <label htmlFor="productName">Product Name</label>
              <input
                {...register("productName")}
                className="product-input"
                id="product-name"
                name="productName"
                placeholder="Enter product name"
              />
            </div>

            <div className="two-items-item">
              <label htmlFor="brand">Brand</label>
              <input
                {...register("brand")}
                className="product-input"
                id="brand"
                name="brand"
                placeholder="Enter Brand"
              />
            </div>
          </div>
          <div className="input-container two-items">
            <div className="two-items-item">
              <label htmlFor="price">Price</label>
              <input
                {...register("price")}
                className="product-input"
                id="price"
                name="price"
                placeholder="Enter Price ($)"
              />
            </div>
            <div className=" two-items-item">
              <CategoryDropdown
                setValue={setValue}
                setSelectCategories={setSelectCategories}
              />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="description">Description</label>
            <textarea
              {...register("description")}
              className="product-input description-input"
              id="description"
              name="description"
              placeholder="Enter Description"
            />
          </div>
          <div className="input-container image-input-container">
            <ImageUpload
              name="image"
              image={previewSource}
              handleDeleteImage={handleDeleteImage}
              handleFileInputChange={handleFileInputChange}
              fileInputState={fileInputState}
            />
          </div>
          <button type="submit" className="submit-btn">
            Add Product
          </button>
        </form>
      </div>
    </AddProductHideStyles>
  );
};

export default AddProductHide;
