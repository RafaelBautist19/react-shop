import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import Menu from "@components/Menu";
import MyOrder from "@containers/MyOrder";
import AppContext from "../context/AppContext";
import menu from "@icons/icon_menu.svg";
import logoYardSale from "@logos/logo_yard_sale.svg";
import iconShoppingCart from "@icons/icon_shopping_cart.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const {
    state: { cart },
  } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logoYardSale} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={iconShoppingCart} alt="shopping cart" />
            {cart.length > 0 && (
              <div>{cart.length > 9 ? "+9" : cart.length}</div>
            )}
          </li>
        </ul>
      </div>
      {toggle ? <Menu /> : null}
      {toggleOrders ? <MyOrder /> : null}
    </nav>
  );
};

export default Header;
