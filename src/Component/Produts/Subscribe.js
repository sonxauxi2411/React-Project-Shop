import React from "react";
import Card from "../../Layout/UI/Card";
import style from "./Subscribe.module.css";

function Subscribe() {
  return (
    <Card>
      <div className={style.subscribe}>
        <div>
          <div className="d-flex flex-column">
            <p className="fs-4 fst-italic text-uppercase">Let's be friends</p>
            <p className="text-black-50">
              Nisi nisi tempor consequat laboris nisi
            </p>
          </div>
        </div>
        <div className={style.inputSub}>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your email address"
              aria-label="Enter Your email address"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-secondary"
              type="button"
              id="button-addon2"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Subscribe;
