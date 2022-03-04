import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";

import styles from "../styles/Dashboard.module.css";
import addIcon from "../images/icons8-add-100.png";
import familytree from "../images/familytree.jpg";
import UserInput from "../component/UserInput";
import Feed from "../component/Feed";
import NavBar from "../component/NavBar";
import Header from "../component/Header";
import FamilyTree from "../component/FamilyTree/mytree.js"
import { useRouter } from "next/router";

export default function Dashboard() {
  const URL = process.env.NEXT_PUBLIC_URL;
  const { user, isLoading, error } = useUser();
  const [person, setPerson] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [feed, setFeed] = useState([])
  const router = useRouter()
  console.log("user", user);
  console.log("person", person);

  useEffect(() => {
    async function getUsers(personLoggingIn) {
      const res = await fetch(`${URL}/users`, {
        method: "GET",
      });
      const data = await res.json();
      const index = data.payload.findIndex((person) => {
        return person.email === personLoggingIn.email;
      });
      setPerson(data.payload[index]);

      let familyID = data.payload[index].family_id;
      const familyRes = await fetch(`${URL}/families/${familyID}`, {
        method: "GET",
      });
      const familyData = await familyRes.json();
      setFamilyName(familyData.payload[0].name);
    }
    if (user) {
      getUsers(user);
    }
  }, [user]);

  // waiting message on loading between pages
  if (isLoading) return <div>...loading</div>;
  //display error message in case of issue
  if (error) return <div>{error.message}</div>;
  // if(!familyName) {
  //   router.push(`/`)
  // }
  return (
    <div>
      <Header user={user} person={person} familyName={familyName} />

      <div className={styles.container}>
        <div className={styles.leftcolumn}>
          <NavBar />
        </div>
        <div className={styles.middlecolumn}>
          <UserInput person={person} feed={feed} setFeed={setFeed}/>
          <Feed person={person} feed={feed} setFeed={setFeed}/>
        </div>

        <div className={styles.rightcolumn}>
          <div className={styles.searchcontainer}>
            <input
              type="text"
              className={styles.searchBar}
              placeholder="Search"
            />
            <div className={styles.searchbutton}>submit</div>
          </div>

          <div className={styles.tree}>
            {/* <Image src={familytree} /> */}
            <FamilyTree />
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
