import { useCallback, useState, forwardRef } from "react";
import { Button } from "@mui/base";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function AppFeatures() {
  return (
    <div className={`container-wrapper`}>
      <div className={`container-with-images-and-button`}>
        <img
          src="/assets/img_1_118_3310b9.svg"
          className={`image-container15`}
        />
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="button-container">
          <SvgIcon1 className="svg-container1" />
          {messages["download_app"]}
        </Button>

        <div className={`image-container1`}>
          <img
            src="/assets/img_1_483_2c6b1e.png"
            className={`image-container14`}
          />
        </div>
        <img
          src="/assets/img_1_480_5347ca.svg"
          className={`image-container9`}
        />
        <img
          src="/assets/img_1_479_2365db.svg"
          className={`image-container2`}
        />
        <div className={`image-container7`}>
          <img
            src="/assets/img_1_481_c52e51.svg"
            className={`image-container13`}
          />
        </div>
      </div>
    </div>
  );
}

export default AppFeatures;
