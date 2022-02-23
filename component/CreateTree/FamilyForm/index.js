import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../../../styles/CreateTree.module.css"

function FamilyForm({ display, setDisplay, onClose }) {

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
              <button>Submit</button>
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
