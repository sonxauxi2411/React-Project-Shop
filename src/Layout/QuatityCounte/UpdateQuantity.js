import React, { useState } from 'react'
import { BsCaretRightFill } from 'react-icons/bs'
import { BsFillCaretLeftFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { cartListAction } from '../../Redux/CartList'

function UpdateQuantity(props) {
  const dispatch = useDispatch()

  const handlerIncrement = () => {
    dispatch(cartListAction.incressQty({ id: props.onData.id }))
  }
  const handlerDectement = () => {
    dispatch(cartListAction.dectementQty({ id: props.onData.id }))
  }

  return (
    <div className="d-flex justify-content-center align-items-center gap-3">
      {props.onData.qty !== 0 ? (
        <BsFillCaretLeftFill
          style={{ cursor: 'pointer' }}
          onClick={handlerDectement}
        />
      ) : (
        ''
      )}
      <span>{props.onData.qty}</span>
      <BsCaretRightFill
        style={{ cursor: 'pointer' }}
        onClick={handlerIncrement}
      />
    </div>
  )
}

export default UpdateQuantity
