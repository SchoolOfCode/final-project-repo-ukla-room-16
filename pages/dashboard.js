import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Dashboard.module.css";
import UserInput from "../component/UserInput";
import Feed from "../component/Feed";
import landingPic from "../images/25856.jpg";
import addIcon from "../images/icons8-add-100.png";

export default function Dashboard() {
  return (
    <div>
      <header className={styles.header}></header>
      <div className={styles.container}>
        <div className={styles.dashboard}>
          <Image src={landingPic} />
        </div>
        <div>
          <UserInput />
          <Feed />
        </div>
        <div>
          <input
            type="text"
            className={styles.searchBar}
            placeholder="Search bar"
          />
          <div className={styles.tree}>
            <p>FAMILY TREE</p>
          </div>
          <div className={styles.events}>
            <button>
              <Image src={addIcon} />
            </button>
            <p>EVENTS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
