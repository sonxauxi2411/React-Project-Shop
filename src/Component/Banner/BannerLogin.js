import React from "react";
import Card from "../../Layout/UI/Card";
import style from "./BannerLogin.module.css";

function BannerLogin() {
  return (
    <Card>
      <div className={style.banner__login}></div>
    </Card>
  );
}

export default BannerLogin;
