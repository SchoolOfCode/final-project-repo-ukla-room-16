import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/Header.module.css";
import logo from "../../images/Familia9.png";

export default function Header({ user, person, familyName }) {
  return (
    <header className={styles.header}>
      <Image src={logo} width="150" height="150" />
      {familyName && (
        <h1 className={styles.familytext}>
          the <span className={styles.familyname}>{familyName}</span> family
        </h1>
      )}

      {user && (
        <div className={styles.userDisplay}>
          {person ? (
            <Link href={`/users?id=${person.id}`}>
              <a>
                <Image
                  className={styles.profilePic}
                  src={user.picture}
                  width="60"
                  height="60"
                />
              </a>
            </Link>
          ) : (
            <Image
              className={styles.profilePic}
              src={user.picture}
              width="60"
              height="60"
            />
          )}
          <a href="/api/auth/logout" className={styles.logout}>
            Logout
          </a>
        </div>
      )}
    </header>
  );
}
