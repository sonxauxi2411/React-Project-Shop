import React from 'react'
import CartTotal from '../Component/Cart/CartTotal'
import InputDetail from '../Layout/UI/inputDetail'
import Card from '../Layout/UI/Card'
import style from './Checkout.module.css'
import BackgroundBanner from '../Component/Banner/BackgroundBanner'

function Checkout() {
  return (
    <Card>
      <div className={style.checkout}>
        <BackgroundBanner name="Checkout" title="Home/Cart/Checkout" />
        <h2>Billing Details</h2>
        <div className="row">
          <form className={`${style.checkout__form} col-8`}>
            <InputDetail
              name="Full name"
              placeholder="Enter Your Full Name Here!"
            />
            <InputDetail name="Email" placeholder="Enter Your Email Here!" />
            <InputDetail
              name="Phone Number"
              placeholder="Enter Your Phone Number Here!"
            />
            <InputDetail
              name="Address"
              placeholder="Enter Your Address Here!"
            />
          </form>
          <div className="col-4">
            <span>Your Order</span>
            <span>app iphone</span>
            <span>total</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Checkout
