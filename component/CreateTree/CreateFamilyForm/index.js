import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../../../styles/CreateTree.module.css";

function FamilyForm({ display, setDisplay, onClose, email, setHasFamilyID }) {
  const URL = process.env.NEXT_PUBLIC_URL;

  const [text, setText] = useState("");
  const [isBrowser, setIsBrowser] = useState(false);

  //handle change of text
  function handleChange(e) {
    setText(e.target.value);
  }

  //when you click the submit button, close the modal and make the input empty
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

  //WHEN YOU CLICK THE SUBMIT BUTTON, THIS FUNCTION TAKES PLACE. IT TAKES IN THE TEXT ENTERED BY THE USER AS ITS PARAMETER
  async function onSubmit(familyName) {
    //POSTING TO NEW FAMILY TO FAMILIES TABLE FROM LINES 36-65
    const familyPostObj = {
      name: familyName,
    };

    //FETCHING THE FAMILIES TABLE
    const familyRes = await fetch(`${URL}/families`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const familyData = await familyRes.json();

    //CHECKING IF THAT FAMILY EXISTS
    const indexOfFamily = familyData.payload.findIndex((family) => {
      return family.name === familyPostObj.name;
    });

    //IF THAT FAMILY DOES NOT EXIST, ADD THEM TO THE FAMILIES TABLE
    if (indexOfFamily === -1) {
      async function postFamilies() {
        const familyPostRes = await fetch(`${URL}/families`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(familyPostObj),
        });
        const familyPostData = await familyPostRes.json();
      }
      postFamilies();
    }

    //FIND THE USER ID OF THE PERSON TRYING TO ADD TO THEIR FAMILY TABLE

    //FETCHING THE USERS TABLE
    const userRes = await fetch(`${URL}/users`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const userData = await userRes.json();

    //FINDING ID OF THE USER - WE USE EMAIL TO FIND THE PERSON AS THAT DOESN'T CHANGE
    const index = userData.payload.findIndex((person) => {
      return person.email === email;
    });
    const userId = userData.payload[index].id;

    //A FUNCTION TO CHANGE THE FAMILY_ID IN THE USERS TABLES
    async function passingFamilyIdOnSubmit(familyName) {

      //FETCH FROM FAMILIES AGAIN WITH THE NEW POSTED FAMILY NAME
      const familyRes = await fetch(`${URL}/families`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const familyData = await familyRes.json();

      //FINDING THE FAMILY THAT MATCHES THE NAME THE USER GAVE
      const indexOfFamilyName = familyData.payload.findIndex((family) => {
        return family.name === familyName;
      });
      const idOfFamilyName = familyData.payload[indexOfFamilyName].id;
      console.log(idOfFamilyName)

      //NOW THAT WE HAVE THE USER ID, AND THE FAMILY ID, WE NEED TO PUT THIS INFORMATION IN THE USERS TABLE. REMEMBER FOR UPDATING USERS IN THE USERS TABLE, WE DO UPDATE USERS BY ID.
      async function putFamilyIdToUser() {
        const putUserRes = await fetch(`${URL}/users/${userId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            family_id: idOfFamilyName,
          }),
        });

        const putUserData = await putUserRes.json();
        if(putUserData) {
          setHasFamilyID(true)
        }
      }

      putFamilyIdToUser();
    }

    //RUNNING THE FUNCTION WITH THE FAMILY NAME
    passingFamilyIdOnSubmit(familyName);
  }

  function handleChange(e) {
    setText(e.target.value);
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
              <input
                placeholder="Enter your family name"
                onChange={handleChange}
                value={text}
                required
                className={styles.input}
              />
              <button onClick={() => onSubmit(text)} className={styles.submit}>Submit</button>
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
