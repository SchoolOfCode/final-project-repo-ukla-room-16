import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../../styles/Header.module.css";
import logo from "../../images/Familia9.png";

export default function Header({ user, person, familyName }) {
  return (
    <motion.header
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      className={styles.header}
    >
      <div className={styles.logo}>
        <Image src={logo} layout="fill" objectFit="contain" />
      </div>

      {familyName && (
        <div>
          <h1 className={styles.familytext}>
            the <span className={styles.familyname}>{familyName}</span> family
          </h1>
        </div>
      )}

      <div className={styles.userDisplay}>
        {person ? (
          <Link href={`/users?id=${person.id}`}>
            <a>
              <Image
                className={styles.profilePic}
                src={user.picture}
                width="60px"
                height="60px"
              />
            </a>
          </Link>
        ) : (
          <Image
            className={styles.profilePic}
            src={user.picture}
            width="60px"
            height="60px"
          />
        )}

        <motion.a
          whileHover={{ scale: 1.1 }}
          href="/api/auth/logout"
          className={styles.logout}
        >
          Logout
        </motion.a>
      </div>
    </motion.header>
  );
}
