import { useCallback, useState, forwardRef } from "react";
import "./style.css";
import messages from "./messages.json";

function ProfileCard1() {
  return (
    <div className={`profile-card`}>
      <div className={`container-wrapper`}>
        <img
          src="/assets/img_1_658_2cab88.svg"
          className={`image-container16`}
        />
      </div>
      <div className={`entrepreneur-card`}>
        <p className={`ama-sunshine`}>{messages["oluwa_bunmi"]}</p>
        <p className={`entrepreneur-style`}>{messages["teacher"]}</p>
      </div>
    </div>
  );
}

export default ProfileCard1;
