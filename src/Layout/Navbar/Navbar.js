import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import Card from "../UI/Card";
import { BsCartFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

const Navbar = () => {
  //style active navbarlink
  const navbarClass = (navData) => (navData.isActive ? style.active : "");
  return (
    <Card>
      <div className={style.navbar}>
        <div className={style.navbar__title}>
          <NavLink to="/" className={navbarClass}>
            Home
          </NavLink>
          <NavLink to="/shop" className={navbarClass}>
            Shop
          </NavLink>
        </div>
        <div>
          <h1>Boutique</h1>
        </div>
        <div className={style.navbar__title}>
          <NavLink className={navbarClass} to="/cart">
            <BsCartFill /> Cart
          </NavLink>
          <NavLink className={navbarClass} to="/login">
            <BsFillPersonFill /> login
          </NavLink>
        </div>
      </div>
    </Card>
  );
};

export default Navbar;
