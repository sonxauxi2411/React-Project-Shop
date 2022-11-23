import React from "react";

import ProductList from "../Component/ProductList/ProductList";

import Card from "../Layout/UI/Card";

function Shop() {
  return (
    <Card>
      <div className="d-flex flex-column gap-5">
        <div className="d-flex justify-content-between bg-secondary bg-gradient p-5 text-light text-uppercase">
          <h1>Shop</h1>
          <p>Shop</p>
        </div>
        <ProductList />
      </div>
    </Card>
  );
}

export default Shop;
