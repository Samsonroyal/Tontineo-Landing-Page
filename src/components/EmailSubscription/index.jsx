import { useCallback, useState, forwardRef } from "react";
import { Button } from "@mui/base";
import "./style.css";
import messages from "./messages.json";

function EmailSubscription() {
  return (
    <div className={`email-subscribe-container`}>
      <p className={`email-label`}>{messages["email_address"]}</p>
      <div className={`email-subscription-container`}>
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="subscribe-button">{messages["subscribe"]}</Button>
      </div>
    </div>
  );
}

export default EmailSubscription;
