import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../../../styles/CreateTree.module.css";

function FamilyForm({ display, setDisplay, onClose }) {
  const URL = process.env.NEXT_PUBLIC_URL;

  const [text, setText] = useState("");
  const [isBrowser, setIsBrowser] = useState(false);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setText("");
    setDisplay(false);
  }

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  async function onSubmit(familyName) {
    const postObj = {
      name: familyName,
    };

    //fetching the families table
    const res = await fetch(`${URL}/families`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);

    //CHECKING IF THAT FAMILY EXISTS
    const index = data.payload.findIndex((family) => {
      return family.name === postObj.name;
    });

    //IF THAT FAMILY DOES NOT EXIST, ADD THEM TO THE FAMILIES TABLE
    if (index === -1) {
      async function postFamilies() {
        const res = await fetch(`${URL}/families`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(postObj),
        });
        const data = await res.json();
        console.log(data);
      }
      postFamilies();
    }

    /*     const postObj = {
      name: familyName,
    }; */

    //fetching the families table
    const res = await fetch(`${URL}/users`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);

    //CHECKING IF THAT FAMILY EXISTS
    const index = data.payload.findIndex((family) => {
      return family.name === postObj.name;
    });

    //IF THAT FAMILY DOES NOT EXIST, ADD THEM TO THE FAMILIES TABLE
    if (index === -1) {
      async function postFamilies() {
        const res = await fetch(`${URL}/families`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(postObj),
        });
        const data = await res.json();
        console.log(data);
      }
      postFamilies();
    }

    async function passingFamilyIdOnSubmit(familyName) {
      const postObj = {
        family_id: id,
        //We're getting id info from line 75.
      };

      const res = await fetch(`${URL}/families`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);

      //CHECKING IF THAT USER EXISTS
      const index = data.payload.findIndex((family) => {
        return family.name === familyName;
      });
      const id = data.payload[index].id;
      //IF THAT USER DOES NOT EXIST, ADD THEM TO THE USERS TABLE

      async function putFamilyIdToUser() {
        const res = await fetch(`${URL}/users`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(postObj),
        });
        const data = await res.json();
        console.log(data);
      }
      putFamilyIdToUser();
    }
    passingFamilyIdOnSubmit(familyName);
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  const modalContent = display ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </div>
        <div className={styles.body}>
          {
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Family Name"
                onChange={handleChange}
                value={text}
                required
              />
              <button onClick={() => onSubmit(text)}>Submit</button>
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

export default FamilyForm;
