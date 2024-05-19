import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ImageGalleryComponent = ({ images }) => {
  const galleryImages = images.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  return <ImageGallery items={galleryImages} />;
};

export default ImageGalleryComponent;
