import React from "react";
import Banner from "../Component/Banner/Banner";
import Categories from "../Component/Produts/Categories";
import Information from "../Component/Produts/Information";
import Produts from "../Component/Produts/Produts";
import Subscribe from "../Component/Produts/Subscribe";

function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <Produts />
      <Information />
      <Subscribe />
    </>
  );
}

export default Home;
