import React from "react";
import Card from "../../Layout/UI/Card";
import LoginForm from "../../Layout/UI/LoginForm";
import style from "./BannerLogin.module.css";

function BannerLogin() {
  return (
    <Card>
      <div className={style.banner__login}>
       <LoginForm />
      </div>
    </Card>
  );
}

export default BannerLogin;
