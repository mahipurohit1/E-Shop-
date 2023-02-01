import React from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "../Store/CartSlice";
import Styles from "./CheckoutTotal.module.css";
function CheckoutTotal(props) {
  const dispatch = useDispatch();
  const orderHandler = () => {
    const order = window.confirm("confirm your order ? ");
    if (order) {
      dispatch(resetCart());
    }
  };
  return (
    <div className={Styles["checkout-total"]}>
      <p>
        SubTotal (item : {props.item}) :{" "}
        <span>${props.totalPrice.toFixed(2)}</span>
      </p>
      <p>
        <input type="checkbox" name="" id="" /> this items contain gifts{" "}
      </p>
      <button className={Styles["button"]} onClick={orderHandler}>
        order
      </button>
    </div>
  );
}

export default CheckoutTotal;
