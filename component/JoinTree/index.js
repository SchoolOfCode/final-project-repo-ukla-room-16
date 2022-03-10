import { useState } from "react";
import FamilyForm from "./JoinFamilyForm";
import styles from "../../styles/JoinTree.module.css";
import {motion} from 'framer-motion'
function JoinTree({ email, setHasFamilyID }) {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <motion.button whileHover={{scale: 1.1}} onClick={() => setDisplay(true)} className={styles.jointreebutton}>Join A Tree</motion.button>
      <FamilyForm
        onClose={() => setDisplay(false)}
        display={display}
        setDisplay={setDisplay}
        email={email}
        setHasFamilyID={setHasFamilyID}
      />
    </div>
  );
}

export default JoinTree;
