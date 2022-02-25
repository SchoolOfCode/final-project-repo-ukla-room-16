import { useState } from "react";
import FamilyForm from "./CreateFamilyForm";
import styles from "../../styles/CreateTree.module.css"

function CreateTree({email}) {
  const [display, setDisplay] = useState(false);


  return (
    <div>
      <button onClick={() => setDisplay(true)} className={styles.createtreebutton}>Create A Tree</button>
      <FamilyForm onClose={() => setDisplay(false)}
          display={display} setDisplay={setDisplay} email={email}/>
    </div>
  );
}

export default CreateTree;
