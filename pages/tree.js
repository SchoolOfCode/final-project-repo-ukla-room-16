import React from "react";
import FamilyTree, { ourData } from "../component/FamilyTree/mytree.js";

export default function Tree() {
  // here we are displaying the tree developped in the component folder under FamilyTree/mytree.js
  return (
    <div style={{ height: "20%" }}>
      <FamilyTree nodes={ourData} />
    </div>
  );
}
