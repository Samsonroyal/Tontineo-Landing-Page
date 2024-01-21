import { useCallback, useState, forwardRef } from "react";
import { Button } from "@mui/base";
import TontinePage from "../TontinePage";
import SectionItemListSelector from "../SectionItemListSelector";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function TontinePageLayout({ sectionItemsList, tontineCardOptions }) {
  return (
    <div className={`main-container1`}>
      <div className={`header-container1`}>
        <div className={`header-container`}>
          <SvgIcon1 className="svg-container" />
          <p className={`tontineo-title`}>{messages["tontineo"]}</p>
        </div>
        <div className={`navbar`}>
          <p className={`primary-navigation`}>{messages["about"]}</p>
          <p className={`primary-navigation`}>{messages["features"]}</p>
          <p className={`primary-navigation`}>{messages["blog"]}</p>
          <p className={`primary-navigation`}>{messages["contact"]}</p>
          {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
          <Button className="green-button1">{messages["login"]}</Button>

          {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
          <Button className="green-button">{messages["sign_up"]}</Button>
        </div>
      </div>
      <TontinePage tontineCardOptions={tontineCardOptions} />
      <div className={`green-header-section`}>
        <div className={`company-logo-section`}>
          <SvgIcon1 className="svg-container9" />
          <p className={`tontineo-title1`}>{messages["tontineo"]}</p>
        </div>
        <div className={`company-section`}>
          <div className={`app-value-section`}>
            <p className={`company-title`}>{messages["company"]}</p>
            <SectionItemListSelector sectionItemsList={sectionItemsList} />
          </div>
          <div className={`section-container`}>
            <p className={`company-title`}>{messages["features"]}</p>
            <div className={`section-menu`}>
              <p className={`section-title-text`}>{messages["witin_africa"]}</p>
              <p className={`text-container`}>{messages["international"]}</p>
            </div>
          </div>
          <div className={`section-container`}>
            <p className={`help-text`}>{messages["help"]}</p>
            <div className={`section-menu`}>
              <p className={`section-title-text`}>{messages["contact"]}</p>
              <p className={`text-container`}>{messages["faqs"]}</p>
            </div>
          </div>
          <div className={`section-container`}>
            <p className={`company-title`}>{messages["legal"]}</p>
            <div className={`section-menu`}>
              <p className={`section-title-text`}>{messages["terms__conditions"]}</p>
              <p className={`text-container`}>{messages["privacy_policy"]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TontinePageLayout;
