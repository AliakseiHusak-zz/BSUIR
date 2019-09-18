import React from "react";
import LeftBar from "../leftBar/leftBar";
import Content from "../content/content";
import NewsPanel from "../newsPanel/newsPanel";
import Background from "../../img/tyres_005.jpg";
import "./contentPanel.css";

const ContentPanel = () => (
  <div className="contentPanel">
    <div
      className="contentPanel__leftSide"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <LeftBar />
    </div>
    <div className="contentPanel_rightSide">
      <Content />
      <NewsPanel />
      <div className="contentPanel_footNote">
        <p>© 2007-2008, Название фирмы.</p>
        <p>Тел. 111-22-33, адрес: ул. Имени-кого-то, дом.999 </p>
      </div>
    </div>
  </div>
);

export default ContentPanel;
