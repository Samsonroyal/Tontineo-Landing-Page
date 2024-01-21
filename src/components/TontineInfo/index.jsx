import { useCallback, useState, forwardRef } from "react";
import PersonalMessage from "../PersonalMessage";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function TontineInfo() {
  return (
    <div className={`tontine-group-info`}>
      <p className={`trusted-by-tontine-groups1`}>
        <span className={`trusted-by-tontine-groups`}>{messages["trusted"]}</span>
        <span className={`active-tontine-groups-in-west-africa1`}>10</span>
        <span className={`active-tontine-groups-in-west-africa`}> </span>
        <span className={`trusted-by-tontine-groups`}>{messages["active"]}</span>
        <span>{messages["tontine_groups_west_africa"]}</span>
      </p>
      <div className={`tontine-group-info1`}>
        <div className={`personal-contributions2`}>
          <div className={`container-with-images`}>
            <img
              src="/assets/img_1_513_fa8e7e.png"
              className={`image-container5`}
            />
            <img
              src="/assets/img_1_514_80e9f4.png"
              className={`image-container8`}
            />
          </div>
        </div>
        <div className={`personal-contributions-section`}>
          <PersonalMessage />
          <div className={`personal-contributions`}>
            <p className={`learn-more`}>{messages["learn_more"]}</p>
            <SvgIcon1 className="svg-container2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TontineInfo;
