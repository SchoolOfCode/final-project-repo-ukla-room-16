import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import styles from "../styles/Dashboard.module.css";
import addIcon from "../images/icons8-add-100.png";
import familytree from "../images/familytree.jpg";
import UserInput from "../component/UserInput";
import Feed from "../component/Feed";
import NavBar from "../component/NavBar";
import Header from "../component/Header";
import FamilyTree from "../component/FamilyTree/mytree.js";
import SearchBar from "../component/SearchBar";

export default function Dashboard() {
  const URL = process.env.NEXT_PUBLIC_URL;
  const { user, isLoading, error } = useUser();
  const [person, setPerson] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [feed, setFeed] = useState([]);
  const router = useRouter();
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
          <UserInput person={person} feed={feed} setFeed={setFeed} />
          <Feed person={person} feed={feed} setFeed={setFeed} />
        </div>

        <div className={styles.rightcolumn}>
          <SearchBar feed={feed} setFeed={setFeed} />
          <div className={styles.events}>
            <h2 className={styles.eventheading}>EVENTS</h2>
            <div className={styles.buttonEvent}>
              <Image src={addIcon} width="30px" height="30px" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tree}>
        <FamilyTree />
        <motion.div
        whileHover={{ scale: 1.1}}
          className={styles.viewmore}
          onClick={() => {
            router.push(`/tree`);
          }}
        >
          View More...
        </motion.div>
      </div>
    </div>
  );
}
