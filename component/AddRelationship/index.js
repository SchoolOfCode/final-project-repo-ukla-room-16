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

<<<<<<< HEAD
export default AddRelationship;
=======
export default AddRelationship;
>>>>>>> 1a22040b117b232637b40dd678584fe1f7729839
