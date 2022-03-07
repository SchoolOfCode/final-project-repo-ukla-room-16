import {useEffect, useState} from 'react'
import FamilyTree from './mytree';

function Trying() {
let familyID = 1;
const [ourData, setOurData] = useState([]);
useEffect(() => {
  async function getFamily(familyID) {
    //FETCHING THE POSTS
    const res = await fetch(`${URL}/users?familyID=${familyID}`);
    const data = await res.json();
    console.log(data);
    setOurData(data.payload);
  }

  if (familyID) {
    getFamily(familyID);
  }
}, [familyID]);
return ourData;
}

Trying()

export default ourData;
// export const ourData = [
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
