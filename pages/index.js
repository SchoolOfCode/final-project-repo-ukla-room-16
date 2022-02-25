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
import NavBar from "../component/NavBar";


export default function Home() {
  const { user, error, isLoading } = useUser();

console.log(user);
  // waiting message on loading between pages
  if (isLoading) return <div>...loading</div>;

  //display error message in case of issue
  if (error) return <div>{error.message}</div>;

  // when user logs in say welcome with the name of the user.
  // The object returned when logging in has various keys which can be used

  
  if (user) {
    return (
      <>
      <header className={css.header}>
      <Link href="/dashboard"><Image src={logofamilia} width="150px" height="150px" /></Link>
        <p><b>{user.family_name}</b></p>

        <Link href="/user"><a><Image src={user.picture} width="70px" height="70px" /></a></Link>
        
      </header>

      {/* here we are passing down the name and email of the user as a prop */}
      <NewUsers name={user.name} email={user.email}/>

        {/* here picking the full name of the user to display welcome message to */}
        <h1><center> Welcome {user.given_name}!</center></h1>
      
      
      {/* <NavBar /> */}





<div className={styles.containerbuttons}>
        <div className={styles.leftcolumn}>

        <CreateTree email={user.email} />
        </div>
        <div className={styles.rightcolumn}>
        <JoinTree email={user.email} />
        </div>
        </div>
       
        {/* <Link href="/dashboard">Homepage</Link> */}

        {/* displaying a log out button under the welcome message */}
        <center><a href="/api/auth/logout" className={styles.logout}>Logout</a></center>

      </>
    );
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
