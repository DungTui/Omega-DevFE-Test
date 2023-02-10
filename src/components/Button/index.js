import clsx from "clsx";
import React from "react";

const Button = (props) => {
  const handleClick = () => {
    props.onClick();
  };
  return (
    <button
      className={clsx(
        "border border-gray-200 cursor-pointer hover:border-slate-400 hover:text-slate-400 px-2",
        props.className
      )}
      onClick={handleClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
