import React from "react";

const CrossIcon = (props) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.6654 22.6668L9.33203 9.3335M22.6654 9.3335L9.33203 22.6668"
        stroke="#6F708B"
        strokeLinecap="round"
      />
      <rect x="0.5" y="0.5" width="31" height="31" rx="5.5" stroke="#6F708B" />
    </svg>
  );
};

export default CrossIcon;
