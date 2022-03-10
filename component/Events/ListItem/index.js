import React, { useState, useEffect } from "react";
import styles from "../../../styles/Events.module.css";

function ListItem({ text, completed, toggleCompleted, startDate, user}) {

  let date;
    if(String(startDate).length>10===true) {
      date =
      startDate.toString().slice(8, 10) +
      startDate.toString().slice(3, 7) +
      startDate.toString().slice(10, 15);
    } else {
      date = startDate
    }

  return (
    <li
      className={styles.listItem}
      onClick={toggleCompleted}
      style={completed===true ? { textDecoration: `line-through` } : {textDecoration: `` }}
    >
      <div className={styles.eventsdisplay}></div>
        {date}
      
   
        <div className={styles.name}>{text}</div>
      <div className={styles.eventAuthor}>
      <p style={{marginRight:"15px"}}>By:</p>
      <img src={user} className={styles.image}></img>
      </div>
      <br />
    </li>
  );
}

export default ListItem;
