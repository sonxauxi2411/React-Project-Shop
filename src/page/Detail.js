import React, { useContext, useState } from "react";
import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import Button from "../Layout/UI/Button";
import Card from "../Layout/UI/Card";
import { formatCash } from "../Component/Hook/formtCash";
import Context from "../Store/Context";

import ButtonNumber from "../Layout/UI/ButtonNumber";

function Detail() {
  const dataProduct = useContext(Context);
  const parama = useParams();

  const product = dataProduct?.find(
    (item) => item._id.$oid === parama.detailId
  );

  const relatedProducts = dataProduct?.filter(
    (item) => item.category === product?.category
  );
  const [imgSrc, setImgSrc] = useState(product?.img1);

  const handlerImg = (e) => {
    setImgSrc(e.target.src);
  };

  return (
    <Card>
      <div className={style.detail}>
        <div className={style.detail__title}>
          <div className="d-flex">
            <div>
              <img
                src={product?.img2}
                width="100px"
                height="150px"
                onClick={handlerImg}
                alt={product?.name}
              />
              <img
                src={product?.img3}
                width="100px"
                height="150px"
                onClick={handlerImg}
                alt={product?.name}
              />
              <img
                src={product?.img4}
                width="100px"
                height="150px"
                onClick={handlerImg}
                alt={product?.name}
              />
              <img
                src={product?.img1}
                width="100px"
                height="150px"
                onClick={handlerImg}
                alt={product?.name}
              />
            </div>
            <div>
              <img src={imgSrc} alt={product?.name} width="600px" />
            </div>
          </div>

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
        <div>
          <h2>Related Product</h2>
          <div className="d-flex align-items-center gap-4 py-4">
            {relatedProducts?.map((item) => (
              <div className="d-flex flex-column ">
                <img src={item.img1} alt={item.name} width="200px" />
                <div className="d-flex flex-column text-center w-75">
                  <span>
                    <strong>{item.name}</strong>
                  </span>
                  <span>{formatCash(item.price)} VND </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Detail;
