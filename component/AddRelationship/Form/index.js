import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../../../styles/CreateTree.module.css";

function Form({ display, setDisplay, onClose, familyID }) {
  const URL = process.env.NEXT_PUBLIC_URL;

  const [isBrowser, setIsBrowser] = useState(false);
  const [family, setFamily] = useState([]);
  const [personA, setPersonA] = useState("");
  const [personB, setPersonB] = useState("");
  const [relationship, setRelationship] = useState("");

  //when you click the submit button, close the modal and make the input empty
  function handleSubmit(event) {
    event.preventDefault();
    setDisplay(false);
  }

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  useEffect(() => {
    let familyID = 1;
    async function fetchusers() {
      const res = await fetch(`${URL}/users?familyID=${familyID}`, {
        method: "GET",
      });
      const data = await res.json();
      setFamily(data.payload);
    }
    fetchusers();
  }, []);

  async function onSubmit() {
    console.log("submit is running")
    if (relationship === "parent 1") {
      async function fetchfamilies() {
        try{
        const res = await fetch(`${URL}/users/${personB}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fid: Number(personA),
          }),
        });
      } catch (error) {
        throw new Error(error);
      }
        // const data = await res.json();
        // let partnerID = data.payload[0].mid;
        // console.log("HARRY", data);
        // const partnerres = await fetch(`${URL}/users/${personA}`, {
        //   method: "PUT",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({
        //     pids: partnerID,
        //   }),
        // });
      }

      fetchfamilies();
    }
    if (relationship === "parent 2") {
      async function fetchfamilies() {
        try {
        const res = await fetch(`${URL}/users/${personB}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mid: Number(personA),
          }),
        });
        const data = await res.json();
      } catch (error) {
        throw new Error(error);
      }
        // console.log(data)
        // let partnerID = data.payload[0].fid
        // console.log("partner ID", partnerID)
        // console.log("HARRY", data);
        // const partnerres = await fetch(`${URL}/users/${personA}`, {
        //   method: "PUT",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({
        //     pids: partnerID,
        //   }),
        // });
        // const data = await
      }
      fetchfamilies();
    } else if (relationship === "child") {
      async function fetchfamilies() {
        try {
          const res = await fetch(`${URL}/users/${personA}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              mid: Number(personB),
            }),
          });

        } catch (error) {
          throw new Error(error);
        }
      }
      fetchfamilies();
    } else {
      console.log("something is going wrong");
    }
  }

  function handleChangeA(e) {
    setPersonA(Number(e.target.value));
  }
  function handleChangeB(e) {
    setPersonB(Number(e.target.value));
  }
  function handleChangeRelationship(e) {
    setRelationship(e.target.value);
  }
  const modalContent = display ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <a href="#" onClick={handleCloseClick} className={styles.x}>
            x
          </a>
        </div>
        <div className={styles.body}>
          {
            <form onSubmit={handleSubmit} className={styles.form}>
              <label for="personA">Choose Person A</label>
              <select name="person A" id="personA" onChange={handleChangeA}>
                <option value="default">Default</option>
                {family.map((person) => {
                  return (
                    <option key={person.id} value={person.id}>
                      {person.full_name}
                    </option>
                  );
                })}
              </select>
              <label for="personB">Choose Person B</label>
              <select name="person B" id="personB" onChange={handleChangeB}>
                <option value="default">Default</option>
                {family.map((person) => {
                  return (
                    <option key={person.id} value={person.id}>
                      {person.full_name}
                    </option>
                  );
                })}
              </select>
              <label for="relationship">
                Person A's relationship to Person B
              </label>
              <select
                name="relationshiop"
                id="relationship"
                onChange={handleChangeRelationship}
              >
                <option value="default">Default</option>
                <option value="parent 1">Parent 1</option>
                <option value="parent 2">Parent 2</option>
                <option value="child">Child</option>
              </select>
              <button onClick={() => onSubmit()} className={styles.submit}>
                Submit
              </button>
            </form>
          }
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

export default Form;
