import React, { useState } from "react";
import styles from "../../styles/Events.module.css";

import List from "./List";
import Input from "./Input";
import Button from "./Button";
import EventDate from "./Date";

function Events() {
  const [list, setList] = useState([]);
  const [startDate, setStartDate] = useState(new Date())

  function addToList(newItem) {
    setList([...list, { name: newItem, completed: false }]);
  }

  function toggleCompleted(i) {
    const newList = [
      ...list.slice(0, i),
      {
        ...list[i],
        completed: !list[i].completed,
      },
      ...list.slice(i + 1),
    ];

    setList(newList);
  }

  function clearList() {
    console.log("clearlist is running");
    const newList = list.filter((x) => {
      return x.completed === false;
    });
    setList(newList);
  }

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <h1>Events</h1>
        <EventDate
          class={{ height: "8px" }}
          startDate={startDate}
          setStartDate={setStartDate}
        />
        <Input addToList={addToList} startDate={startDate}></Input>
        <List list={list} toggleCompleted={toggleCompleted} startDate={startDate}></List>
        <Button onClick={clearList} type="delete" hoverColor="red"></Button>
      </div>
    </div>
  );
}

export default Events;
