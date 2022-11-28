import React from 'react'
import Button from '../../Layout/UI/Button'
import style from './CartTotal.module.css'
function CartTotal() {
    return (
        <div className={style.cartTotal}>
            <div className={style.cartTotal_box}>
                <p>Cart Total</p>
                <div className='d-flex gap-3 border-bottom'>
                    <p>Subtotal</p>
                    <p>0</p>
                </div>
                <div className='d-flex gap-3'>
                    <p>Total</p>
                    <p>0</p>
                </div>
                <div>
                    <input />
                    <Button >Apply</Button>
                </div>
            </div>

        </div>
    )
}

export default CartTotal