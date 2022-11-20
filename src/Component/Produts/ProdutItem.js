import React from "react";

function ProdutItem({ item }) {
  const price = item.price;

  //chuyển đổi tiền tệ vnd
  function formatCash(str) {
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev;
      });
  }

  return (
    <div>
      <img src={item.img1} width="100%" />
      <div className="text-center">
        <p className="fw-bold">{item.name}</p>
        <p className="text-black-50">{formatCash(price)} VND</p>
      </div>
    </div>
  );
}

export default ProdutItem;
