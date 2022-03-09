import React from "react";

import ListItem from "../ListItem";
import styles from "../../../styles/Events.module.css"
// list component (List)
// takes in list as prop
// maps over each item and makes an li
function List({ list, toggleCompleted, startDate}) {
  return (
    <ul className={styles.list}>
      {list.map((item, i) => (
        <ListItem
        startDate={startDate}
          name={item.name}
          completed={item.completed}
          toggleCompleted={() => toggleCompleted(i)}
          key={`${item}${i}`}
        />
      ))}
    </ul>
  );
}
export default List;
