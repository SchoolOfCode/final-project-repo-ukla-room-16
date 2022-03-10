import React, { useState, useEffect } from "react";
import FamilyTree from "../component/FamilyTree/mytree.js";
import { useRouter } from "next/router";
import styles from "../styles/Dashboard.module.css";
import AddRelationship from "../component/AddRelationship/";

export default function Tree() {
  const URL = process.env.NEXT_PUBLIC_URL;
  let familyID = 1;
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
          person.pid = null
        } else {
          let array = []
          data.payload[1].forEach((person)=>{
            array.push(person.id)
          })
          person.pid = array
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
  const router = useRouter();
  return ourData.length > 0 ? (
    <div style={{ height: "100%" }}>
      <AddRelationship />
      <FamilyTree nodes={ourData}/>
      <button
        className={styles.viewmore}
        onClick={() => {
          router.push(`/dashboard`);
        }}
      >
        Back
      </button>
    </div>
  ) : null;
}
