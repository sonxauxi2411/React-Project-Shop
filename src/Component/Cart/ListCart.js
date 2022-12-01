import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GrFormNextLink } from 'react-icons/gr'
import { BsFillTrashFill } from 'react-icons/bs'
import { GrFormPreviousLink } from 'react-icons/gr'
import style from './ListCart.module.css'
import { formatCash } from '../Hook/formtCash'

import { Link } from 'react-router-dom'
import { cartListAction } from '../../Redux/CartList'

import UpdateQuantity from '../../Layout/QuatityCounte/UpdateQuantity'
function ListCart(props) {
  const dispatch = useDispatch()

  const listProductCartS = useSelector((state) => state.listCart.listProducts)
  // console.log(listProductCartS)

  const handlerRemove = (index) => {
    dispatch(cartListAction.removeCart(index))
  }
  // const listProductCartS = getTolocalStorage('CartList')

  const isListProductsCart = listProductCartS.length > 0
  console.log(isListProductsCart)
  return (
    <div className={style.cart__list}>
      <table>
        <tr>
          <th className="text-uppercase">Image</th>
          <th className="text-uppercase">Product</th>
          <th className="text-uppercase">Price</th>
          <th className="text-uppercase">quantity</th>
          <th className="text-uppercase">total</th>
          <th className="text-uppercase">remove</th>
        </tr>

        {listProductCartS?.map((item, index) => (
          <tr>
            <td>
              <img src={item.img} alt={item.name} width="80px" />
            </td>
            <td>{item.name}</td>
            <td>{formatCash(item.price)} VND</td>
            <td>
              <UpdateQuantity onData={item} />
            </td>
            <td> {formatCash(`${item.total}`)} VND </td>
            <td>
              <BsFillTrashFill
                onClick={() => {
                  handlerRemove(index)
                }}
                className={style.remove}
              />
            </td>
          </tr>
        ))}
      </table>
      <div className={`d-flex justify-content-between ${style.ListCart_link}`}>
        <Link to="/shop">
          <GrFormPreviousLink /> Continie Shopping
        </Link>
        {isListProductsCart && (
          <Link
            to="/checkout"
            className="bg-light bg-gradient p-2 text-black-50 "
          >
            Proceed to Checkout <GrFormNextLink />
          </Link>
        )}
      </div>
    </div>
  )
}

export default ListCart
