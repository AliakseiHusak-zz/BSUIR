import React, { useState } from "react";
import { getMenuItems, menuItems } from "../../utils/getMenuItems";
import "./leftBar.css";

const LeftBar = () => {
  const [currentDate, setCurrentDate] = useState();

  const [currentTime, setCurrentTime] = useState();

  setInterval(() => {
    const date = new Date();

    setCurrentDate(
      () => `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    );
    setCurrentTime(
      () => `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    );
  }, 1000);

  return (
    <>
      <div className="leftBar__timePanel">{`Сейчас: ${currentDate} ${currentTime}`}</div>
      <div className="leftBar__menuPanel">
        <ul>{getMenuItems(menuItems)}</ul>
      </div>
      <div className="leftBar__loginPanel">
        <div className="leftBar__loginPanel--left">
          <label htmlFor="login">логин</label>
          <label htmlFor="password">пароль</label>
        </div>
        <div className="leftBar__loginPanel--right">
          <input id="login" />
          <input id="password" type="password" />
          <button>Войти</button>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
