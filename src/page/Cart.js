import React from 'react'

import BackgroundBanner from '../Component/Banner/BackgroundBanner'
import CartTotal from '../Component/Cart/CartTotal'
import ListCart from '../Component/Cart/ListCart'

import Card from '../Layout/UI/Card'
import style from './Cart.module.css'
function Cart() {
  

  return (
    <React.Fragment>
      (
      <Card>
        <div className={style.cart}>
          <BackgroundBanner name="cart" title="cart" />
          <h3>Shopping Cart</h3>
          <div className="d-flex justify-content-between">
            <ListCart />
            <CartTotal />
          </div>
        </div>
      </Card>
      )
    </React.Fragment>
  )
}

export default Cart
