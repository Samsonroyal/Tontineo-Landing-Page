import { useCallback, useState, forwardRef } from "react";
import "./style.css";

function ImageContainer() {
  return (
    <div className={`container`}>
      <img
        src="/assets/img_1_485_7daefc.svg"
        className={`image-container`}
      />
    </div>
  );
}

export default ImageContainer;
