import React from "react";

const Button = (props) => {
  return (
    <button
      className={`bg-[#DCCA87] px-6 py-2 text-sm font-semibold ${props.className}`}
    >
      <a href={`${props.href}`}>{props.text}</a>
    </button>
  );
};

export default Button;
