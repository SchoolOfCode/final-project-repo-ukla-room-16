import React from "react";
import FamilyTree from "../component/FamilyTree/mytree.js"
import { ourData } from "../component/FamilyTree/FamilyData.js/familyData.js";


export default function Tree() {
 
// here we are displaying the tree developped in the component folder under FamilyTree/mytree.js
  return (
    <div style={{height: '100%'}}>
      <FamilyTree
        nodes={
            ourData
        }
      />
    </div>
  );
}
