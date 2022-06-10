import React, { Fragment, useEffect } from "react";
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
  /* :hover .delete-btn {
    opacity: 100;
  } */
  .file-input {
    opacity: 0;
    position: absolute;
    inset: 0;
    cursor: pointer;
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
  .image-container {
    position: relative;
    padding: 50px;
    .preview {
      object-fit: cover;
      width: 500px;
      z-index: 10;
    }
  }
  .progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 4px;
  }
`;
const ImageUpload = ({
  handleFileInputChange,
  fileInputState,
  name,
  image = "",
  className = "",
  handleDeleteImage = () => {},
  progress = 0,
  ...props
}) => {
  // useEffect(() => {
  //   console.log(image);
  // }, [image]);
  return (
    <>
      <ImageUploadLabel className={`rounded-lg ${className}`}>
        <input
          type="file"
          name={name}
          className="file-input"
          onChange={handleFileInputChange}
          value={fileInputState}
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
          <div className="image-container">
            <img src={image} className="preview" alt="" />
          </div>
        )}
        {!image && (
          <div
            className="progress-bar  transition-all"
            style={{
              width: `${Math.ceil(progress)}%`,
            }}
          ></div>
        )}
      </ImageUploadLabel>
      {image && (
        <button
          type="button"
          onClick={handleDeleteImage}
          className="delete-btn transition-all"
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
      )}
    </>
  );
};

export default ImageUpload;
