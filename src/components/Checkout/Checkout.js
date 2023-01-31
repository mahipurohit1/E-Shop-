import React from "react";
import Styles from "./Checkout.module.css";
import CheckoutProduct from "./CheckoutProduct";
import CheckoutTotal from "./CheckoutTotal";
function Checkout() {
  return (
    <>
      <div className={Styles["checkout"]}>
        <div className={Styles["checkout-heading"]}>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />

          <h2> Your Shopping Cart </h2>
        </div>
        <div className={Styles["checkout-items-container"]}>
          <div className={Styles["checkout-items"]}>
            <CheckoutProduct />
            <CheckoutProduct />
          </div>
          <div className={Styles["checkout-items-price"]}>
            <CheckoutTotal />
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
