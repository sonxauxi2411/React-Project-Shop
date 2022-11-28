import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GrFormNextLink } from 'react-icons/gr'
import { BsFillTrashFill } from 'react-icons/bs'
import { GrFormPreviousLink } from 'react-icons/gr'
import style from './ListCart.module.css'
import { formatCash } from '../Hook/formtCash'
import QuantityCounter from '../../Layout/QuatityCounte/QuantityCounter'
import { Link } from 'react-router-dom'
import { cartListAction } from '../../Redux/CartList'
import { getTolocalStorage } from '../Hook/LocalStrong'
function ListCart() {
  const dispatch = useDispatch()
  // const listProductCartS = useSelector((state) => state.listCart.listProducts)
  const listProductCartS = getTolocalStorage('CartList')
  const handlerRemove = (index) => {
    dispatch(cartListAction.removeCart(index))
  }
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
              <QuantityCounter onData={listProductCartS} />
            </td>
            <td>{item.total} </td>
            <td>
              <BsFillTrashFill
                onClick={() => {
                  handlerRemove(index)
                }}
              />
            </td>
          </tr>
        ))}
      </table>
      <div className="d-flex justify-content-between">
        <Link to="/shop">
          <GrFormPreviousLink /> Continie Shopping
        </Link>
        <Link
          to="/checkout"
          className="bg-light bg-gradient p-2 text-black-50 "
        >
          Proceed to Checkout <GrFormNextLink />
        </Link>
      </div>
    </div>
  )
}

export default ListCart
