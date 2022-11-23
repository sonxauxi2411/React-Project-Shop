import React from "react";
import style from "./Button.module.css";
function Button(props) {
  return (
    <button className={style.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
