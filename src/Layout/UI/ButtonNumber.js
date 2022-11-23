import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import style from "./ButtonNumber.module.css";
function ButtonNumber() {
  const [count, setCount] = useState(1);
  const handlerCountDown = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };
  const handlerCountUp = () => {
    setCount(count + 1);
  };
  return (
    <div className={style.ButtonNumber}>
      <button onClick={handlerCountDown}>
        <GrPrevious />
      </button>
      <span className="text-dark">{count}</span>
      <button onClick={handlerCountUp}>
        <GrNext />
      </button>
    </div>
  );
}

export default ButtonNumber;
