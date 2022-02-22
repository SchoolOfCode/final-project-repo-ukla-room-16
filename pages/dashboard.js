import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Dashboard.module.css";
import UserInput from "../component/UserInput";
import Feed from "../component/Feed";
import landingPic from "../images/Familia9.png";
import addIcon from "../images/icons8-add-100.png";
import familytree from "../images/familytree.jpg";
import userProfilePicture from "../images/user-icon.jpeg"


export default function Dashboard() {
  return (
    <div>
      <header className={styles.header}>
     
       <Image src={landingPic} width="150px" height="150px" />
     <p> My family name</p> 
      
       <Image src={userProfilePicture} width="80px" height="80px" />
      
      </header>


      <div className={styles.container}>
      
        <div className={styles.leftcolumn}>
          
        </div>
        <div className={styles.middlecolumn}>
          <UserInput />
          <Feed />
        </div>


        <div className={styles.rightcolumn}>

          <div className={styles.searchcontainer}>
            <input
            type="text"
            className={styles.searchBar}
            placeholder="Search"
          />
          <button  className={styles.searchbutton} >submit</button>
          </div>


          
            <div className={styles.tree}>
            
            <Image src={familytree} />
              
              
            </div>

            <div className={styles.events}>
            <button><Image src={addIcon} width="30px" height="30px"/></button>
            <p>EVENTS</p>
            </div>

          </div>
        </div>
      </div>
    

       

  );
}
