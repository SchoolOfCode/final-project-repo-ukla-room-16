import React from "react";

import styles from "../../../styles/Events.module.css";

function Button({ onClick, children, /*  hoverColor = "slategray" */ type }) {
  switch (type) {
    case "delete":
      return (
        <button
          className={`${styles.button} ${styles.delete}`}
          onClick={onClick}
          /*   style={{
            "--hover-color": hoverColor
          }} */
        >
          Delete List
        </button>
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
