import React from "react";
import style from "./Modal.module.css";
import ReactDOM from "react-dom";

//bg làm mờ
const Backdrop = (props) => {
  return <div className={style.backdrop}></div>;
};
//modal box cần hiện
const ModalOverLay = (props) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{props.children}</div>
    </div>
  );
};
const protalElement = document.querySelector("#overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, protalElement)}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        protalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
