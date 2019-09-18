import React from "react";
import ban_1 from "../../img/1.bmp";
import ban_2 from "../../img/2.gif";
import ban_3 from "../../img/3.bmp";
import "./footer.css";

const Footer = () => (
  <div className="footer">
    <img alt="baner - 1" src={ban_1} />
    <img alt="baner - 2" src={ban_2} />
    <img alt="baner - 3" src={ban_3} />
  </div>
);

export default Footer;
