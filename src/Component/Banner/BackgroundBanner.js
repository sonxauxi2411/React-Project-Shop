import React from 'react'
import style from './BackgroundBanner.module.css'
function BackgroundBanner(props) {
  return (
    <div className={style.backgorund__banner}>
      <div className={style.backgorund__titile}>
        <h2 className="fs-2 text-uppercase">{props.name}</h2>
        <p className="text-uppercase fw-semibold">{props.title}</p>
      </div>
    </div>
  )
}

export default BackgroundBanner
