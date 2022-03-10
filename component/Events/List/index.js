import React from "react";

import ListItem from "../ListItem";
import styles from "../../../styles/Events.module.css";
// list component (List)
// takes in list as prop
// maps over each item and makes an li
function List({ list, toggleCompleted, startDate }) {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <ListItem
          startDate={item.date}
          text={item.event_text}
          completed={item.completed}
          toggleCompleted={() => toggleCompleted(item.id)}
          key={`${item.id}`}
          user={item.picture}
        />
      ))}
    </ul>
  );
}
export default List;
