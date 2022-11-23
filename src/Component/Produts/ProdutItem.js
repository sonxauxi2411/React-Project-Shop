import React from "react";
import { formatCash } from "../Hook/formtCash";

function ProdutItem({ item, onShow, onDataItem }) {
  //chuyển đổi tiền tệ vnd
  const price = item.price;

  const handlerShow = () => {
    onDataItem(item);
    onShow();
  };
  return (
    <React.Fragment>
      <div onClick={handlerShow}>
        <img src={item.img1} width="100%" alt={item.name} />
        <div className="text-center">
          <p className="fw-bold">{item.name}</p>
          <p className="text-black-50">{formatCash(price)} VND</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProdutItem;
