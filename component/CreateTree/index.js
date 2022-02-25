import { useState } from "react";
import FamilyForm from "./FamilyForm";
import styles from "../../styles/CreateTree.module.css"

function CreateTree() {
  const [display, setDisplay] = useState(false);


  return (
    <div>
      <button onClick={() => setDisplay(true)} className={styles.createtreebutton}>Create A Tree</button>
      <FamilyForm onClose={() => setDisplay(false)}
          display={display} setDisplay={setDisplay}/>
    </div>
  );
}

export default CreateTree;
