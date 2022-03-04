import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../../../styles/CreateTree.module.css"

function DeleteForm({ display, setDisplay, onClose, router}) {
  const URL = process.env.NEXT_PUBLIC_URL;

  const [isBrowser, setIsBrowser] = useState(false);

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

  //WHEN YOU CLICK THE SUBMIT BUTTON, DELETE THE USER
  async function onSubmit() {
    async function deleteUser() {
        const response = await fetch(`${URL}/users/${router.query.id}`, {
          method: "DELETE",
        });
        router.push(`/api/auth/logout`)
      }
   deleteUser();
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
                Are you sure you wish to delete your account?
              <button onClick={() => onSubmit()} className={styles.submit}>Yes</button>
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

export default DeleteForm;
