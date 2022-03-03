// import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/Header.module.css";
import logo from "../../images/Familia9.png";

export default function Header({ user, person, familyName }) {
  console.log(familyName)
  return (
    <header className={styles.header}>
      <Image src={logo} width="200px" height="150px" />
      <h1>{familyName}</h1>
      <div className={styles.userDisplay}>
        <Link href={`/users?id=${person.id}`}>
          <a>
            <Image src={user.picture} width="60px" height="60px" />
          </a>
        </Link>
        <a href="/api/auth/logout" className={styles.logout}>
          Logout
        </a>
      </div>
    </header>
  );
}
