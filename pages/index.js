import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import frontimage from "../images/familia_frontpage_image.jpg";
import Link from "next/link";
import logofamilia from "../images/Familia9.png";
import { useUser } from "@auth0/nextjs-auth0";
import NewUsers from "../component/NewUser";
import CreateTree from "../component/CreateTree";
import css from "../styles/Dashboard.module.css";
import userProfilePicture from "../images/user-icon.jpeg";
import JoinTree from "../component/JoinTree";
import {useEffect, useState} from 'react'

export default function Home() {
  const { user, error, isLoading } = useUser();
  const URL = process.env.NEXT_PUBLIC_URL;
  const [hasFamilyID, setHasFamilyID] = useState(false)

  console.log(user);
  // waiting message on loading between pages
  if (isLoading) return <div>...loading</div>;

  //display error message in case of issue
  if (error) return <div>{error.message}</div>;

  // when user logs in say welcome with the name of the user.
  // The object returned when logging in has various keys which can be used

  /* Plan:
  1) if the user successfully logs in
  2) check if that user exists in the users table
  3) check if they have a family id
  4) if they don't have a family id, then render the whole create/join tree page
  5) if they do have a family id, then render the corresponding dashboard assigned to the family 
  
   */
  if (user) {

    let familyID;

    async function getUsers(personLoggingIn) {
      const res = await fetch(`${URL}/users`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data)

      //CHECKING IF THAT USER EXISTS IN THE USERS TABLE
      // const index = data.payload.findIndex((person) => {
      //   return person.email === personLoggingIn.email;
      // });

      const index = 6
      if (index !== -1) {
        familyID = data.payload[index].family_id;
        if(familyID) {
          setHasFamilyID(true)
        }
      }
      console.log(hasFamilyID);
    }

    console.log(hasFamilyID)

      if (hasFamilyID) {
        return <div>something</div>;
      }

      if (hasFamilyID === false) {
        return (
          <>
            <header className={css.header}>
              <Link href="/dashboard">
                <Image src={logofamilia} width="150px" height="150px" />
              </Link>
              <p>
                <b>{user.family_name}</b>
              </p>

              <Link href="/user">
                <a>
                  <Image src={user.picture} width="70px" height="70px" />
                </a>
              </Link>
            </header>

            {/* here we are passing down the name and email of the user as a prop */}
            <NewUsers name={user.name} email={user.email} />

            {/* here picking the full name of the user to display welcome message to */}
            <h1>
              <center> Welcome {user.given_name}!</center>
            </h1>

            {/* displaying a log out button under the welcome message */}
            <a href="/api/auth/logout">Logout</a>
            <center>
              <CreateTree email={user.email} />
              <JoinTree email={user.email} />
            </center>
            <Link href="/dashboard">Homepage</Link>
          </>
        );
      }
      getUsers(user);

    }

  return (
    <div className={styles.home}>
      {/* logo of the app display */}
      <div className={styles.left}>
        <h1 className={styles.title}>
          {/* Familia </h1> */}

          <Image
            src={logofamilia}
            alt="logo saying Familia, the name of our app"
            className={styles.logo}
          />
        </h1>
        {/* displaying the family picture drawing on landing page, dynamic image depending on screen size with em */}
        <Image
          src={frontimage}
          alt="Picture of a family from grandparents, to children and grandchildren"
          width="1000em"
          height="450em"
        />
      </div>
      <div className={styles.right}>
        {/* auth0 button to go to login/sign up box */}

        <div className={styles.box}>
          <a href="/api/auth/login" className={styles.login}>
            Login - Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
