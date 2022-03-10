import React from "react";

import styles from "../../../styles/Events.module.css";

function Button({ onClickDelete,onClickDeleteAll, children, /*  hoverColor = "slategray" */ type }) {
  switch (type) {
    case "delete":
      return (
        <div className={styles.allbuttons}>
          <button
            className={`${styles.button} ${styles.delete}`}
            onClick={onClickDelete}
            /*   style={{
            "--hover-color": hoverColor
          }} */
          >
            Clear Completed Events
          </button>
          <button
            className={`${styles.button} ${styles.delete}`}
            onClick={onClickDeleteAll}
            /*   style={{
                  "--hover-color": hoverColor
                }} */
          >
            Clear All Events
          </button>
        </div>
      );
    default:
      return (
        <button
          className={`${styles.button} ${styles.delete}`}
          onClick={onClick}
          /*   style={{
            "--hover-color": hoverColor
          }} */
        >
          {children}
        </button>
      );
  }
}

export default Button;
