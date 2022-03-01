// import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/Header.module.css";
import logo from "../../images/Familia9.png";

export default function Header({ user, person, children }) {
  return (
    <header className={styles.header}>
      <Image src={logo} width="150px" height="150px" />

      <div>{children}</div>

      <div>
        <Link href={`/user?id=${person.id}`}>
          <a>
            <Image src={user.picture} width="70px" height="70px" />
          </a>
        </Link>
        <a href="/api/auth/logout" className={styles.logout}>
          Logout
        </a>
      </div>
    </header>
  );
}
