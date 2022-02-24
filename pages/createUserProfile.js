import Head from "next/head";
import css from "../styles/user.module.css";
import Image from "next/image";
import meal from "../images/meal.png";
import userProfile from "../images/userProfile.svg";
import medical from "../images/medical.png";
import clothes from "../images/clothes.png";
import shoes from "../images/shoes.png";
import { useState, useEffect } from "react";

export default function createUserProfile (){
  const URL = process.env.NEXT_PUBLIC_URL;
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");


async function handleClick(){
 const response = await fetch(`${URL}/users/1`, 
  {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({profile_name: userName,  email: email}),
  });
 
  const data = await response.json();
  console.log(data);
}

  function handleUser(e) {
    setUserName(e.target.value)
}

  function handleemail(e) {
  setEmail(e.target.value)
}

return (
  <div className={css.container}>
    <div className={css.subContainer}>
      <Image src={userProfile} width="259px" height="213px" />

     <input type="text" onChange={handleUser} placeholder="name" /> 
     <input type="text" onChange={handleemail} placeholder="email" /> 
     <button onClick={handleClick}>Submit</button>
   

       <div className={css.info}>
        <div className={css.subInfo}>
          <Image src={meal} width="85px" height="90px" />
          <ul>
            <p>Favourite foods: Sushi - Pasta.</p>
          </ul>
        </div>
        <div className={css.subInfo}>
          <Image src={medical} width="80px" height="50px" />
          <ul>
            <p>Blood type: 0-</p>
            <p>Allergies: None</p>
          </ul>
        </div>
        <div className={css.subInfo}>
          <Image src={clothes} width="80px" height="90px" />
          <ul>
            <p>Upper-Body: Medium</p>
            <p>Lower-Body: 33 cm</p>
          </ul>
        </div>
        <div className={css.subInfo}>
          <Image src={shoes} width="80px" height="90px" />
          <ul>
            <p>US: 7</p>
            <p>UK: 6</p>
            <p>UE: 28cm</p>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
}