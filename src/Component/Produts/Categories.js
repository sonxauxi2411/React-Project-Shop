import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../Layout/UI/Card'
import style from './Categories.module.css'
import product_1 from '../../Resource/product_1.png'
import product_2 from '../../Resource/product_2.png'
import product_3 from '../../Resource/product_3.png'
import product_4 from '../../Resource/product_4.png'
import product_5 from '../../Resource/product_5.png'

function Categories() {
  const navigate = useNavigate()
  const handlerShoppage = () => {
    navigate('/shop')
  }
  return (
    <Card>
      <div className={style.categorie}>
        <div className="d-flex flex-column fst-italic ">
          <span className="text-black-50">Carefully careated collections</span>
          <span className="fs-5 fw-bold text-uppercase">
            Browse our categories
          </span>
        </div>
        <div className={style.categorie__img}>
          <div className={style.categorie__imgbox}>
            <img onClick={handlerShoppage} src={product_1} alt="error" />
            <img onClick={handlerShoppage} src={product_2} alt="error" />
          </div>
          <div className={style.categorie__imgbox}>
            <img onClick={handlerShoppage} src={product_3} alt="error" />
            <img onClick={handlerShoppage} src={product_4} alt="error" />
            <img onClick={handlerShoppage} src={product_5} alt="error" />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Categories
