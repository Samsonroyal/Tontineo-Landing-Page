import { useCallback, useState, forwardRef } from "react";
import SectionItem from "../SectionItem";
import "./style.css";

function SectionItemListSelector({ sectionItemsList }) {
  const [selected_sectionItemsList, setSelected_sectionItemsList] = useState(2);

  const onSelect_sectionItemsList = useCallback((val) => {
    setSelected_sectionItemsList(val);
  });

  return (
    <div className={`section-title-container`}>
      {sectionItemsList.map((data, index) => {
        return <SectionItem {...data} key={index} onSelect_sectionItemsList={() => onSelect_sectionItemsList(index)} className={selected_sectionItemsList === index ? "section-title" : ""} />;
      })}
    </div>
  );
}

export default SectionItemListSelector;
