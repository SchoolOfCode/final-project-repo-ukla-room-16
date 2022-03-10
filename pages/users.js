import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Users.module.css";

import meal from "../images/cuttlery.jpg";
import userProfile from "../images/userProfile.svg";
import medical from "../images/health.jpg";
import clothes from "../images/clothes.jpg";
import shoes from "../images/shoes.jpg";

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
          <a className={styles.x}>X</a>
        </Link>

        {profile && (
          <Image
            src={profile.picture ? profile.picture : userProfile}
            className={styles.userpic}
            width="120px"
            height="140px"
          />
        )}

        <Link href={`/updateUserProfile?id=${person.id}`}>
          <motion.a
            whileHover={{ scale: 1.1 }}
            style={{
              display: Number(person.id) === Number(id) ? "block" : "none",
            }}
            className={styles.createProfile}
          >
            Update Profile
          </motion.a>
        </Link>
        <div>
          <div>
        {profile.profile_name? <p className={styles.usersData}>Name: {profile.profile_name}</p> : null}
        </div>
        {profile.mobile_number ? (
         <p className={styles.usersData}>Mobile Number: {profile.mobile_number}</p> 
        ): null}
        {profile.dob ? <p className={styles.usersData}>DOB: {profile.dob}</p> : null}
        {profile.address ? <p className={styles.usersData}>Address: {profile.address}</p> : null}
        {profile.email ? <p className={styles.usersData}> Email: {profile.email}</p> : null}
        {profile.gender ? <p className={styles.usersData}>Gender: {profile.gender}</p> : null}
        </div>
        <div className={styles.info}>
          {profile.fav_food ? (
            <div className={styles.subInfo}>
              <Image src={meal} alt="meal icon before favourite food" width="85px" height="90px" />
              <ul>
                <p>Favourite foods: {profile.fav_food}</p>
              </ul>
            </div>
          ) : null}
          {profile.blood_type ||
          profile.allergies ||
          profile.emergency_contacts ? (
            <div className={styles.subInfo}>
              <div className={styles.medicIcon}>
                <Image src={medical} alt="health icon" width="80px" height="80px" />
              </div>
              <ul>
                {profile.blood_type ? (
                  <p>Blood type: {profile.blood_type} </p>
                ) : null}
                {profile.allergies ? (
                  <p>Allergies: {profile.allergies}</p>
                ) : null}
                {profile.emergency_contacts ? (
                  <p>Emergency Contacts: {profile.emergency_contacts}</p>
                ) : null}
              </ul>
            </div>
          ) : null}
          {profile.clothes_size_upper || profile.clothes_size_lower ? (
            <div className={styles.subInfo}>
              <Image src={clothes} alt="clothe size icon" width="80px" height="90px" />
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
              <Image src={shoes} alt="shoe size icon" width="80px" height="90px" />
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
