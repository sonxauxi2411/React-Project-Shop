import React, { useContext } from "react";
import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import Button from "../Layout/UI/Button";
import Card from "../Layout/UI/Card";
import { formatCash } from "../Component/Hook/formtCash";
import Context from "../Store/Context";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import ButtonNumber from "../Layout/UI/ButtonNumber";

function Detail() {
  const dataProduct = useContext(Context);
  const parama = useParams();

  const product = dataProduct?.find(
    (item) => item._id.$oid === parama.detailId
  );
  console.log(product?.long_desc);
  return (
    <Card>
      <div className={style.detail}>
        <div className={style.detail__title}>
          <img src={product?.img1} alt={product?.name} />
          <div className={style.detail_info}>
            <h1>{product?.name}</h1>
            <span>{formatCash(product?.price)} VND</span>
            <span>{product?.short_desc}</span>
            <span>
              <b>CATEGORY:</b> {product?.category}
            </span>
            <div className={style.detail_btn}>
              <div className={style.detail_btn_page}>
                <span>Quantity</span>
                <ButtonNumber />
              </div>

              <Button>Add to cart</Button>
            </div>
          </div>
        </div>
        <div className={style.detail__desc}>
          <div>
            <Button>DESCRIPTION</Button>
          </div>

          <p>Product Description</p>
          <span>{product?.long_desc}</span>
        </div>
      </div>
    </Card>
  );
}

export default Detail;
