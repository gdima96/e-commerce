import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuItems = [
    // { name: "Shop", path: "/" },
    { name: "Men", path: "/men" },
    { name: "Women", path: "/women" },
    { name: "Kids", path: "/kids" },
  ];

  return (
    <div className="Navbar">
      <div
        onClick={() => {
          window.location.replace("/");
        }}
        className="nav-logo"
      >
        <img src={logo} alt="Shopper Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        {menuItems.map(({ name, path }) => (
          <li key={name} onClick={() => setMenu(name.toLowerCase())}>
            <Link style={{ textDecoration: "none" }} to={path}>
              {name}
            </Link>
            {menu === name.toLowerCase() && <hr />}
          </li>
        ))}
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="Cart Icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
