import React from "react";
import "./newsPanel.css";
import { getNewsItems } from "../../utils/getNewsItems";

const NewsPanel = () => (
  <div className="newsPanel">
    <div>
      <p className="newsPanel__heading">Новости</p>
      {getNewsItems()}
    </div>
  </div>
);

export default NewsPanel;
