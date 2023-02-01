import React from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Style from "./Header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className={Style.header}>
      <div className={Style["header__logo"]}>
        <Link to={"/"}>
          <StorefrontIcon fontSize="large"></StorefrontIcon>
        </Link>
        <Link to={"/"}>
          <h2>E-Shop</h2>
        </Link>
      </div>
      <div className={Style["header__search"]}>
        <input type="text" />
        <SearchIcon
          fontSize="large"
          className={Style["header__search__icon"]}
        />
      </div>
      <div className={Style["header__nav"]}>
        <div className={Style["header__nav_item"]}>
          <span className={Style["header__nav_item_sec_span"]}>
            hello guest
          </span>
          <strong>sign up</strong>
        </div>
        <div className={Style["header__nav_item"]}>
          <span className={Style["header__nav_item_sec_span"]}> your </span>
          <strong> shop </strong>
        </div>
        <div className={Style["basket"]}>
          <Link to={"/checkout"}>
            {" "}
            <ShoppingCartIcon fontSize="large"></ShoppingCartIcon>{" "}
          </Link>
          <span className={Style["header__nav_item_counter"]}>
            {cart.totalQuantity}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
