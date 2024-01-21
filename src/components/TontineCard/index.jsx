import { useCallback, useState, forwardRef } from "react";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function TontineCard({ htmlContent1, tontineValue, flexShrinkValue, textAlignStyle }) {
  return (
    <div className={`tontine-container1`}>
      <SvgIcon1 className="svg-container3" htmlContent1={htmlContent1} />
      <p className={`tontine-value-text`} style={{ textAlign: textAlignStyle, flexShrink: flexShrinkValue }}>
        {tontineValue}
      </p>
    </div>
  );
}

export default TontineCard;
