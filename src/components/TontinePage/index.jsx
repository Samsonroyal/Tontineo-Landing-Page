import { useCallback, useState, forwardRef } from "react";
import AppFeatures from "../AppFeatures";
import ImageContainer from "../ImageContainer";
import TontineInfo from "../TontineInfo";
import TontineCardSection from "../TontineCardSection";
import ImageSection from "../ImageSection";
import TontineSection from "../TontineSection";
import TontineDigitalWay from "../TontineDigitalWay";
import NewsletterSubscription from "../NewsletterSubscription";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function TontinePage({ tontineCardOptions }) {
  return (
    <div className={`main-container`}>
      <AppFeatures />
      <ImageContainer />
      <TontineInfo />
      <div className={`tontineo-section`}>
        <div className={`money-protection-container`}>
          <p className={`personal-contributions-heading`}>{messages["safeguard_money_squandered"]}</p>
          <p className={`personal-contributions-text`}>{messages["we_building_digital_community_that_empower_you_tak"]}</p>
          <div className={`money-protection-container1`}>
            <p className={`learn-more2`}>{messages["learn_more"]}</p>
            <SvgIcon1 className="svg-container2" />
          </div>
        </div>
        <div className={`money-control-section`}>
          <img
            src="/assets/img_1_536_c4476b.png"
            className={`image-container20`}
          />
        </div>
      </div>
      <div className={`tontineo-value-section`}>
        <div className={`app-value-section2`}>
          <div className={`container-wrapper`}>
            <TontineCardSection tontineCardOptions={tontineCardOptions} />
          </div>
        </div>
        <div className={`savings-summary`}>
          <ImageSection />
        </div>
      </div>
      <TontineSection />
      <TontineDigitalWay />
      <NewsletterSubscription />
    </div>
  );
}

export default TontinePage;
