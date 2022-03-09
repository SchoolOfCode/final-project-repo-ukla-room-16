import { useState } from "react";
import DeleteForm from "./DeleteForm";
import Image from "next/image";
import bin from "../../images/bin.png";
import styles from "../../styles/updateUserProfile.module.css"
import {motion} from "framer-motion"
function DeleteUser({ router }) {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <motion.div
      whileHover={{scale: 1.1}}
      className={styles.deleteProfileBtn}
        onClick={() => setDisplay(true)}
      >
        Delete Profile
     {/*  <Image src={bin} width="50vw" height="50vh" /> */}
      </motion.div>
      <DeleteForm
        onClose={() => setDisplay(false)}
        display={display}
        setDisplay={setDisplay}
        router={router}
      />
    </div>
  );
}

export default DeleteUser;
