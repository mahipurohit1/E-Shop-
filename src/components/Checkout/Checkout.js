import React from "react";
import { useSelector } from "react-redux";
import Styles from "./Checkout.module.css";
import CheckoutProduct from "./CheckoutProduct";
import CheckoutTotal from "./CheckoutTotal";
function Checkout() {
  const cart = useSelector((state) => state.cart);
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
            <ul>
              {cart.cartItems.map((item) => {
                return (
                  <li key={item.id}>
                    {" "}
                    <CheckoutProduct
                      title={item.title}
                      image={item.image}
                      id={item.id}
                      price={item.price}
                      rating={item.rating}
                      quantity={item.quantity}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={Styles["checkout-items-price"]}>
            <CheckoutTotal
              item={cart.totalQuantity}
              totalPrice={cart.totalPrice}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
