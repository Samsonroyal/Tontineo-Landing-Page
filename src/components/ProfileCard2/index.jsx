import { useCallback, useState, forwardRef } from "react";
import "./style.css";
import messages from "./messages.json";

function ProfileCard2() {
  return (
    <div className={`profile-card`}>
      <div className={`container-wrapper`}>
        <img
          src="/assets/img_1_645_b57f98.svg"
          className={`image-container16`}
        />
      </div>
      <div className={`entrepreneur-card`}>
        <p className={`ama-sunshine`}>{messages["nkwi_loh"]}</p>
        <p className={`entrepreneur-style`}>{messages["student"]}</p>
      </div>
    </div>
  );
}

export default ProfileCard2;
