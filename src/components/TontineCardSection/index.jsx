import { useCallback, useState, forwardRef } from "react";
import RenderTontineCards from "../RenderTontineCards";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function TontineCardSection({ tontineCardOptions }) {
  return (
    <div className={`app-value-section1`}>
      <div className={`app-value-section`}>
        <p className={`app-value`}>{messages["value_you_get_using_app"]}</p>
        <RenderTontineCards tontineCardOptions={tontineCardOptions} />
      </div>
      <div className={`app-benefit`}>
        <p className={`learn-more1`}>{messages["learn_more"]}</p>
        <SvgIcon1 className="svg-container2" />
      </div>
    </div>
  );
}

export default TontineCardSection;
