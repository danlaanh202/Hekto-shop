import { useState } from "react";
import axios from "axios";

export default function useImageUpload() {
  // const [selectedFile, setSelectedFile] = useState();
  const [previewSource, setPreviewSource] = useState("");
  const [fileInputState, setFileInputState] = useState("");
  const handleFileInputChange = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const file = e.target.files[0] || e.dataTransfer.files[0];

    previewFile(file);
    // setSelectedFile(file);
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
    try {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/upload`, {
          //upload to cloundinary
          //upload image and return link of image
          data: previewSource, //64EncodedImage
        })
        .then((response) => {
          console.log(response);
        });
    } catch (err) {
      console.log(err);
    }
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
