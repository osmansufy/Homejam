import React, { useEffect, useRef, useState } from "react";
import labelIcon from "../../assets/images/Calendar.svg";
const SingleLabel = (props) => {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);
  const { size, progress, strokeWidth, circleOneStroke, circleTwoStroke } =
    props;

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);

    circleRef.current.style = "transition: stroke-dashoffset 850ms ease-in-out";
  }, [setOffset, progress, circumference, offset]);
  return (
    <svg className="svg" width={size} height={size}>
      <circle
        className="svg-circle-bg"
        stroke={circleOneStroke}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <circle
        className="svg-circle"
        ref={circleRef}
        stroke={circleTwoStroke}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90, ${size / 2}, ${size / 2})`}
      />
      <image
        x={center}
        y={center - size / 6}
        height="32"
        width="32"
        transform="translate(-16,-16)"
        href={labelIcon}
      />
      <text
        x={center}
        y={center}
        transform="translate(0,16)"
        className="svg-circle-progress"
      >
        {progress}
      </text>
      <text x={center} y={center + 42} className="svg-circle-text">
        Label
      </text>
    </svg>
  );
};

export default SingleLabel;
