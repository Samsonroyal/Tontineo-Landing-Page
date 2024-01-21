import { useCallback, useState, forwardRef } from "react";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import "./style.css";
import messages from "./messages.json";

function LifeImprover() {
  return (
    <div className={`app-review-container2`}>
      <div className={`app-review-container1`}>
        <SvgIcon1 className="svg-container5" />
      </div>
      <div className={`testimonial-container5`}>
        <div className={`testimonial-container4`}>
          <p className={`tontineo-app-review`}>{messages["tontineo_really_good_app_made_life_easier_i_now_or"]}</p>
          <SvgIcon2 className="svg-container6" />
        </div>
      </div>
    </div>
  );
}

export default LifeImprover;
