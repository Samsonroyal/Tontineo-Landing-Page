import { useCallback, useState, forwardRef } from "react";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import "./style.css";
import messages from "./messages.json";

function AmazingServiceSection() {
  return (
    <div className={`app-review-container2`}>
      <div className={`app-review-container1`}>
        <SvgIcon1 className="svg-container5" />
      </div>
      <div className={`testimonial-container5`}>
        <div className={`testimonial-container4`}>
          <p className={`tontineo-app-review`}>{messages["service_amazing_i_using_again_future_thank_you_ton"]}</p>
          <SvgIcon2 className="svg-container8" />
        </div>
      </div>
    </div>
  );
}

export default AmazingServiceSection;
