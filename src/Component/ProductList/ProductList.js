import React, { useCallback, useContext, useState } from "react";
import Context from "../../Store/Context";
import style from "./PrductList.module.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import ProductCard from "./ProductCard";

function ProductList() {
  const data = useContext(Context);
  const [products, setProducts] = useState(data);

  const filterProducts = (cardItem) => {
    const resutl = data?.filter((item) => {
      return item.category === cardItem;
    });
    setProducts(resutl);
  };


  return (
    <React.Fragment>
      <div className={style.categorie}>
        <div className=" d-flex flex-column ">
          <h2 className="text-uppercase">Categories</h2>
          <div>
            <h4 className="bg-dark text-light">Apple</h4>
          </div>
          <span onClick={() => setProducts(data)}>All</span>
          <div>
            <p className={style.categorie_titile}>Iphone & Mac</p>
          </div>
          <span onClick={() => filterProducts("iphone")}>Iphone</span>
          <span onClick={() => filterProducts("ipad")}>Ipad</span>
          <span onClick={() => filterProducts("macbook")}>Macbook</span>
          <div>
            <p className={style.categorie_titile}>Wireless</p>
          </div>
          <span onClick={() => filterProducts("airpod")}>Airpod</span>
          <span onClick={() => filterProducts("watch")}>Watch</span>
          <div>
            <p className={style.categorie_titile}>Other</p>
          </div>
          <span onClick={() => filterProducts("mouse")}>Mouse</span>
          <span onClick={() => filterProducts("keyboard")}>Keyboard</span>
          <span onClick={() => filterProducts("other")}>Other</span>
        </div>
        <div className={style.productList}>
          <div className={style.inputCart}>
            <input type="text" placeholder="Enter Search Here!" />
            <select>
              <option>Default setting</option>
            </select>
          </div>
          <div className={style.productList__items}>
            {products?.map((item) => (
              <ProductCard key={item._id} item={item} />
            ))}
          </div>
          <div className={style.btn__page}>
            <button>
              <GrPrevious />
            </button>

            <span>1</span>
            <button>
              <GrNext />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductList;
