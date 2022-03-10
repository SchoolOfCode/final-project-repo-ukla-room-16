import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";

import styles from "../styles/Dashboard.module.css";

import FamilyTree from "../component/FamilyTree/mytree.js"
import AddRelationship from "../component/AddRelationship/"

export default function Tree() {
  const URL = process.env.NEXT_PUBLIC_URL;
  const [familyID, setFamilyID] = useState("")
  const { user} = useUser();
  const router = useRouter()

  if (user) {
    //GET ALL THE USERS
    async function getUsers(personLoggingIn) {
      const res = await fetch(`${URL}/users`, {
        method: "GET",
      });
      const data = await res.json();

      //CHECKING IF THAT USER EXISTS IN THE USERS TABLE
      const index = data.payload.findIndex((person) => {
        return person.email === personLoggingIn.email;
      });

      // setPerson(data.payload[index])

      //IF THAT USER DOES EXISTS, CHECK IF THEY HAVE A FAMILY ID.
      if (index !== -1 && data.payload[index].family_id) {
        setFamilyID(data.payload[index].family_id)
      }
    }

    //RUN THE FUNCTION WITH THE USER FROM AUTH0
    getUsers(user);
  }

  const [ourData, setOurData] = useState([]);

  useEffect(() => {
    async function getFamily() {
      console.log("get family is running");
      // FETCHING THE USERS
      const userRes = await fetch(`${URL}/users?familyID=${familyID}`);
      const userData = await userRes.json();
      userData.payload.forEach(async(person) => {
        const res = await fetch(`${URL}/pid/${person.id}`);
        const data = await res.json()
        if(data.payload[1].length===0) {
          person.pids = null
          person.name = person.full_name
        } else {
          let array = []
          data.payload[1].forEach((person)=>{
            array.push(person.id)
          })
          person.pids = array
          person.name = person.full_name
        }
        })
        setOurData(userData.payload)

    }

    getFamily();
    console.log("useEffect is running");
  }, []);


  console.log(ourData);
  // here we are displaying the tree developped in the component folder under FamilyTree/mytree.js
  if(ourData.length > 0 && user) {
  return (
    <div style={{ height: "100%" }}>
      <AddRelationship ourData={ourData}/>
      <FamilyTree nodes={ourData} />
      <button
        className={styles.viewmore}
        onClick={() => {
          router.push(`/dashboard`);
        }}
      >
        Back
      </button>
    </div>
  )
} else {
  return (
    <button onClick={() => {
      router.push(`/`);
    }} className={styles.viewmore}>Please log in</button>
  );
}
}
