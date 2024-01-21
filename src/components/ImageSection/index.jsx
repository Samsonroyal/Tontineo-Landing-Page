import { useCallback, useState, forwardRef } from "react";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import "./style.css";
import messages from "./messages.json";

function ImageSection() {
  return (
    <div className={`savings-card1`}>
      <div className={`green-rounded-card`}>
        <img
          src="/assets/img_1_600_bb5850.png"
          className={`image-container3`}
        />
      </div>
      <div className={`savings-card`} />
      <div className={`savings-card2`}>
        <div className={`tontine-container1`}>
          <div className={`wardrobe-saving2`}>
            <SvgIcon1 className="svg-container3" />
          </div>
          <div className={`wardrobe-saving`}>
            <p className={`wardrobe-title`}>{messages["wardrobe"]}</p>
            <p className={`wardrobe-saving1`}>{messages["saving"]}</p>
          </div>
        </div>
        <p className={`price-label`}>{messages["4000"]}</p>
      </div>
      <div className={`savings-container`} />
      <div className={`savings-container2`}>
        <div className={`savings-container1`}>
          <SvgIcon2 className="svg-container4" />
        </div>
        <p className={`savings-text`}>{messages["savings"]}</p>
        <p className={`savings-amount`}>{messages["3000"]}</p>
      </div>
    </div>
  );
}

export default ImageSection;
