import { useUser } from "@auth0/nextjs-auth0";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "../styles/users.module.css";
import meal from "../images/meal.png";
import userProfile from "../images/userProfile.svg";
import medical from "../images/medical.png";
import clothes from "../images/clothes.png";
import shoes from "../images/shoes.png";


export default function User() {
  const router = useRouter();
  const { id } = router.query;

  const { user } = useUser();
  const [person, setPerson] = useState("");

  const [profile, setProfile] = useState({});
  const [error, setError] = useState("");
 
  const URL = process.env.NEXT_PUBLIC_URL;

  useEffect(() => {
    async function getUsers(personLoggingIn) {
      const res = await fetch(`${URL}/users`, {
        method: "GET",
      });
      const data = await res.json();
      const index = data.payload.findIndex((person) => {
        return person.email === personLoggingIn.email;
      });

      setPerson(data.payload[index]);
    }
    if (user) {
      getUsers(user);
    }
  }, [user]);

  useEffect(() => {
    async function getUserProfile() {
      try {
        const response = await fetch(`${URL}/users/${id}`);
        const data = await response.json();
        if (data.success === true) {
          setProfile(data.payload[0]);
          setError("");
        } else {
          setError("Fetch didn't work :(");
        }
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
    }
    if (id) {
      getUserProfile();
    }
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <Link href="/dashboard">
          <a className={styles.goHome}>X</a>
        </Link>

        <Image
          src={profile.picture ? profile.picture : userProfile}
          width="250px"
          height="200px"
        />
        <Link href={`/updateUserProfile?id=${person.id}`}>
          <a style={{display: Number(person.id) === Number(id) ? "block" :"none"}} className={styles.createProfile}>Update Profile</a>
        </Link>
        <p>{profile.profile_name}</p>
        <p>{profile.mobile_number}</p>
        <h3> {profile.dob} </h3>
        <p> {profile.address} </p>
        <p> {profile.email} </p>
        <p> {profile.gender} </p>

        <div className={styles.info}>
          <div className={styles.subInfo}>
            <Image src={meal} width="85px" height="90px" />
            <ul>
              <p>Favourite foods: {profile.fav_food}</p>
            </ul>
          </div>
          <div className={styles.subInfo}>
            <div>
              <Image src={medical} width="80px" height="90px" />
            </div>

            <ul>
              <p>Blood type: {profile.blood_type} </p>
              <p>Allergies: {profile.allergies}</p>
              <p>Emergency Contacts: {profile.emergency_contacts}</p>
            </ul>
          </div>
          <div className={styles.subInfo}>
            <Image src={clothes} width="80px" height="90px" />
            <ul>
              <p>Upper-Body: {profile.clothes_size_upper}</p>
              <p>Lower-Body: {profile.clothes_size_lower}</p>
            </ul>
          </div>
          <div className={styles.subInfo}>
            <Image src={shoes} width="80px" height="90px" />
            <ul>
              <p>Shoe size: {profile.shoe_size}</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
