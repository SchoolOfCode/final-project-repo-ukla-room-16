import { useState } from "react";
import FamilyForm from "./JoinFamilyForm";
import styles from "../../styles/JoinTree.module.css";

function JoinTree({ email }) {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <button onClick={() => setDisplay(true)} className={styles.button}>Join A Tree</button>
      <FamilyForm
        onClose={() => setDisplay(false)}
        display={display}
        setDisplay={setDisplay}
        email={email}
      />
    </div>
  );
}

export default JoinTree;
