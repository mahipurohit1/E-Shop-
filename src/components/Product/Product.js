import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../Store/CartSlice";
import Styles from "./Product.module.css";
function Product(props) {
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(addItemToCart(props));
  };
  return (
    <div className={Styles["product"]}>
      <div className={Styles["product_img"]}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className="product_description">
        <h3>{props.title}</h3>
        <p className={Styles["price"]}> $ {props.price}</p>
        <p className={Styles["rating"]}>{Array(props.rating).fill("⭐")}</p>
      </div>

      <button className={Styles["button"]} onClick={addItemHandler}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
