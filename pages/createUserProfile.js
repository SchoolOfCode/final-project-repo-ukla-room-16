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
  const [bloodType, setBloodType] = useState("");
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

   return (
    <div className={css.container}>
      <div className={css.subContainer}>
        <Image src={userProfile} width="259px" height="213px" />

        <input type="text" onChange={e=> {(setUserName(e.target.value))}} placeholder="name"/>
        <input type="text" onChange={e=> {(setEmail(e.target.value))}} placeholder="email" />
        <input type="text" onChange={e=> {(setDob(e.target.value))}} placeholder="DOB" />
        <input type="text" onChange={e=> {(setGender(e.target.value))}} placeholder="gender"  />
        <input type="text" onChange={e=> {(setMobile(e.target.value))}} placeholder="mobile number" />
        <input type="text" onChange={e=> {(setAddress(e.target.value))}} placeholder="home address" />
       
        <div className={css.info}>
          <div className={css.subInfo}>
            <Image src={meal} width="85px" height="90px" />
            <ul>
            <input type="text" onChange={e=> {(setFaveFood(e.target.value))}} placeholder="favourite food"  />
            </ul>
          </div>
          <div className={css.subInfo}>
            <Image src={medical} width="80px" height="50px" />
            <ul>
            <input type="text" onChange={e=> {(setBloodType(e.target.value))}} placeholder="blood type"  />
            <input type="text" onChange={e=> {(setAllergies(e.target.value))}} placeholder="allergies"  />
            <input type="text" onChange={e=> {(setEmergencyContact(e.target.value))}} placeholder="emergency contact"  />
            </ul>
          </div>
          <div className={css.subInfo}>
            <Image src={clothes} width="80px" height="90px" />
            <ul>
            <input type="text" onChange={e=> {(setUpperClothes(e.target.value))}} placeholder="clothes size upper"  />
            <input type="text" onChange={e=> {(setLowerClothes(e.target.value))}} placeholder="clothes size lower"  />
            </ul>
          </div>
          <div className={css.subInfo}>
            <Image src={shoes} width="80px" height="90px" />
            <ul>
            <input type="text" onChange={e=> {(setShoeSize(e.target.value))}} placeholder="shoe size"  />
            </ul>
          </div>
        </div>
        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
    
  );
}
