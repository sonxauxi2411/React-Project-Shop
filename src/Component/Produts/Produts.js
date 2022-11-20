import React, { useContext } from "react";
import style from "./products.module.css";
import Context from "../../Store/Context";
import ProdutItem from "./ProdutItem";
import Card from "../../Layout/UI/Card";

function Produts() {
  const data = useContext(Context);

  return (
    <Card>
      <div className={style.produts}>
        <div className="d-flex flex-column">
          <span className="text-black-50">Made in the hard way</span>
          <span className="fs-4 text-uppercase">Top Trending products</span>
        </div>
        <div className={style.produts__item}>
          {data?.map((item) => (
            <ProdutItem key={item._id.$oid} item={item} />
          ))}
        </div>
      </div>
    </Card>
  );
}

export default Produts;
