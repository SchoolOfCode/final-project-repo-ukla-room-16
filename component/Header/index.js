// import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/Header.module.css";
import logo from "../../images/Familia9.png";

export default function Header({ user, person, familyName }) {
  console.log(familyName)
  return (
    <header className={styles.header}>
      <Image src={logo} width="150" height="150" />
      <h1 className={styles.titleFamily}>{familyName}</h1>
      <div className={styles.userDisplay}>
        <Link href={`/users?id=${person.id}`}>
          <a >
         
            <Image className={styles.profilePic} src={user.picture} width="60px" height="60px"  />
            
          </a>
        </Link>
        <a href="/api/auth/logout" className={styles.logout}>
          Logout
        </a>
      </div>
    </header>
  );
}
