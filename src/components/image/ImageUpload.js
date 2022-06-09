import React, { Fragment } from "react";
import styled from "styled-components";
const ImageUploadLabel = styled.label`
  margin-top: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed;
  min-height: 200px;
  background: #e7ecf3;
  width: 100%;
  position: relative;
  overflow: hidden;
  .file-input {
    opacity: 0;
    position: absolute;
  }
  .spin-animation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 10;
    width: 64px;
    height: 64px;
    border: 2px solid black;
    border-radius: 100rem;
    border-right: 2px transparent;
  }
  .image-template {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    pointer-events: none;
    gap: 12px;
    .font-semibold {
      font-weight: 600;
    }
  }
`;
const ImageUpload = (props) => {
  const {
    name,
    className = "",
    progress = 0,
    handleDeleteImage = () => {},
    image = "",
    ...rest
  } = props;
  return (
    <ImageUploadLabel className={`rounded-lg ${className}`}>
      <input
        type="file"
        name={name}
        className="file-input"
        onChange={() => {}}
        {...rest}
      />
      {!image && progress !== 0 && (
        <div className="spin-animation animate-spin"></div>
      )}
      {!image && progress === 0 && (
        <div className="image-template ">
          <img
            srcSet="/image/img-upload.png"
            alt="upload-img"
            className="max-w-[80px] mb-5"
          />
          <p className="font-semibold">Choose photo</p>
        </div>
      )}
      {image && (
        <Fragment>
          <img src={image} className="object-cover w-full h-full" alt="" />
          <button
            type="button"
            onClick={handleDeleteImage}
            className="absolute flex items-center justify-center w-16 h-16 text-red-500 transition-all bg-white rounded-full opacity-0 cursor-pointer hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </Fragment>
      )}
      {!image && (
        <div
          className="absolute bottom-0 left-0 w-10 h-1 transition-all bg-green-400 image-upload-progress"
          style={{
            width: `${Math.ceil(progress)}%`,
          }}
        ></div>
      )}
    </ImageUploadLabel>
  );
};

export default ImageUpload;
