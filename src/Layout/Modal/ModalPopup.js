import React from 'react'
import Modal from './Modal'
import { formatCash } from '../../Component/Hook/formtCash'
import style from './ModalPopup.module.css'
import Button from '../UI/Button'
import { BsCartFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function ModalPopup({ onHiden, onData }) {
  const navigate = useNavigate()
  const handlerDetailProduct = () => {
    navigate(`detail/${onData._id.$oid}`)
  }
  return (
    <Modal>
      <div className="text-end" onClick={onHiden}>
        <span style={{ cursor: 'pointer' }}>X</span>
      </div>
      <div className={`${style.modalPopup} row`}>
        <div className="col">
          <img
            src={onData?.img1}
            alt={onData?.name}
            width="100%"
            height="100%"
          />
        </div>
        <div className="col p-4 d-flex flex-column gap-3">
          <div className="d-flex flex-column gap-2 fst-italic p-3 ">
            <h3>{onData?.name}</h3>
            <span>{formatCash(onData?.price)} VND</span>
            <span className="text-black-50">{onData?.short_desc}</span>
          </div>
          <div>
            <Button onClick={handlerDetailProduct}>
              <BsCartFill />
              view Detail
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalPopup
