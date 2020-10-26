import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "./ProgressBar.css";

const ProgressBar = (props) => {
  const circleRef = useRef(null);
  const {
    size,
    progress,
    circleOneStroke,
    circleTwoStroke,
    seconds,
    microSeconds,
    timeForAWord,
    pathCovered,
    setPathCovered,
    offset,
    setOffset,
  } = props;

  const center = size / 2;
  // const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * 90;
  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setPathCovered(`${progressOffset} ${circumference}`);
    setOffset(progressOffset);

    circleRef.current.style = "transition: stroke-dashoffset 850ms ease-in-out";
  }, [
    setOffset,
    progress,
    circumference,
    offset,
    timeForAWord,
    setPathCovered,
  ]);

  return (
    <>
      <svg className="svg" width={size} height={size}>
        <circle
          className="svg-circle-bg"
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={90}
          strokeWidth={18}
        />
        <circle
          className="svg-circle"
          ref={circleRef}
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={90}
          strokeWidth={18}
          strokeDasharray={pathCovered}
          strokeDashoffset={offset}
        />
        <text x={`${center}`} y={`${center}`} className="svg-circle-text">
          {`${seconds}:${
            microSeconds < 10 ? "0" + microSeconds : microSeconds
          }`}
        </text>
      </svg>
    </>
  );
};

ProgressBar.propTypes = {
  size: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  circleOneStroke: PropTypes.string.isRequired,
  circleTwoStroke: PropTypes.string.isRequired,
};

export default ProgressBar;
