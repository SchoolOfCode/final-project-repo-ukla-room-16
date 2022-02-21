
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import frontimage from "../images/familia_frontpage_image.jpg"
import Link from 'next/link';

export default function Home() {
  return (
    <div>
     <h1 className={styles.title}>Familia</h1>
      

      <Image
      src={frontimage}
      alt="Picture of a family from grandparents, to children and grandchildren"
      width="1000em"
      height="500em"
    />
{/* <a href="/api/auth/login">Login</a> */}
<button className={styles.signup}> Sign Up</button>
<button className={styles.login}> Login</button>


    </div>
  )
};