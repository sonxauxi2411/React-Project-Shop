import React from 'react'
import BackgroundBanner from '../Component/Banner/BackgroundBanner'

import ProductList from '../Component/ProductList/ProductList'

import Card from '../Layout/UI/Card'

function Shop() {
  return (
    <Card>
      <div className="d-flex flex-column gap-5">
        <BackgroundBanner name="shop" title="shop" />
        <ProductList />
      </div>
    </Card>
  )
}

export default Shop
