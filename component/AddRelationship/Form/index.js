import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../../../styles/CreateTree.module.css";

function Form({ display, setDisplay, onClose, ourData }) {
  const URL = process.env.NEXT_PUBLIC_URL;

  const [isBrowser, setIsBrowser] = useState(false);
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

  async function onSubmit() {
    console.log("submit is running");
    let findPersonB = ourData.find((person) => person.id === personB);
    let findPersonA = ourData.find((person) => person.id === personA);
    console.log(findPersonA);
    console.log(findPersonB);
    console.log(personA);
    console.log(personB);

    if (
      findPersonB === findPersonA ||
      findPersonB.mid === personA ||
      findPersonB.fid === personA ||
      findPersonA.mid === personB ||
      findPersonA.fid === personB ||
      personA === personB
    ) {
      if (
        findPersonA.mid > 0 ||
        findPersonB.mid > 0 ||
        findPersonA.fid > 0 ||
        findPersonB.fid
      ) {
        if (
          findPersonA.mid === findPersonB.mid ||
          findPersonA.fid === findPersonB.fid ||
          findPersonA.mid === findPersonB.fid ||
          findPersonB.mid === findPersonA.fid
        ) {
          alert("try again");
          return;
        }
      }
      alert("try again");
      return;
    }
    if (findPersonB.mid > 0 && findPersonB.fid > 0) {
      console.log("both parents already exist");
      return;
    }
    if (relationship === "parent 1") {
      async function fetchfamilies() {
        //CHECK IF MID OR FID EXIST IN PERSON B.
        //IF MID ALREADY EXISTS
        if (findPersonB.mid !== null || findPersonB.mid > 0) {
          try {
            const personBRes = await fetch(`${URL}/users/${personB}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                fid: Number(personA),
              }),
            });
            const postPidParentA = await fetch(`${URL}/pid`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                person_id: Number(personA),
                partner_id: findPersonB.mid,
              }),
            });
            const postPidParentB = await fetch(`${URL}/pid`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                person_id: findPersonB.mid,
                partner_id: Number(personA),
              }),
            });
          } catch (error) {
            throw new Error(error);
          }
        }
        //if FID ALREADY EXISTS
        else if (findPersonB.fid !== null || findPersonB.fid > 0) {
          try {
            const personBRes = await fetch(`${URL}/users/${personB}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                mid: Number(personA),
              }),
            });
            const postPidParentA = await fetch(`${URL}/pid`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                person_id: Number(personA),
                partner_id: findPersonB.mid,
              }),
            });
            const postPidParentB = await fetch(`${URL}/pid`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                person_id: findPersonB.mid,
                partner_id: Number(personA),
              }),
            });
          } catch (error) {
            throw new Error(error);
          }
        }
        //IF NO EXISTING PARENTS
        else {
          try {
            const personBRes = await fetch(`${URL}/users/${personB}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                fid: Number(personA),
              }),
            });
            const putFIDRes = await fetch(`${URL}/users/${personB}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                fid: 0,
              }),
            });
          } catch (error) {
            throw new Error(error);
          }
        }
      }
      fetchfamilies();
    }
    if (relationship === "parent 2") {
      async function fetchfamilies() {
        //CHECK IF MID OR FID EXIST IN PERSON B.
        let findPersonB = ourData.find((person) => person.id === personB);
        //IF FID ALREADY EXISTS
        if (findPersonB.fid !== null || findPersonB.fid > 0) {
          try {
            const personBRes = await fetch(`${URL}/users/${personB}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                mid: Number(personA),
              }),
            });
            const postPidParentA = await fetch(`${URL}/pid`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                person_id: Number(personA),
                partner_id: findPersonB.fid,
              }),
            });
            const postPidParentB = await fetch(`${URL}/pid`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                person_id: findPersonB.fid,
                partner_id: Number(personA),
              }),
            });
          } catch (error) {
            throw new Error(error);
          }
        }
        //if MID ALREADY EXISTS
        else if (findPersonB.mid !== null || findPersonB.mid > 0) {
          try {
            const personBRes = await fetch(`${URL}/users/${personB}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                fid: Number(personA),
              }),
            });
            const postPidParentA = await fetch(`${URL}/pid`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                person_id: Number(personA),
                partner_id: findPersonB.fid,
              }),
            });
            const postPidParentB = await fetch(`${URL}/pid`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                person_id: findPersonB.fid,
                partner_id: Number(personA),
              }),
            });
          } catch (error) {
            throw new Error(error);
          }
        }
        //IF NO EXISTING PARENTS
        else {
          try {
            const personBRes = await fetch(`${URL}/users/${personB}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                mid: Number(personA),
              }),
            });
            const putFIDRes = await fetch(`${URL}/users/${personB}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                fid: 0,
              }),
            });
          } catch (error) {
            throw new Error(error);
          }
        }
      }
      fetchfamilies();
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
                {ourData.map((person) => {
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
                {ourData.map((person) => {
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
