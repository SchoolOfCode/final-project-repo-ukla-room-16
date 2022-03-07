import React from "react";
import FamilyTree, { ourData } from "../component/FamilyTree/mytree.js";
import { useRouter } from "next/router";
import styles from '../styles/Dashboard.module.css'

export default function Tree() {
  // here we are displaying the tree developped in the component folder under FamilyTree/mytree.js
  const router = useRouter()
  return (
    <div style={{ height: "20%" }}>
      <FamilyTree nodes={ourData} />
      <button className={styles.view} onClick={()=> {router.push(`/dashboard`)}}>Back</button>
    </div>
  );
}
