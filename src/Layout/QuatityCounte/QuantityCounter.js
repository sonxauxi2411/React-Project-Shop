import React, { useState } from 'react'
import { BsCaretRightFill } from 'react-icons/bs'
import { BsFillCaretLeftFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { quantiyAction } from '../../Redux/Quantity'

function QuantityCounter(props) {
  const counter = useSelector((state) => state.quantity.counter)
  const dispatch = useDispatch()

  const handlerIncrement = () => {
    dispatch(quantiyAction.increment())
    console.log(props.onData)
  }
  const handlerDectement = () => {
    dispatch(quantiyAction.dectement())
  }
  return (
    <div className="d-flex justify-content-center align-items-center gap-3">
      <BsFillCaretLeftFill
        style={{ cursor: 'pointer' }}
        onClick={handlerDectement}
      />
      <span>{counter}</span>
      <BsCaretRightFill
        style={{ cursor: 'pointer' }}
        onClick={handlerIncrement}
      />
    </div>
  )
}

export default QuantityCounter
