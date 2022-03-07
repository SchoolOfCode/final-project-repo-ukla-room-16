import styles from "../../styles/NavBar.module.css";
import recipe from "../../images/recipe.png";
import tracker from "../../images/tracker.png";
import gallery from "../../images/gallery.png";
import calendar from "../../images/calendar.png";
import contacts from "../../images/contacts.png";
import Image from "next/image";
import {motion} from 'framer-motion';

function NavBar() {
    
  
    return (
   <div className={styles.navbar}>
   <motion.div  whileHover={{scale:1.1, }}className={styles.iconcircle}>
     <Image src={recipe} width="50%" height="50%" />
   </motion.div>
   <div className={styles.iconcircle}>
     <Image src={contacts} width="50%" height="50%" />
   </div>
   <div className={styles.iconcircle}>
     <Image src={gallery} width="50%" height="50%" />
   </div>
   <div className={styles.iconcircle}>
     <Image src={calendar} width="50%" height="50%"  />
   </div>
   <div className={styles.iconcircle}>
     <Image src={tracker} width="50%" height="50%"  />
   </div>
 </div>
    );
}

export default NavBar;