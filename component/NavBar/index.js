import styles from "../../styles/NavBar.module.css";
import recipe from "../../images/recipe.png";
import tracker from "../../images/tracker.png";
import gallery from "../../images/gallery.png";
import calendar from "../../images/calendar.png";
import contacts from "../../images/contacts.png";
import Image from "next/image";

function NavBar() {
    
  
    return (
   <div className={styles.navbar}>
   <div className={styles.iconcircle}>
     <Image src={recipe} width="100%" height="100px" />
   </div>
   <div className={styles.iconcircle}>
     <Image src={contacts} width="100%" height="100px" />
   </div>
   <div className={styles.iconcircle}>
     <Image src={gallery} width="100%" height="100px" />
   </div>
   <div className={styles.iconcircle}>
     <Image src={calendar} width="100%" height="100px" />
   </div>
   <div className={styles.iconcircle}>
     <Image src={tracker} width="100%" height="100px" />
   </div>
 </div>
    );
}

export default NavBar;