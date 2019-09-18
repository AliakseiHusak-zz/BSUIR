import React from "react";

export const getNewsItems = () => (
  <ul>
    {newsItems.map(({ date, name, link }) => (
      <li>
        <span style={{ marginRight: " 0.5rem" }}>{date}</span>
        <a href={link}>{name}</a>
      </li>
    ))}
  </ul>
);

const newsItems = [
  {
    date: "28 января 2008",
    name: "Новые поступления деталей...",
    link: "Новые_поступления_деталей"
  },
  {
    date: "29 января 2008",
    name: "Специальное предложение!",
    link: "Специальное_предложение"
  },
  {
    date: "30 января 2008",
    name: "Приглашаем к сотрудничеству",
    link: "Приглашаем_к_сотрудничеству"
  }
];
