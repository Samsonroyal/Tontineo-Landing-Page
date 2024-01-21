import { useCallback, useState, forwardRef } from "react";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import "./style.css";
import messages from "./messages.json";

function TontineoWidget() {
  return (
    <div className={`app-review-container2`}>
      <SvgIcon1 className="svg-container7" />
      <div className={`testimonial-container`}>
        <p className={`testimonial-text`}>{messages["tontineo_so_easy_buy_goods_africa_them_sent_direct"]}</p>
        <div className={`testimonial-container2`}>
          <SvgIcon2 className="svg-container5" />
        </div>
      </div>
    </div>
  );
}

export default TontineoWidget;
