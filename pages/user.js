import Head from "next/head";
import styles from "../styles/user.module.css";
import Image from "next/image";
import meal from "../images/meal.png";
import userProfile from "../images/userProfile.svg";
import medical from "../images/medical.png";
import clothes from "../images/clothes.png";
import shoes from "../images/shoes.png";
import crossButton from "../images/bluecross.png";
import { useState, useEffect } from "react";
import EditableComponent from "../component/EditableComponent";
import Link from "next/link";

export default function User() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const URL = process.env.NEXT_PUBLIC_URL;
  console.log(user);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(`${URL}/users/2`);
        const data = await response.json();
        if (data.success === true) {
          setUser(data.payload[0]);
          setError("");
        } else {
          setError("Fetch didn't work :(");
        }
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
    }
    getUser();
  }, []);

console.log(user.picture)

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <Link href="/dashboard">
          <a className={styles.goHome}>
            <Image src={crossButton} width="15px" height="15px" />
          </a>
        </Link>

        {/* <Image src={user.picture ? user.picture: userProfile} width="259px" height="213px" /> */}
        <Link href="/updateUserProfile">
          <a className={styles.createProfile}>Update Profile</a>
        </Link>
        <p>{user.profile_name}</p>
        <p>{user.mobile_number}</p>
        <h3> {user.dob} </h3>
        <p> {user.address} </p>
        <p> {user.email} </p>
        <p> {user.gender} </p>

        <div className={styles.info}>
          <div className={styles.subInfo}>
            <Image src={meal} width="85px" height="90px" />
            <ul>
              <p>Favourite foods: {user.fav_food}</p>
            </ul>
          </div>
          <div className={styles.subInfo}>
            <Image src={medical} width="80px" height="50px" />
            <ul>
              <p>Blood type: {user.blood_type} </p>
              <p>Allergies: {user.allergies}</p>
            </ul>
          </div>
          <div className={styles.subInfo}>
            <Image src={clothes} width="80px" height="90px" />
            <ul>
              <p>Upper-Body: {user.clothes_size_upper}</p>
              <p>Lower-Body: {user.clothes_size_lower}</p>
            </ul>
          </div>
          <div className={styles.subInfo}>
            <Image src={shoes} width="80px" height="90px" />
            <ul>
              <p>Shoe size: {user.shoe_size}</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
