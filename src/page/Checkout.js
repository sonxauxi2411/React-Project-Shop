import React from 'react'
import CartTotal from '../Component/Cart/CartTotal'
import InputDetail from '../Layout/UI/inputDetail'
import Card from '../Layout/UI/Card'
import style from './Checkout.module.css'
import BackgroundBanner from '../Component/Banner/BackgroundBanner'
import Button from '../Layout/UI/Button'
import { useSelector } from 'react-redux'
import { formatCash } from '../Component/Hook/formtCash'

function Checkout() {
  const listCart = useSelector((state) => state.listCart)
  console.log(listCart.listProducts)
  return (
    <Card>
      <div className={style.checkout}>
        <BackgroundBanner name="Checkout" title="Home/Cart/Checkout" />
        <h2>Billing Details</h2>
        <div className="row  ">
          <form className={`${style.checkout__form} col-8 px-2`}>
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
            <div className="pt-2">
              <Button>Place Order</Button>
            </div>
          </form>
          <div className="col-4 fst-italic">
            <div className={style.checkout__products}>
              <span className="fs-3 text-uppercase fst-italic">Your Order</span>
              <div className="d-flex flex-column gap-2 w-100">
                {/* <div className="d-flex justify-content-between border-bottom pb-2">
                  <span className="fw-semibold">iphone</span>
                  <span className="text-black-50">3000k</span>
                </div>
                <div className="d-flex justify-content-between border-bottom pb-2">
                  <span className="fw-semibold">ipad</span>
                  <span className="text-black-50">3000k</span>
                </div> */}
                {listCart.listProducts?.map((product) => {
                  return (
                    <div className="d-flex justify-content-between  border-bottom pb-2">
                      <span className="fw-semibold">{product.name}</span>
                      <span className="text-black-50">
                        {`${formatCash(product.price)} VND x${product.qty}`}
                      </span>
                    </div>
                  )
                })}
              </div>
              <div className="d-flex justify-content-between w-100">
                <span className="fw-semibold fs-5 text-uppercase">total</span>
                <span>{formatCash(`${listCart.total}`)} VND</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Checkout
