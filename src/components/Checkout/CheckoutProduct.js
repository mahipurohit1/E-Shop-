import React from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../Store/CartSlice";
import Styles from "./CheckoutProduct.module.css";
function CheckoutProduct(props) {
  const dispatch = useDispatch();
  const removeItemHandler = () => {
    dispatch(removeItemFromCart(props.id));
  };
  return (
    <div className={Styles["checkoutProduct"]}>
      <div className={Styles["product_img"]}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className="product_description">
        <h3>{props.title}</h3>
        <p className={Styles["price"]}> $ {props.price}</p>
        <p className={Styles["rating"]}>{Array(props.rating).fill("⭐")}</p>
        <button className={Styles["button"]} onClick={removeItemHandler}>
          Remove item
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
