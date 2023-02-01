import React from "react";
import Styles from "./CheckoutTotal.module.css";
function CheckoutTotal(props) {
  return (
    <div className={Styles["checkout-total"]}>
      <p>
        SubTotal (item : {props.item}) : <span>$0</span>{" "}
      </p>
      <p>
        <input type="checkbox" name="" id="" /> this items contain gifts{" "}
      </p>
      <button className={Styles["button"]}>order</button>
    </div>
  );
}

export default CheckoutTotal;
