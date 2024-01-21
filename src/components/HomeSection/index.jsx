import { useCallback, useState, forwardRef } from "react";
import AmazingServiceSection from "../AmazingServiceSection";
import ProfileCard1 from "../ProfileCard1";
import "./style.css";

function HomeSection() {
  return (
    <div className={`testimonial-container1`}>
      <AmazingServiceSection />
      <ProfileCard1 />
    </div>
  );
}

export default HomeSection;
