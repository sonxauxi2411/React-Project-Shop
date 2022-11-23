import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { popupActions } from "../../Redux/index";
import ModalPopup from "../../Layout/Modal/ModalPopup";
import style from "./products.module.css";
import Context from "../../Store/Context";
import ProdutItem from "./ProdutItem";
import Card from "../../Layout/UI/Card";

function Produts() {
  const data = useContext(Context);
  const isPopup = useSelector((state) => state.popup.isPopup);
  const dispatch = useDispatch();
  const [dataPopup, setDataPopup] = useState();
  const showPopup = () => {
    dispatch(popupActions.SHOW_POPUP());
  };
  const hidenPopup = (item) => {
    dispatch(popupActions.HIDE_POPUP());
  };
  const dataItem = (item) => {
    setDataPopup(item);
  };
  const dataProduct = data?.map((item) => (
    <ProdutItem
      key={item._id.$oid}
      item={item}
      onShow={showPopup}
      onDataItem={dataItem}
    />
  ));

  return (
    <React.Fragment>
      <Card>
        <div className={style.produts}>
          <div className="d-flex flex-column">
            <span className="text-black-50">Made in the hard way</span>
            <span className="fs-4 text-uppercase">Top Trending products</span>
          </div>
          <div className={style.produts__item}>{dataProduct}</div>
        </div>
      </Card>
      {isPopup && <ModalPopup onHiden={hidenPopup} onData={dataPopup} />}
    </React.Fragment>
  );
}

export default Produts;
