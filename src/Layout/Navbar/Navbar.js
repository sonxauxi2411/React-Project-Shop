import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'
import Card from '../UI/Card'
import { BsCartFill } from 'react-icons/bs'
import { FaCaretDown } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { getTolocalStorage } from '../../Component/Hook/LocalStrong'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../../Redux/user'

const Navbar = () => {
  const dispatch = useDispatch()
  const user = getTolocalStorage('user')
  const isValidUser = useSelector((state) => state.user.isValidUser)
  const handlerLogout = () => {
    dispatch(userAction.onLogout())
  }

  const navbarClass = (navData) => (navData.isActive ? style.active : '')
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
          {!isValidUser ? (
            <NavLink className={navbarClass} to="/login">
              <BsFillPersonFill /> Login/SignUp
            </NavLink>
          ) : (
            <div className={style.navbar_login}>
              <BsFillPersonFill />
              <span>{user?.name}</span>
              <FaCaretDown />
              <span onClick={handlerLogout}>(Logout)</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}

export default Navbar
