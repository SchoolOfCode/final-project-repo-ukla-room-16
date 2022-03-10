import { useState } from "react";
import Form from "./Form";
import styles from "../../styles/CreateTree.module.css";

function AddRelationship({familyID}) {
  const [display, setDisplay] = useState(false);


  return (
    <div>
<button onClick={() => setDisplay(true)} className={styles.addrelationshipbutton}>
Add Relationship
</button> 

      <Form onClose={() => setDisplay(false)}
          display={display} setDisplay={setDisplay} familyID={familyID}/>
    </div>
  );
}

export default AddRelationship;
