import { useCallback, useState, forwardRef } from "react";
import "./style.css";
import messages from "./messages.json";

function ProfileCard() {
  return (
    <div className={`profile-card`}>
      <div className={`container-wrapper`}>
        <img
          src="/assets/img_1_632_f2c1e2.jpeg"
          className={`circular-image`}
        />
      </div>
      <div className={`entrepreneur-card`}>
        <p className={`ama-sunshine`}>{messages["ama_sunshine"]}</p>
        <p className={`entrepreneur-style`}>{messages["entrepreneur"]}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
