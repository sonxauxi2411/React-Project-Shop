import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../Layout/UI/Card";
import style from "./Banner.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../../Layout/UI/Button";

function Banner() {
  const navigate = useNavigate();
  const handlerShopPage = (e) => {
    e.preventDefault();
    navigate("shop");
  };

  return (
    <Card>
      <div className={style.banner}>
        <div className="position-absolute top-50 start-0 translate-middle-y ps-5">
          <p className="fs-6 text-black-50">New inspiration 2020</p>
          <h2 className="fs-1 w-75 fst-italic">20% OFF ON NEW SEASON</h2>

          <Button onClick={handlerShopPage}> Browse collections</Button>
        </div>
      </div>
    </Card>
  );
}

export default Banner;
