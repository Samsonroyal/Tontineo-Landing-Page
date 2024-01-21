import { useCallback, useState, forwardRef } from "react";
import "./style.css";
import messages from "./messages.json";

function PersonalMessage() {
  return (
    <div className={`personal-contributions1`}>
      <p className={`personal-contributions-heading`}>{messages["keep_track_all_personal_contributions_tontine"]}</p>
      <p className={`personal-contributions-text`}>{messages["we_building_digital_community_that_empower_you_tak"]}</p>
    </div>
  );
}

export default PersonalMessage;
