import React from 'react'
import Card from '../../Layout/UI/Card'
import style from './Information.module.css'

function Information() {
  return (
    <Card>
      <div className={style.info}>
        <div className="d-flex flex-column text-center fst-italic">
          <span className="fs-4  text-uppercase">Free Shipping</span>
          <span className="text-black-50">Free Shipping worldwide</span>
        </div>
        <div className="d-flex flex-column text-center fst-italic">
          <span className="fs-4 text-uppercase">24X7 service</span>
          <span className="text-black-50">Free Shipping worldwide</span>
        </div>
        <div className="d-flex flex-column text-center fst-italic">
          <span className="fs-4 text-uppercase">Festival Offer</span>
          <span className="text-black-50">Free Shipping worldwide</span>
        </div>
      </div>
    </Card>
  )
}

export default Information
