import React from "react";
import Styles from "./CheckoutProduct.module.css";
function CheckoutProduct() {
  return (
    <div className={Styles["checkoutProduct"]}>
      <div className={Styles["product_img"]}>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
          alt="beg"
        />
      </div>
      <div className="product_description">
        <h3>
          Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag,
          Water Repellent Fabric for Men and Women (Blue)
        </h3>
        <p className={Styles["price"]}> $ 200</p>
        <p className={Styles["rating"]}>⭐</p>
        <button className={Styles["button"]}>Remove item</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
