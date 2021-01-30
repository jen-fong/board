import React from "react";
import classNames from "classnames";
import "./index.css";

function Button(props) {
  return (
    <button
      className={classNames("btn", `btn--${props.type}`, {
        "btn--disabled": props.disabled,
      })}
      {...props}
    >
      submit
    </button>
  );
}

export default Button;
