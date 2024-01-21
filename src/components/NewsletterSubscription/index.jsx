import { useCallback, useState, forwardRef } from "react";
import EmailSubscription from "../EmailSubscription";
import "./style.css";
import messages from "./messages.json";

function NewsletterSubscription() {
  return (
    <div className={`newsletter-container`}>
      <p className={`newsletter-title`}>{messages["stay_informed_subscribe_newsletter"]}</p>
      <div className={`newsletter-subscription`}>
        <EmailSubscription />
        <div className={`email-section`}>
          <img
            src="/assets/img_1_799_a7bf87.svg"
            className={`image-container11`}
          />
        </div>
      </div>
    </div>
  );
}

export default NewsletterSubscription;
