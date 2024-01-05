"use client";
import { useState } from "react";

type rectangleProps = {
  category: string;
};

const TickRectangle: React.FC<rectangleProps> = ({ category }) => {
  const [isIconVisible, setIconVisibility] = useState(false);
  const [isBorderHighlighted, setBorderHighlight] = useState(false);

  const toggleIconAndBorderColor = () => {
    setIconVisibility(!isIconVisible);
    setBorderHighlight(!isBorderHighlighted);
  };
  return (
    <div
      className={`relative p-6 border-2 m-2 rounded-lg cursor-pointer ${
        isBorderHighlighted ? "border-orange-600" : "border-gray-500"
      }`}
      onClick={toggleIconAndBorderColor}
    >
      {isIconVisible && (
        <div className="absolute top-0 right-0 mt-2 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={toggleIconAndBorderColor}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      )}
      <div className="text-center">
        <p>{category}</p>
      </div>
    </div>
  );
};

export default TickRectangle;
