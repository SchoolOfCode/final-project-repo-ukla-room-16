import React from "react";

import ListItem from "../ListItem";
import styles from "../../../styles/Events.module.css"
// list component (List)
// takes in list as prop
// maps over each item and makes an li
function List({ list, toggleCompleted, startDate}) {
  return (
    <ul className={styles.list}>
      {list.map((item,index) => (
        <ListItem
        startDate={startDate}
          text={item.event_text}
          completed={item.completed}
          toggleCompleted={() => toggleCompleted(index)}
          key={item.id}
          user={item.picture}
        />
      ))}
    </ul>
  );
}
export default List;
