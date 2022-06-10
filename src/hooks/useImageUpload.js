import { useState } from "react";
import axios from "axios";

export default function useImageUpload() {
  const [previewSource, setPreviewSource] = useState("");
  const [fileInputState, setFileInputState] = useState("");
  const handleFileInputChange = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const file = e.target.files[0] || e.dataTransfer.files[0];

    previewFile(file);

    setFileInputState(e.target.value); //file input
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result); //64 Encoded image
    };
  };

  const uploadImage = async () => {
    let url;
    try {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/upload`, {
          //upload to cloundinary
          //upload image and return link of image
          file64: previewSource, //64EncodedImage
        })
        .then((response) => {
          url = response.data.url;
        });
    } catch (err) {
      console.log(err);
    }

    return url;
  };
  const handleDeleteImage = () => {
    setPreviewSource("");
    setFileInputState("");
  };
  return {
    handleFileInputChange,
    uploadImage,
    fileInputState,
    previewSource,
    handleDeleteImage,
  };
}
