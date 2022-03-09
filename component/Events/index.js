import React, { useState, useEffect } from "react";
import styles from "../../styles/Events.module.css";

import List from "./List";
import Input from "./Input";
import Button from "./Button";
import EventDate from "./Date";

function Events({ person }) {
  const [list, setList] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const URL = process.env.NEXT_PUBLIC_URL;
  let familyID = person.family_id;
  console.log("person", person)

  useEffect(() => {
    async function getEvents(familyID) {
      //FETCHING THE Events
      const res = await fetch(`${URL}/events?familyID=${familyID}`);
      const data = await res.json();
      console.log(data);
      setList(data.payload);
    }

    if (familyID) {
      getEvents(familyID);
    }
    console.log("useeffect is running")
  }, [familyID]);

  async function addToList(newItem) {
    setList([...list, { name: newItem, completed: false }]);

    const postObj = {
      family_id: person.family_id,
      user_id: person.id,
      user_name: person.full_name ? person.full_name : person.full_name,
      event_text: newItem,
      date: `${startDate}`
    };

    try {
      const res = await fetch(`${URL}/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postObj),
      });
      const data = await res.json();

      //NEW POST BEING ADDED TO THE ARRAY OF FEEDS USING SPREAD OPERATOR
      const newList = [data.payload[0], ...list];
      setList(newList);
    } catch (error) {
      // throw new Error(error);
    }
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

  console.log("list", list)
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <h1>Events</h1>
        <div className={styles.inputs}>
        <EventDate
          class={{ height: "8px" }}
          startDate={startDate}
          setStartDate={setStartDate}
        />
        <Input addToList={addToList} startDate={startDate}></Input>
        </div>
        <List
          list={list}
          toggleCompleted={toggleCompleted}
          startDate={startDate}
        ></List>
        <Button onClick={clearList} type="delete" hoverColor="red"></Button>
      </div>
    </div>
  );
}

export default Events;
