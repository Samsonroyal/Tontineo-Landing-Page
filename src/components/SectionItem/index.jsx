import { useCallback, useState, forwardRef } from "react";
import "./style.css";

function SectionItem({ className, onSelect_sectionItemsList, sectionTitle }) {
  return (
    <p onClick={onSelect_sectionItemsList} className={`${className} section-title-text ${className}`}>
      {sectionTitle}
    </p>
  );
}

export default SectionItem;
