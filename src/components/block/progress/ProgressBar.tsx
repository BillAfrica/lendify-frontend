import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import React from "react";

interface ProgressBarProps {
  value: number;
  text: string;
}
function ProgressBar({ value, text }: ProgressBarProps) {
  return (
    <div>
      <CircularProgressbar
        className="w-12 h-12"
        value={value}
        text={`${text}`}
        styles={{
          path: {
            stroke: `#097782`,
          },
          text: {
            fill: "#097782",
            fontSize: "30px",
          },
        }}
      />
    </div>
  );
}

export default ProgressBar;
