import React, { useState } from "react";
import styles from "../../../styles/Events.module.css";

function ListItem({ name, completed, toggleCompleted, startDate }) {
  let date = 
  startDate.toString().slice(8, 10) +
  startDate.toString().slice(3, 7) +
  startDate.toString().slice(10, 15)
  return (
    <li
      className={styles.listItem}
      onClick={toggleCompleted}
      style={completed ? { textDecoration: `line-through` } : {}}
    >
        <div className={eventsdisplay}>
      {date}
      <div className={styles.name}>
      {name}
      </div>
      </div>
    </li>
  );
}

export default ListItem;
