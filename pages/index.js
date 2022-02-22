
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import frontimage from "../images/familia_frontpage_image.jpg"
import logofamilia from "../images/Familia.png"
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
const {user, error, isLoading} = useUser();
console.log(user);
if (isLoading) return <div>...loading</div>
if (error) return <div>{error.message}</div>
if (user){
  return (
    <>
      <h1> Welcome {user.name}!</h1>
      <a href="/api/auth/logout">Logout</a>
    </>
  )
}

  return (
    <div>
     <h1 className={styles.title}>Familia</h1>
      <Image src={logofamilia}
      alt="logo saying Familia, the name of our app"
      className={styles.logo} 
      
      />
      

      <Image
      src={frontimage}
      alt="Picture of a family from grandparents, to children and grandchildren"
      width="1000em"
      height="500em"
    />
<a href="/api/auth/login">Login</a>
<button className={styles.signup}> Sign Up</button>
<button className={styles.login}> Login</button>


    </div>
  )
};