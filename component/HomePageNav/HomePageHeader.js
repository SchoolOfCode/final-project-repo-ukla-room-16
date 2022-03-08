import Image from "next/image";

import styles from "../../styles/Header.module.css";
import logo from "../../images/Familia9.png";
import HomePageNav from "./HomePageNav";

export default function HomePagesHeader (){
 
    return (
    
    <header className={styles.header}>
      <Image src={logo} width="150" height="150" />
      <HomePageNav />
      
    </header>
  );
}