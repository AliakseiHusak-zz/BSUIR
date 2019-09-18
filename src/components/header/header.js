import React from "react";
import logo from "../../img/logo.jpg";
import "./header.css";

const Header = () => (
  <header className="header">
    <img alt="logo" src={logo} className="header__logo" />
    <div className="header__links">
      <a href="#/">сделать стартовой</a>/<a href="#/1">в избранное</a>
    </div>
  </header>
);

export default Header;
