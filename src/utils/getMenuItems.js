import React from "react";

export const getMenuItems = menuItems => {
  return menuItems.map(({ name, subItems }) => {
    if (!subItems || !subItems.length)
      return (
        <li style={{ listStyle: "none" }}>
          <a href={name}>{name}</a>
        </li>
      );
    if (subItems)
      if (subItems.length)
        return (
          <li style={{ listStyle: "none" }}>
            <a href={name}>{name}</a>
            <ul>{getMenuItems(subItems)}</ul>
          </li>
        );
  });
};

export const menuItems = [
  {
    name: "Продукция",
    subItems: [
      {
        name: "Шины",
        subItems: [
          { name: "Грузовые" },
          { name: "легковые" },
          { name: "С/Х техника" }
        ]
      },
      { name: "АКБ", subItems: [] },
      { name: "Автозапчасти", subItems: [] }
    ]
  },
  { name: "Новости" },
  { name: "Контакты" }
];
