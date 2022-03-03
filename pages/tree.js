import React from "react";
// import App from "../familytree/src/components/App/index.js"
// import App from "../component/FamilyTree/app.js"
import FamilyTree from "../component/FamilyTree/mytree.js"
import { ourData } from "../component/FamilyTree/FamilyMembers/familyMembers.js"


export default function Tree() {
 
// here we are displaying the tree developped in the component folder under FamilyTree/mytree.js
  return (
    <div style={{width: '100%'}}>

      <FamilyTree   />
    </div>
  );
}


// export const ourData = 


//  [
//                 { id: 2, pids: [3], gender: 'male', name:'something', born: '1952-10-10' },
//                 { id: 3, pids: [2], gender: 'female',name: 'Laura Shepherd', born: '1943-01-13'},
//                 { id: 4, pids: [5],  name: 'Rowan Annable' },
//                 { id: 5, pids: [4], gender: 'female', name: 'Lois Sowle' },
//                 { id: 6, mid: 2, fid: 3, pids: [7], gender: 'female', name: 'Tyler Heath', born: '1975-11-12'},
//                 { id: 7, pids: [6], mid: 5, fid: 4, gender: 'male',  name: 'Samson Stokes', born: '1986-10-01'},
//                 { id: 8, pids: [9], mid: 7, fid: 6, gender: 'female', name: 'Celeste Castillo', born: '2021-02-01' },
//                 { id: 9, pids: [8], gender: 'male', name: 'john', born: '2021-02-01' }
           
//             ]