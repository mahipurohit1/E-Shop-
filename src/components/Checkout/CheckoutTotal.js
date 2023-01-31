import React from "react";
import Styles from "./CheckoutTotal.module.css";
function CheckoutTotal() {
  return (
    <div className={Styles["checkout-total"]}>
      <p>
        SubTotal (item : 0) : <span>$0</span>{" "}
      </p>
      <p>
        <input type="checkbox" name="" id="" /> this items contain gifts{" "}
      </p>
      <button className={Styles["button"]}>order</button>
    </div>
  );
}

export default CheckoutTotal;
