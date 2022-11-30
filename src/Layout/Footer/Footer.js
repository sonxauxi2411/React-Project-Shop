import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../UI/Card'
import style from './Footer.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer() {
  return (
    <div className={style.footer_bg}>
      <Card>
        <div className={`${style.footer} row w-100 fst-italic`}>
          <div className="text-light d-flex flex-column col">
            <span className="text-uppercase py-2 fw-bold">
              Customer Services
            </span>
            <Link to="#">Help & contact Us</Link>
            <Link to="#">Returns & Refunds</Link>
            <Link to="#">Online Stores</Link>
            <Link to="#">Terms & Conditions</Link>
          </div>
          <div className="text-light d-flex flex-column col">
            <span className="text-uppercase py-2 fw-bold">Company</span>
            <Link to="#">What We Do</Link>
            <Link to="#">Available Services</Link>
            <Link to="#">Latest Post</Link>
            <Link to="#">FAQs</Link>
          </div>
          <div className="text-light d-flex flex-column col">
            <span className="text-uppercase py-2 fw-bold">Socaial Media</span>
            <Link to="#">TWiter</Link>
            <Link to="#">Instagram</Link>
            <Link to="#">Facebook</Link>
            <Link to="#">Pinterest</Link>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Footer
