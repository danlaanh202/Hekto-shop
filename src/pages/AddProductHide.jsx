import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BannerTitle from "../components/banner-title/BannerTitle";
import ImageUpload from "../components/imageInput/ImageUpload";
import CategoryDropdown from "../components/modules/add-product/CategoryDropdown";
import useImageUpload from "../hooks/useImageUpload";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { notify } from "../utils/notify";
import BrandDropDown from "../components/modules/add-product/BrandDropdown";

const schema = yup.object({
  productName: yup.string().required("Product Name is required"),
  brand: yup.string().required("Brand is required"),
  price: yup.number("Price must be number value").required("Price is required"),
});
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
      .spinner {
        width: 20px;
        height: 20px;
        margin: auto;
      }
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
  const [brands, setBrands] = useState([]);
  const [selectCategories, setSelectCategories] = useState(""); //change when clicked on dropdown
  const [selectBrands, setSelectBrands] = useState(""); //change when clicked on dropdown
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
    resolver: yupResolver(schema),
  });
  const {
    handleFileInputChange,
    uploadImage,
    fileInputState,
    handleDeleteImage,
    previewSource,
  } = useImageUpload();
  const uploadProduct = async (data) => {
    try {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/product/add-product`, data)
        .then((response) => {
          notify("Product has been created");
        });
    } catch (err) {
      console.log(err);
    }
  };
  const onAddPostHandler = async (data) => {
    if (!isValid) {
      console.log(data);
      return;
    }
    setValue("seller", user._id);
    await uploadImage()
      .then((response) => {
        setValue("productImage", response);
      })
      .then(() => {
        uploadProduct(getValues());
      });

    //image get from uploadImage function
  };
  useEffect(() => {
    const getThings = () => {
      axios
        .all([
          axios.get(`${process.env.REACT_APP_API_URL}/category/get-categories`),
          axios.get(`${process.env.REACT_APP_API_URL}/brand/get-brands`),
        ])
        .then(
          axios.spread((...responses) => {
            console.log(responses[0]);
            setCategories(responses[0].data);
            setBrands(responses[1].data);
          })
        )
        .catch((errs) => {
          console.log(errs);
        });
    };

    getThings();
  }, []);
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
              <BrandDropDown
                selectBrands={selectBrands}
                setValue={setValue}
                brands={brands}
                setSelectBrands={setSelectBrands}
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
            <div className="two-items-item">
              <CategoryDropdown
                label="Category"
                selectCategories={selectCategories}
                setValue={setValue}
                categories={categories}
                setSelectCategories={setSelectCategories}
                val="category"
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
            {isSubmitting ? (
              <div className="spinner animate-spin"></div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </AddProductHideStyles>
  );
};

export default AddProductHide;
