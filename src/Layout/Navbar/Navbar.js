import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import Card from "../UI/Card";
import { BsCartFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { getTolocalStorage } from "../../Component/Hook/LocalStrong";

const Navbar = () => {

  const user = getTolocalStorage('user')
  console.log(user)
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
          {user ? <NavLink className={navbarClass} to="/login">
            <BsFillPersonFill /> Login/SignUp
          </NavLink> : <span>lol</span>}
        </div>
      </div>
    </Card>
  );
};

export default Navbar;
