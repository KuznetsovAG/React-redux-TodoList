import React from "react";

const Footer = ({ filterDoneTodo, all, inactive }) => {
  return (
    <div>
      <button onClick={() => all("all")}>Все задачи</button>
      <button onClick={() => inactive("inactive")}>Завершенные</button>
      <button onClick={() => filterDoneTodo("active")}>Активные</button>
    </div>
  );
};

export default Footer;
