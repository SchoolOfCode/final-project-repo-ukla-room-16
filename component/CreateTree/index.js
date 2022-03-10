import { useState } from "react";
import FamilyForm from "./CreateFamilyForm";
import styles from "../../styles/CreateTree.module.css"
import {motion} from 'framer-motion'
function CreateTree({email, setHasFamilyID}) {
  const [display, setDisplay] = useState(false);


  return (
    <div>
      <motion.button whileHover={{ scale: 1.1 }}onClick={() => setDisplay(true)} className={styles.createtreebutton}>Create A Tree</motion.button>
      <FamilyForm onClose={() => setDisplay(false)}
          display={display} setDisplay={setDisplay} email={email} setHasFamilyID={setHasFamilyID}/>
    </div>
  );
}

export default CreateTree;
