import React from "react";

const LoadingSkeleton = (props) => {
  return (
    <div
      className="skeleton"
      style={{
        height: props.height || "100%",
        width: props.width || "100%",
      }}
    ></div>
  );
};

export default LoadingSkeleton;
