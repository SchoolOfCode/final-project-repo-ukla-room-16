import { useUser } from "@auth0/nextjs-auth0";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "../component/Header";

import styles from "../styles/Users.module.css"
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
      <Header  user={user} person={person} />
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
          <a
            style={{
              display: Number(person.id) === Number(id) ? "block" : "none",
            }}
            className={styles.createProfile}
          >
            Update Profile
          </a>
        </Link>
        {profile.profile ? <p>Name: {profile.profile_name}</p> : null}
        {profile.mobile_number ? <p>Mobile Number: {profile.mobile_number}</p> : null}
        {profile.dob ? <h4>DOB: {profile.dob}</h4> : null}
        {profile.address ? <p>Address: {profile.address}</p> : null}
        {profile.email ? <p> Email: {profile.email}</p> : null}
        {profile.gender ? <p>Gender: {profile.gender}</p> : null}

        <div className={styles.info}>
          {profile.fav_food ? (
            <div className={styles.subInfo}>
              <Image src={meal} width="85px" height="90px" />
              <ul>
                <p>Favourite foods: {profile.fav_food}</p>
              </ul>
            </div>
          ) : null}
          {profile.blood_type || profile.allergies || profile.emergency_contacts ? (
            <div className={styles.subInfo}>
              <div>
                <Image src={medical} width="80px" height="90px" />
              </div>
              <ul>
                {profile.blood_type ? (
                  <p>Blood type: {profile.blood_type} </p>
                ) : null}
                {profile.allergies ? (
                  <p>Allergies: {profile.allergies}</p>
                ) : null}
                {profile.emergency_contacts ? <p>Emergency Contacts: {profile.emergency_contacts}</p> : null}
              </ul>
            </div>
          ) : null}
          {profile.clothes_size_upper || profile.clothes_size_lower ? (
            <div className={styles.subInfo}>
              <Image src={clothes} width="80px" height="90px" />
              <ul>
                {profile.clothes_size_upper ? (
                  <p>Upper-Body: {profile.clothes_size_upper}</p>
                ) : null}
                {profile.clothes_size_lower ? (
                  <p>Lower-Body: {profile.clothes_size_lower}</p>
                ) : null}
              </ul>
            </div>
          ) : null}
          {profile.shoe_size ? (
            <div className={styles.subInfo}>
              <Image src={shoes} width="80px" height="90px" />
              <ul>
                <p>Shoe size: {profile.shoe_size}</p>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
