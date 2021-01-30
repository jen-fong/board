import React from "react";
import classNames from "classnames";
import "./index.css";

function Avatar(props) {
  return (
    <div className={classNames("avatar", props.styles)} {...props}>
      {props.children}
    </div>
  );
}

export default Avatar;
