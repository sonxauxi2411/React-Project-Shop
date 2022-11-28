import React from 'react'
import Banner from '../Component/Banner/Banner'
import Categories from '../Component/Produts/Categories'
import Information from '../Component/Produts/Information'
import Products from '../Component/Produts/Products'
import Subscribe from '../Component/Produts/Subscribe'

function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <Products />
      <Information />
      <Subscribe />
    </>
  )
}

export default Home
