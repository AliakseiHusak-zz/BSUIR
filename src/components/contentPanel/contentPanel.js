import React from "react";
import LeftBar from "../leftBar/leftBar";
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
    <div className="contentPanel_rightSide">right</div>
  </div>
);

export default ContentPanel;
