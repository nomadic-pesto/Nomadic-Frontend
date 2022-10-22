import React from "react";

//importing sytles
import styles from "./styles.module.css";

// Rendering individual images
const Image = ({ image }) => {
  return (
    <div className="file-item">
      <img
        alt={`img - ${image.id}`}
        src={image.src}
        className="file-img"
      />
    </div>
  );
};

// ImageList Component//
const ImageGrid = ({ images }) => {
  // render each image by calling Image component
  const renderImage = (image, index) => {
    return <Image image={image} key={`${image.id}-image`} />;
  };
  // Return the list of files//
  return (
    <section className={`${styles["file-list"]}`}>{images.map(renderImage)}</section>
  );
};

export default ImageGrid;