import Head from "next/head";
import Link from "next/link";
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
import NavBar from "../component/NavBar";
import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";

export default function Home() {
  const URL = process.env.NEXT_PUBLIC_URL;
  const { user, isLoading, error} = useUser();
  const [person, setPerson] = useState("")
  const [familyName, setFamilyName] = useState("")
console.log(user)
console.log("personh8t8ghrjghrhgurh")
console.log(person)
  useEffect(()=> {
        
        async function getUsers(personLoggingIn) {

          const res = await fetch(`${URL}/users`, {
            method: "GET",
          });
          const data = await res.json();
          const index = data.payload.findIndex((person) => {
            return person.email === personLoggingIn.email;
          });

          setPerson(data.payload[index])

          let familyID = data.payload[index].family_id

          const familyRes = await fetch(`${URL}/families/${familyID}`, {
            method: "GET",
          });
          const familyData = await familyRes.json();
          const familyIndex = familyData.payload.findIndex((family) => {
            return family.id === familyID;
          });
          setFamilyName(familyData.payload[familyIndex].name)
  
        }
      if (user) {
        getUsers(user);
      }

      },[user])


      // waiting message on loading between pages
  if (isLoading) return <div>...loading</div>;

  //display error message in case of issue
  if (error) return <div>{error.message}</div>;
  return (
    <div>
      <header className={styles.header}>
        <Image src={logo} width="150px" height="150px" />
        {/* <p><b>{user.family_name}</b></p> */}
        <p>
          <b>{familyName}</b>
        </p>

        <Link href="/user">
          <a>
            <Image src={user.picture} width="70px" height="70px" />
          </a>
        </Link>
      </header>

      <div className={styles.container}>
        <div className={styles.leftcolumn}>
          {/* <div className={styles.navbar}>
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
          </div> */}
          <NavBar/>
        </div>
        <div className={styles.middlecolumn}>
          <UserInput person={person}/>

          <Feed person={person} />
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

// import { useRouter } from 'next/router'

// export default function Dashboard() {
//   const router = useRouter()
//   const { pid } = router.query

//   return <p>Post: {pid}</p>
// }