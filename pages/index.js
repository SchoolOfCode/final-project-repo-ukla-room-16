import Image from "next/image";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";
import frontimage from "../images/familia_frontpage_image.jpg";
import logofamilia from "../images/Familia9.png";
import tree from "../images/tree.png";
import Header from "../component/Header";
import NewUsers from "../component/NewUser";
import CreateTree from "../component/CreateTree";
import JoinTree from "../component/JoinTree";
import FullPageLoader from "../component/FullpageLoader";

export default function Home() {
  const { user, error, isLoading, isAuthenticated } = useUser();
  const [person, setPerson] = useState();

  const URL = process.env.NEXT_PUBLIC_URL;
  const [hasFamilyID, setHasFamilyID] = useState(false);
  const router = useRouter();

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

  //IF USER SUCCESSFULLY LOGS IN

  if (user) {
    let familyID;

    //GET ALL THE USERS
    async function getUsers(personLoggingIn) {
      const res = await fetch(`${URL}/users`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();

      //CHECKING IF THAT USER EXISTS IN THE USERS TABLE
      const index = data.payload.findIndex((person) => {
        return person.email === personLoggingIn.email;
      });

      // setPerson(data.payload[index])

      //IF THAT USER DOES EXISTS, CHECK IF THEY HAVE A FAMILY ID.
      if (index !== -1 && data.payload[index].family_id) {
        familyID = data.payload[index].family_id;
        if (familyID > 0) {
          setHasFamilyID(true);
        }
      }
    }

    //RUN THE FUNCTION WITH THE USER FROM AUTH0
    getUsers(user);

    //ONCE THE USER LOGS IN, AND THEY ALSO HAVE A FAMILY ID, DIRECT THEM TO THIS PAGE
    if (hasFamilyID) {
      router.push("/dashboard");
    }

    //ONCE THE USER LOGS IN, AND THEY DON'T HAVE A FAMILY ID, DIRECT THEM TO THIS PAGE
    if (hasFamilyID === false) {
      // console.log({ user }, { person });
      return (
        <>
          <Header user={user} />

          {/* here we are passing down the name and email of the user as a prop */}
          <NewUsers
            name={user.name}
            email={user.email}
            picture={user.picture}
          />
          <h1 className={styles.welcome}>
            <center> Welcome {user.given_name}!</center>
          </h1>
          <div className={styles.pagecontainer}>
            <div className={styles.containerbuttons}>
              <div className={styles.leftcolumn}>
                <CreateTree
                  email={user.email}
                  setHasFamilyID={setHasFamilyID}
                />
              </div>
              <Image src={tree} width="400" height="400" />
              <div className={styles.rightcolumn}>
                <JoinTree email={user.email} setHasFamilyID={setHasFamilyID} />
              </div>
            </div>
          </div>
        </>
      );
    } else if (!isAuthenticated) {
      return <FullPageLoader />;
    }
  }

  //IF THE USER IS NOT LOGGED IN, DIRECT THEM TO THIS PAGE

  return (
    <div className={styles.home}>
      {/* logo of the app display */}
      <div className={styles.left}>
<<<<<<< HEAD
        <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1, duration: 1.5}}className={styles.title}>
          {/* Familia </h1> */}

=======
        <h1 className={styles.title}>
>>>>>>> 49fca9864524489976ff79c7e45bfa0ed3423165
          <Image
            src={logofamilia}
            alt="logo saying Familia, the name of our app"
            className={styles.logo}
          />
        </motion.h1>
        {/* displaying the family picture drawing on landing page, dynamic image depending on screen size with em */}
        <Image
          src={frontimage}
          alt="Picture of a family from grandparents, to children and grandchildren"
          width="1000"
          height="450"
        />
      </div>
      <div className={styles.right}>
        {/* auth0 button to go to login/sign up box */}

        <motion.div whileHover={{ scale: 1.2 }} className={styles.registerbox}>
          <a href="/api/auth/login" className={styles.register}>
            Register
          </a>
        </motion.div>
      </div>
    </div>
  );
}
