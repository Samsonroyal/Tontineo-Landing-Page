import { useCallback, useState, forwardRef } from "react";
import TontineCard from "../TontineCard";
import { theme } from "../../theme";
import "./style.css";

function RenderTontineCards({ tontineCardOptions }) {
  const tontineCardStyles = [
    { textAlignStyle: theme.others.TEXT_ALIGN_32A007, flexShrinkValue: theme.others.FLEX_SHRINK_31 },
    { textAlignStyle: theme.others.TEXT_ALIGN_32A007, flexShrinkValue: theme.others.FLEX_SHRINK_31 },
    { flexShrinkValue: theme.others.FLEX_SHRINK_30 },
    { flexShrinkValue: theme.others.FLEX_SHRINK_30 },
  ];

  return (
    <div className={`tontine-container2`}>
      {tontineCardOptions.map((data, index) => {
        return <TontineCard {...data} key={index} {...tontineCardStyles[index]} />;
      })}
    </div>
  );
}

export default RenderTontineCards;
