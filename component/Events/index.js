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
  console.log("person", person);

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
    console.log("useeffect is running");
  }, [familyID]);

  async function addToList(newItem) {
    const postObj = {
      family_id: person.family_id,
      user_id: person.id,
      user_name: person.full_name ? person.full_name : person.full_name,
      event_text: newItem,
      date: `${startDate}`,
      completed: false,
      picture: person.picture,
    };

    console.log(postObj);
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
      throw new Error(error);
    }
  }

  async function toggleCompleted(id) {
    let index = list.findIndex(l => id === l.id);
    let boolean = list[index].completed
    if(boolean === false) {
      try {
        const index = list.findIndex(l => id === l.id);
        console.log("index", index)
        const opposite = !list[index].completed
        console.log(opposite)
        console.log("opposite", !opposite)
        const res = await fetch(`${URL}/events/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ completed: true }),
        });
        const data = await res.json();
        const newList = [
          ...list.slice(0, index),
          data.payload[0],
          ...list.slice(index + 1),
        ];
        setList(newList);
      } catch (error) {
        //NEW POST BEING ADDED TO THE ARRAY OF FEEDS USING SPREAD OPERATOR
        throw new Error(error);
      }
    } 
  }

  function clearList() {
    console.log("clearlist is running");
    const newList = list.filter(x => x.completed === true);
    setList(newList);
  }

  console.log("list", list);
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <h1 className={styles.h1Title}>Events</h1>
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
        <Button  onClick={clearList} type="delete" /* hoverColor="red" */></Button>
      </div>
    </div>
  );
}

export default Events;
