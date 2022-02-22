
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import frontimage from "../images/familia_frontpage_image.jpg"
import logofamilia from "../images/Familia_logo_name.png"
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
const {user, error, isLoading} = useUser();
console.log(user);

// waiting message on loading between pages
if (isLoading) return <div>...loading</div>
//display error message in case of issue
if (error) return <div>{error.message}</div>
// when user logs in say welcome with the name of the user. 
// The object returned when logging in has various keys which can be used
if (user){
  return (
    <>
  {/* here picking the full name of the user to display welcome message to */}
      <h1> Welcome {user.name}!</h1>
      {/* displaying a log out button under the welcome message */}
      <a href="/api/auth/logout">Logout</a>
    </>
  )
}

  return (
    <div>
    {/* logo of the app display */}
     <h1 className={styles.title}>
     {/* Familia   </h1> */}

      <Image src={logofamilia}
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
{/* auth0 button to go to login/sign up box */}
<a href="/api/auth/login">Login / Sign Up</a>


{/* <button className={styles.signup}> Sign Up</button>
<button className={styles.login}> Login</button> */}


    </div>
  )
};