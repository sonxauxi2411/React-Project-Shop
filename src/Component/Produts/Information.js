import React from "react";
import Card from "../../Layout/UI/Card";
import style from "./Information.module.css";

function Information() {
  return (
    <Card>
      <div className={style.info}>
        <div className="d-flex flex-column text-center">
          <span className="fs-4 fst-italic text-uppercase">Free Shipping</span>
          <span className="text-black-50">Free Shipping worldwide</span>
        </div>
        <div className="d-flex flex-column text-center">
          <span className="fs-4 fst-italic text-uppercase">24/7 service</span>
          <span className="text-black-50">Free Shipping worldwide</span>
        </div>
        <div className="d-flex flex-column text-center">
          <span className="fs-4 fst-italic text-uppercase">Festival Offer</span>
          <span className="text-black-50">Free Shipping worldwide</span>
        </div>
      </div>
    </Card>
  );
}

export default Information;
