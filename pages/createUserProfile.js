import Head from "next/head";
import css from "../styles/user.module.css";
import Image from "next/image";
import meal from "../images/meal.png";
import userProfile from "../images/userProfile.svg";
import medical from "../images/medical.png";
import clothes from "../images/clothes.png";
import shoes from "../images/shoes.png";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function createUserProfile() {
  const router = useRouter();
  const URL = process.env.NEXT_PUBLIC_URL;
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [favfood, setFaveFood] = useState("");
  const [bloodType, seBloodType] = useState("");
  const [allergies, setAllergies] = useState("");
  const [upperClothes, setUpperClothes] = useState("");
  const [lowerClothes, setLowerClothes] = useState("");
  const [shoeSize, setShoeSize] = useState("");
  const [gender, setGender] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");

  async function handleClick() {
    const updatesArray = [{ profile_name: userName}, {email: email}, {mobile_number: mobile}];
    console.log("testing!!!!!!!!!!", updatesArray[0])
    updatesArray.forEach(async (update) => {
      console.log(update)
      const response = await fetch(`${URL}/users/1`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profile_name: userName}),
    });

    const data = await response.json();
    console.log(data);
    })
    
    router.push("/user");
  }

  function handleUser(e) {
    setUserName(e.target.value);
  }

  function emailAddy(e) {
    setEmail(e.target.value);
  }
  function dateOfBirth(e) {
    setDob(e.target.value);
  }
  function userMobile(e) {
    setMobile(e.target.value);
  }
  function userAddress(e) {
    setAddress(e.target.value);
  }

  return (
    
   
    <div className={css.container}>
      <div className={css.subContainer}>
        <Image src={userProfile} width="259px" height="213px" />

        <input type="text" onChange={handleUser} placeholder="name" />
        <input type="text" onChange={emailAddy} placeholder="email" />
        <input type="text" onChange={dateOfBirth} placeholder="DOB" />
        <input type="text" onChange={userMobile} placeholder="mobile number" />
        <input type="text" onChange={userAddress} placeholder="home address" />
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
