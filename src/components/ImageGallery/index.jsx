import { useCallback, useState, forwardRef } from "react";
import "./style.css";

function ImageGallery() {
  return (
    <div className={`flex-container`}>
      <div className={`image-container10`}>
        <img
          src="/assets/img_1_761_1fb1a9.png"
          className={`image-container17`}
        />
      </div>
      <div className={`image-container4`}>
        <img
          src="/assets/img_1_719_8eeb4f.svg"
          className={`image-container19`}
        />
      </div>
    </div>
  );
}

export default ImageGallery;
