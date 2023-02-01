import React from "react";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  removeFullItemFromCart,
} from "../Store/CartSlice";
import Styles from "./CheckoutProduct.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
function CheckoutProduct(props) {
  const quantityIncHandler = () => {
    dispatch(addItemToCart(props));
  };
  const quantityDecHandler = () => {
    dispatch(removeItemFromCart(props.id));
  };
  const dispatch = useDispatch();
  const removeItemHandler = () => {
    dispatch(removeFullItemFromCart(props.id));
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
        <div className={Styles["quantity-button"]}>
          <span
            className={Styles["quantity-button-icon"]}
            onClick={quantityIncHandler}
          >
            <AddIcon />
          </span>
          <span className={Styles["quantity-button-value"]}>
            {props.quantity}
          </span>
          <span
            className={Styles["quantity-button-icon"]}
            onClick={quantityDecHandler}
          >
            <RemoveIcon />{" "}
          </span>
        </div>
        <button className={Styles["button"]} onClick={removeItemHandler}>
          Remove item
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
