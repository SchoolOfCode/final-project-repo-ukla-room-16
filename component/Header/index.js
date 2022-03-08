import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../../styles/Header.module.css";
import logo from "../../images/Familia9.png";

export default function Header({ user, person, familyName }) {
  console.log(familyName);
  return (
    <motion.header initial={{y: -250}} animate={{y:0}} transition={{delay: 0.5, type: 'spring', stiffness: 100}} className={styles.header}>
      <Image src={logo} width="150" height="150" />
      <h1 /* initial={{opacity: 0}} animate={{opacity: 1}} */ className={styles.titleFamily}>{familyName}</h1>
      <div className={styles.userDisplay}>
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
