import React from "react";
import style from "./ProductCard.module.css";
import { formatCash } from "../Hook/formtCash";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productAction } from "../../Redux/productsItem";

function ProductCard({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pageNavigate = (item) => {
    navigate(`/detail/${item}`);
  };
  const handlerProductDetail = () => {
    pageNavigate(item._id.$oid);
    dispatch(productAction.setProducts(item));
  };
  return (
    <div onClick={handlerProductDetail}>
      <div className={style.product__card__img}>
        <img src={item.img1} alt={item.name} />
      </div>
      <div>
        <div className="text-center w-75">
          <p className="fw-bold">{item.name}</p>
          <p className="text-black-50">{formatCash(item.price)} VND</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
