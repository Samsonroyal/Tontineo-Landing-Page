import { useCallback, useState, forwardRef } from "react";
import LifeImprover from "../LifeImprover";
import ProfileCard from "../ProfileCard";
import "./style.css";

function HomeLayout() {
  return (
    <div className={`app-container`}>
      <LifeImprover />
      <ProfileCard />
    </div>
  );
}

export default HomeLayout;
