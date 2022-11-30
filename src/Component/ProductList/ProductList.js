import React, { useCallback, useContext, useState } from 'react'
import Context from '../../Store/Context'
import style from './PrductList.module.css'
import { GrNext } from 'react-icons/gr'
import { GrPrevious } from 'react-icons/gr'
import ProductCard from './ProductCard'

function ProductList() {
  const data = useContext(Context)
  const [products, setProducts] = useState(data)
  const [active, setActive] = useState('')

  const filterProducts = (cardItem) => {
    const resutl = data?.filter((item) => {
      return item.category === cardItem
    })
    setProducts(resutl)
  }

  return (
    <React.Fragment>
      <div className={style.categorie}>
        <div className=" d-flex flex-column ">
          <h2 className="text-uppercase">Categories</h2>
          <div className="">
            <div className="bg-dark text-light">
              <h4 className="px-3">Apple</h4>
            </div>
            <span
              id="9"
              onClick={(e) => {
                setActive(e.target.id)
                return setProducts(data)
              }}
              className={active === '9' ? `${style.active}` : ''}
            >
              All
            </span>
            <div className={style.categorie__list}>
              <p className={style.categorie_titile}>Iphone & Mac</p>
              <span
                id="1"
                onClick={(e) => {
                  setActive(e.target.id)
                  return filterProducts('iphone')
                }}
                className={active === '1' ? `${style.active}` : ''}
              >
                Iphone
              </span>
              <span
                id="2"
                onClick={(e) => {
                  setActive(e.target.id)
                  return filterProducts('ipad')
                }}
                className={active === '2' ? `${style.active}` : ''}
              >
                Ipad
              </span>
              <span
                id="3"
                onClick={(e) => {
                  setActive(e.target.id)
                  return filterProducts('macbook')
                }}
                className={active === '3' ? `${style.active}` : ''}
              >
                Macbook
              </span>
            </div>

            <div className={style.categorie__list}>
              <p className={style.categorie_titile}>Wireless</p>
              <span
                id="4"
                onClick={(e) => {
                  setActive(e.target.id)
                  return filterProducts('airpod')
                }}
                className={active === '4' ? `${style.active}` : ''}
              >
                Airpod
              </span>
              <span
                id="8"
                onClick={(e) => {
                  setActive(e.target.value)
                  return filterProducts('watch')
                }}
                className={active === '8' ? `${style.active}` : ''}
              >
                Watch
              </span>
            </div>

            <div className={style.categorie__list}>
              <p className={style.categorie_titile}>Other</p>
              <span
                id="5"
                onClick={(e) => {
                  setActive(e.target.id)
                  return filterProducts('mouse')
                }}
                className={active === '5' ? `${style.active}` : ''}
              >
                Mouse
              </span>
              <span
                id="6"
                onClick={(e) => {
                  setActive(e.target.id)
                  return filterProducts('keyboard')
                }}
                className={active === '6' ? `${style.active}` : ''}
              >
                Keyboard
              </span>
              <span
                id="7"
                onClick={(e) => {
                  setActive(e.target.value)
                  return filterProducts('other')
                }}
                className={active === '7' ? `${style.active}` : ''}
              >
                Other
              </span>
            </div>
          </div>
        </div>
        <div className={style.productList}>
          <div className={style.inputCart}>
            <input type="text" placeholder="Enter Search Here!" />
            <select>
              <option>Default setting</option>
            </select>
          </div>
          <div className={style.productList__items}>
            {products?.map((item) => (
              <ProductCard key={item._id.$oid} item={item} />
            ))}
          </div>
          <div className={style.btn__page}>
            <button>
              <GrPrevious />
            </button>

            <span>1</span>
            <button>
              <GrNext />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProductList
