import styles from "../../styles/NavBar.module.css";

import HomePagesHeader from "./HomePageHeader";

function HomePageNav() {
    
  
    return (
   <div className={styles.navbar}>
   <HomePagesHeader/>
 </div>
    );
}

export default HomePageNav;