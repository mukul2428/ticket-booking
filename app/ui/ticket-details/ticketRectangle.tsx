"use client";
import { useState } from "react";
import { BoxTickSvg } from "../svgIcons";

type rectangleProps = {
  categoryName?: string;
  requirementsSelected: string[];
};

const TickRectangle: React.FC<rectangleProps> = ({
  categoryName,
  requirementsSelected,
}) => {
  const [isBorderHighlighted, setBorderHighlight] = useState(false);

  const toggleIconAndBorderColor = () => {
    setBorderHighlight(!isBorderHighlighted);
    if (categoryName) {
      const index = requirementsSelected.indexOf(categoryName);
      if (index !== -1) {
        requirementsSelected.splice(index, 1);
      } else {
        requirementsSelected.push(categoryName);
      }
    }
  };
  return (
    <div
      className={`relative p-6 border-2 m-2 rounded-lg cursor-pointer ${
        isBorderHighlighted ? "border-orange-600" : "border-gray-500"
      }`}
      onClick={toggleIconAndBorderColor}
    >
      {isBorderHighlighted && (
        <div className="absolute top-0 right-0 mt-2 mr-2">
          <BoxTickSvg />
        </div>
      )}
      <div className="text-center">
        <p>{categoryName}</p>
      </div>
    </div>
  );
};

export default TickRectangle;
