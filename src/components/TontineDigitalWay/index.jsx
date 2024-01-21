import { useCallback, useState, forwardRef } from "react";
import ImageGallery from "../ImageGallery";
import "./style.css";
import messages from "./messages.json";

function TontineDigitalWay() {
  return (
    <div className={`digital-tontines-container`}>
      <div className={`tontine-container`}>
        <div className={`digital-tontines`}>
          <p className={`digital-tontines-heading`}>{messages["tontines_digital_way"]}</p>
          <div className={`container-wrapper`}>
            <img
              src="/assets/img_1_760_c68fcb.png"
              className={`image-container12`}
            />
          </div>
        </div>
        <div className={`digital-tontine`}>
          <ImageGallery />
          <div className={`image-container18`}>
            <img
              src="/assets/img_1_716_dde8dc.png"
              className={`image-container6`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TontineDigitalWay;
