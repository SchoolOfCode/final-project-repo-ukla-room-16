import { useState } from "react";
import Form from "./Form";
import styles from "../../styles/CreateTree.module.css";

function AddRelationship({ourData}) {
  const [display, setDisplay] = useState(false);


  return (
    <div>
<button onClick={() => setDisplay(true)} className={styles.addrelationshipbutton}>
Add Relationship
</button> 

      <Form onClose={() => setDisplay(false)}
          display={display} setDisplay={setDisplay} ourData={ourData}/>
    </div>
  );
}

export default AddRelationship;
