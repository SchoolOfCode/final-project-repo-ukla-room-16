import React, { useState, useEffect } from "react";
import styles from "../../../styles/Events.module.css";

function ListItem({ text, completed, toggleCompleted, startDate, user}) {

  let date =
    startDate.toString().slice(8, 10) +
    startDate.toString().slice(3, 7) +
    startDate.toString().slice(10, 15);

  return (
    <li
      className={styles.listItem}
      onClick={toggleCompleted}
      style={completed ? { textDecoration: `line-through` } : {}}
    >
      <div className={styles.eventsdisplay}>
        {date}
        <div className={styles.name}>{text}</div>
      </div>
      <p>By:</p>
      <img src={user}></img>
    </li>
  );
}

export default ListItem;
