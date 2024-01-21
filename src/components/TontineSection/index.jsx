import { useCallback, useState, forwardRef } from "react";
import HomeLayout from "../HomeLayout";
import TontineDashboard from "../TontineDashboard";
import HomeSection from "../HomeSection";
import "./style.css";
import messages from "./messages.json";

function TontineSection() {
  return (
    <div className={`testimonial-container3`}>
      <p className={`testimonial-heading`}>
        <span>{messages["still_fence_heres_what_ltbr_gt"]}</span>
        <span className={`active-tontine-groups-in-west-africa1`}>{messages["users"]}</span>
        <span>{messages["saying"]}</span>
      </p>
      <div className={`testimonials-container`}>
        <HomeLayout />
        <TontineDashboard />
        <HomeSection />
      </div>
    </div>
  );
}

export default TontineSection;
