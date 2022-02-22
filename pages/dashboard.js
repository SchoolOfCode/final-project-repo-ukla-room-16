import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Dashboard.module.css";
import UserInput from "../component/UserInput";
import Feed from "../component/Feed";
import logo from "../images/Familia9.png";
import addIcon from "../images/icons8-add-100.png";
import familytree from "../images/familytree.jpg";
import userProfilePicture from "../images/user-icon.jpeg";
import recipe from "../images/recipe.png";
import tracker from "../images/tracker.png";
import gallery from "../images/gallery.png";
import calendar from "../images/calendar.png";
import contacts from "../images/contacts.png";

export default function Dashboard() {
  return (
    <div>
      <header className={styles.header}>
        <Image src={logo} width="150px" height="150px" />
        <p> My family name</p>

        <Image src={userProfilePicture} width="80px" height="80px" />
      </header>

      <div className={styles.container}>
        <div className={styles.leftcolumn}>
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
            <button className={styles.searchbutton}>submit</button>
          </div>

          <div className={styles.tree}>
            <Image src={familytree} />
          </div>

          <div className={styles.events}>
            <button>
              <Image src={addIcon} width="30px" height="30px" />
            </button>
            <p>EVENTS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
