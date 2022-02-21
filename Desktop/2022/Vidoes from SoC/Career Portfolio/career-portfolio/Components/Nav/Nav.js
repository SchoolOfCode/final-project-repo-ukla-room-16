import Link from 'next/link';
import css from '../../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={css.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>

        <li>
          <Link href='/about-me'>About Me</Link>
        </li>

        <li>
          <Link href='/phd-research'>PhD Research</Link>
        </li>

        <li>
          <Link href='/my-Resume'>Resume</Link>
        </li>

        <li>
          <Link href='/awards-and-certificates'>Awards and Certificates</Link>
        </li>

        <li>
          <Link href='/my-projects'>Projects</Link>
        </li>

        <li>
          <Link href='/contact'>Contact Details</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav