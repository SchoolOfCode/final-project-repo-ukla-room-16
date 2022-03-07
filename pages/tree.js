import React, { useState, useEffect } from "react";
import FamilyTree from "../component/FamilyTree/mytree.js";
import { useRouter } from "next/router";
import styles from "../styles/Dashboard.module.css";

// const data = [

//   { id: 1,
//     name: "Marinette avatar",
//     gender: "female",
//     pids: [2],
//   },
//   { id: 2,
//       name: "Anthony Avatar",
//       gender: "male",
//       pids: [1],
//     },
//     { id: 4,
//       name: "Rosemary Profil",
//       gender: "female",
//       pids: [3],
//       fid: 1,
//       mid: 2,
//     },
//   { id: 3,
//     name: "Tim Profil",
//     gender: "male",
//     pids: [4],
//     picture: 'https://i.ibb.co/SNKn7b8/f1.png',
//   //   fid: 1,
//   //   mid: 2,
//   },
//   { id: 5,
//     name: "Marie Profil",
//     gender: "female",
//     picture: 'https://i.ibb.co/ccSq7Kq/g1.png',
//     mid: 3,
//     fid:4,
//   },
//   { id: 6,
//     name: "Justin Profil",
//     gender: "male",
//     mid: 3,
//     fid: 4,
//   },
// ]

export default function Tree() {
  const URL = process.env.NEXT_PUBLIC_URL;
  let familyID = 1;
  const [ourData, setOurData] = useState([]);
  useEffect(() => {
    async function getFamily(familyID) {
      // FETCHING THE POSTS
      const res = await fetch(`${URL}/users?familyID=${familyID}`);
      const data = await res.json();
      data.payload.forEach((object) => {
        // object.name = object.full_name
        // object.full_name = null
        // object.family_id = null
        // object.profile_name = null
        object.gender = null
      })
      console.log(data.payload)
      setOurData(data.payload);
    }

    if (familyID) {
      getFamily(familyID);
    }
  }, [familyID]);

  // here we are displaying the tree developped in the component folder under FamilyTree/mytree.js
  const router = useRouter();
  return ourData.length > 0 ? (
    <div style={{ height: "100%" }}>
      {/* <button onClick={addRelationship}>+</button> */}
      <FamilyTree nodes={ourData} ourData={ourData} />
      <button
        className={styles.view}
        onClick={() => {
          router.push(`/dashboard`);
        }}
      >
        Back
      </button>
    </div>
  ) : null;
}
