import { useCallback, useState, forwardRef } from "react";
import TontineoWidget from "../TontineoWidget";
import ProfileCard2 from "../ProfileCard2";
import "./style.css";

function TontineDashboard() {
  return (
    <div className={`app-review-container`}>
      <TontineoWidget />
      <ProfileCard2 />
    </div>
  );
}

export default TontineDashboard;
