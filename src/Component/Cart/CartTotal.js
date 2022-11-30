import { useSelector } from 'react-redux'
import Button from '../../Layout/UI/Button'
import { formatCash } from '../Hook/formtCash'
import style from './CartTotal.module.css'
import { AiFillGift } from 'react-icons/ai'

function CartTotal() {
  const total = useSelector((state) => state.listCart.total)
  // const total = getTolocalStorage('total')

  return (
    <div className={style.cartTotal}>
      <div className={style.cartTotal_box}>
        <p className="fs-2 text-uppercase">Cart Total</p>
        <div className="d-flex gap-3 border-bottom">
          <p className="fw-semibold">Subtotal</p>
          <p className="text-black-50 fw-lighter fst-italic">
            {formatCash(`${total}`)} VND
          </p>
        </div>
        <div className="d-flex gap-3">
          <p className="fw-semibold">Total</p>
          <p className="fst-italic">{formatCash(`${total}`)} VND</p>
        </div>
        <div className="d-flex flex-column gap-2">
          <input placeholder="Enter Your coupon" />
          <Button>
            <AiFillGift /> Apply coupon
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
